import { writable } from 'svelte/store';

/**
 * @typedef {Object} cashedRecord;
 * @property {string} uid
 * @property {string[]} words
 */

export class TableModel {
	/** @type {Array} */
	#records = [];

	/** @type {number} */
	#page;

	/** @type {number} */
	#limit;

	/** @type {import('svelte/store').Writable[]} */
	#filteredRecords = writable({ count: 0, records: [] });

	/**
	 * @type {cashedRecord[]}
	 */
	#cachedRecords = [];

	#activeRecordSet = [];

	constructor(records = [], page = undefined, limit = undefined) {
		this.#records = records;
		this.#activeRecordSet = records;
		this.#limit = limit;
		this.#page = page;
	}

	setRecords(records) {
		this.#records = records;
		this.#activeRecordSet = records;
		this.#showPageRecords(this.#page);
		this.#cacheRecords();
	}

	getRecords() {
		return this.#records;
	}

	#cacheRecords() {
		/** @type {cashedRecord[]} */
		let caches = [];

		this.#records.forEach((record) => {
			let words = [];
			for (const [key, value] of Object.entries(record)) {
				words.push(value);
			}
			caches.push({ record, words });
		});

		this.#cachedRecords = caches;
	}

	/**
	 * @param {string} sentence
	 */
	searchInRecords(sentence) {
		if (!sentence) {
			this.#activeRecordSet = this.#records;
			this.#showPageRecords(this.#page);
			return;
		}

		const words = sentence.split(' ');
		const foundRecords = [];
		this.#cachedRecords.forEach((cachedRecord) => {
			cachedRecord.words.forEach((cachedWord) => {
				words.forEach((word) => {
					if (word && cachedWord.toString().includes(word)) {
						const foundRecord = foundRecords.find((r) => r === cachedRecord);
						if (!foundRecord) {
							foundRecords.push(this.#records.find((r) => r === cachedRecord));
						}
					}
				});
			});
		});

		this.#activeRecordSet = foundRecords;
		this.#showPageRecords(this.#page);
	}

	async setPage(page) {
		if (this.#page === page) {
			return;
		}

		this.#page = page;
		this.#showPageRecords(page);
	}

	getPage() {
		return this.#page;
	}

	async setLimit(limit) {
		if (this.#limit === limit) {
			return;
		}

		this.#limit = limit;
		if (this.#page > 0) {
			this.#showPageRecords(this.#page);
		}
	}

	getLimit() {
		return this.#limit;
	}

	#setFilteredRecords(records) {
		if (!this.#limit || !this.#page) {
			return;
		}

		this.#filteredRecords.set({ count: this.#activeRecordSet.length, records });
	}

	getFilteredRecords() {
		return this.#filteredRecords;
	}

	removeRecord(record) {
		const foundRecord = this.#records.find((r) => r === record);
		const index = this.#records.indexOf(foundRecord);
		const newRecords = this.#records.filter((r) => r !== record);
		this.#records = newRecords;
		this.#activeRecordSet = newRecords;
		this.#showPageRecords(this.#page);
		this.#cacheRecords();

		return {
			index,
		};
	}

	addRecord(record, index = undefined) {
		if (index) {
			this.#records.splice(index, 0, record);
		} else {
			this.#records.push(record);
		}
		this.#cacheRecords();
	}

	#showPageRecords(pageNumber) {
		const pageRecords = this.#activeRecordSet.slice((pageNumber - 1) * this.#limit, pageNumber * this.#limit);
		this.#setFilteredRecords(pageRecords);
	}
}
