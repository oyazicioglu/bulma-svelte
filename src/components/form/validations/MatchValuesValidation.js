export class MatchValuesValidation {
  constructor() {}

  validate(values, labels) {
    const isValid = values[0] === values[1];

    return {
      isValid,
      message: isValid ? undefined : `${labels[0]} and ${labels[1]} does not match.`,
    };
  }
}
