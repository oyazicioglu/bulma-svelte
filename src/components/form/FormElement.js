export class FormElement {
	#ref;
	#type;
	#name;
	#value;
	#validations;
	#valid;
	#label;

	constructor(ref, type, name, label, value, validations = []) {
		this.#ref = ref;
		this.#type = type;
		this.#name = name;
		this.#value = value;
		this.#validations = validations;
		this.#label = label;
		this.#valid = false;
	}

	setValue(value) {
		this.#value = value;
		this.#valid = this.#runValidations();
	}

	getValue() {
		return this.#value;
	}

	getLabel() {
		return this.#label;
	}

	isValid() {
		this.#valid = this.#runValidations();
		return this.#valid;
	}

	getRef() {
		return this.#ref;
	}

	getType() {
		return this.#type;
	}

	getValidations() {
		return this.#validations;
	}

	getName() {
		return this.#name;
	}

	#runValidations() {
		return this.#validations.every((validator) => {
			const result = validator.validate(this.#value, this.#label);
			return result.isValid;
		});
	}

	validationResult() {
		this.#runValidations();

		const validationErrors = [];
		this.#validations.map((validator) => {
			const validatorResult = validator.validate(this.#value, this.#label);
			if (!validatorResult.isValid) {
				validationErrors.push(validatorResult);
			}
		});

		return {
			isValid: this.#runValidations(),
			errors: validationErrors,
		};
	}
}
