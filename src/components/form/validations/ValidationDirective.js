import { MaxLengthValidation } from './MaxLengthValidation';
import { MaxValueValidation } from './MaxValueValidation';
import { MinLengthValidation } from './MinLengthValidation';
import { MinValueValidation } from './MinValueValidation';
import { RequiredValidation } from './RequiredValidation';

export class ValidationDirective {
	createValidationsFromProps(props, ...initialValidations) {
		const validations = initialValidations;

		if (props.required) {
			validations.push(new RequiredValidation());
		}

		if (props.minlength) {
			validations.push(new MinLengthValidation(props.minlength));
		}

		if (props.maxlength) {
			validations.push(new MaxLengthValidation(props.maxlength));
		}

		if (props.max) {
			validations.push(new MaxValueValidation(props.max));
		}

		if (props.min) {
			validations.push(new MinValueValidation(props.min));
		}

		return validations;
	}

	validation(node, args) {
		if (!args.loaded) {
			return;
		}

		let result = undefined;

		const validate = (element) => {
			result = element.validationResult();
			node.dispatchEvent(new CustomEvent('validate', { detail: { element: args.element, ...result } }));
		};

		validate(args.element);

		return {
			result,
			update(updateArgs) {
				args = updateArgs;
			},
			destroy() {},
		};
	}
}
