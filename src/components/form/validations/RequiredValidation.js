export class RequiredValidation {
	constructor() {}

	validate(value, label) {
		const isValid = value !== undefined && value !== '' && value !== null;

		return {
			isValid,
			message: isValid ? undefined : `${label} is required.`,
		};
	}
}
