import { FormElement } from './FormElement.js';
import { ValidationDirective } from './validations/ValidationDirective.js';

export class FormModel {
  /** @type {FormElement[]} */
  #elements;
  #inputValidation = new ValidationDirective();
  #valid = false;

  constructor(elements = []) {
    this.#elements = elements;
  }

  registerElement(element) {
    this.#elements.push(element);
  }

  updateElement = (element) => {
    const foundElement = this.#elements.find((e) => e.getRef() === element.getRef());
    const indexOf = this.#elements.indexOf(foundElement);

    if (indexOf !== -1) {
      this.#elements[indexOf] = element;
    }
  };

  hasInvalidInput() {
    const invalidInputs = this.#elements.find((e) => e.isValid() === false);
    return !invalidInputs;
  }

  isValid() {
    this.#checkFormValidation();
    return this.#valid;
  }

  #checkFormValidation() {
    this.#valid = this.#elements.every((element) => {
      return element.isValid();
    });
  }

  validateAll = () => {
    this.#elements.forEach((element) => {
      this.#inputValidation.validation(element.getRef(), { element, loaded: true });
    });
  };

  getFormData() {
    let formData = {};
    this.#elements.forEach((element) => {
      formData[element.getName()] = element.getValue();
    });

    return formData;
  }
}
