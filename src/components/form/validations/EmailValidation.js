export class EmailValidation {
	validate(value, label) {
		const isValid =
			!!value &&
			!!value.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			);

		return {
			isValid: isValid,
			message: isValid ? undefined : `${label} is not a valid email address.`,
		};
	}
}
