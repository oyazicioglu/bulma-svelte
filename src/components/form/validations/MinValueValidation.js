export class MinValueValidation {
	#min;
	constructor(min) {
		this.#min = min;
	}

	validate(value, label) {
		const isValid = value !== undefined && value >= this.#min;
		return {
			isValid,
			message: isValid ? undefined : `${label} must be higher then ${this.#min}.`,
			correctedValue: this.#min.toString(),
		};
	}

	getValue() {
		return this.#min;
	}
}
