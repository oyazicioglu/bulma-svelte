export class MaxLengthValidation {
	#maxLength;
	constructor(maxLength) {
		this.#maxLength = maxLength;
	}

	validate(value, label) {
		const isValid = !!value && value.toString().length <= this.#maxLength;
		return {
			isValid,
			message: isValid ? undefined : `${label} must be less then ${this.#maxLength} characters long.`,
		};
	}

	getLength() {
		return this.#maxLength;
	}
}
