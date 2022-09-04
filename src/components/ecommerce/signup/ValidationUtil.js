import _isEmpty from "lodash-es/isEmpty";
import ValidationMessagesConst from "./ValidationMessagesConst";

const CANNOT_BE_EMPTY_PREFIX = "Enter ";

export const validateFirstName = (firstName) => {
  if (_isEmpty(firstName)) {
    return {
      isValid: false,
      helperText: `${CANNOT_BE_EMPTY_PREFIX} First Name`,
    };
  }
  return {
    isValid: true,
    helperText: "",
  };
};
export const validateLastName = (lastName) => {
  if (_isEmpty(lastName)) {
    return {
      isValid: false,
      helperText: `${CANNOT_BE_EMPTY_PREFIX} Last Name`,
    };
  }
  return {
    isValid: true,
    helperText: "",
  };
};
export const validateEmail = (email) => {
  if (_isEmpty(email)) {
    return {
      isValid: false,
      helperText: `${CANNOT_BE_EMPTY_PREFIX} Email`,
    };
  }
  // Check for other validations
  return {
    isValid: true,
    helperText: "",
  };
};
export const validatePassword = (password) => {
  if (_isEmpty(password)) {
    return {
      isValid: false,
      helperText: `${CANNOT_BE_EMPTY_PREFIX} Password`,
    };
  }
  // Check for other validations
  return {
    isValid: true,
    helperText: "",
  };
};

export const validatePasswordConfirmMatch = (password, confirmPassword) => {
  if (_isEmpty(password) && _isEmpty(confirmPassword)) {
    return {
      isValid: false,
      helperText: `${CANNOT_BE_EMPTY_PREFIX} Password`,
    };
  }
  if (password !== confirmPassword) {
    return {
      isValid: false,
      helperText: ValidationMessagesConst.PASSWORD.PASSWORDS_MISMATCH,
    };
  }
  return {
    isValid: true,
    helperText: "",
  };
};
