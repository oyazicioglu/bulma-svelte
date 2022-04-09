export class MinLengthValidation {
	#minLength;
	constructor(minLength) {
		this.#minLength = minLength;
	}

	validate(value, label) {
		const isValid = !!value && value.length >= this.#minLength;

		return {
			isValid,
			message: isValid ? undefined : `${label} must be at least ${this.#minLength} characters long.`,
		};
	}

	getLength() {
		return this.#minLength;
	}
}
