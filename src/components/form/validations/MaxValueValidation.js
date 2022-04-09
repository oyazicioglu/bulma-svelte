export class MaxValueValidation {
	#max;
	constructor(max) {
		this.#max = max;
	}

	validate(value, label) {
		const isValid = value !== undefined && value <= this.#max;
		return {
			isValid,
			message: isValid ? undefined : `${label} must be less then ${this.#max}.`,
			correctedValue: this.#max.toString(),
		};
	}

	getValue() {
		return this.#max;
	}
}
