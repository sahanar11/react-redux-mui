import _isEmpty from "lodash-es/isEmpty";
import ValidationMessagesConst from "./ValidationMessagesConst";

const CANNOT_BE_EMPTY_PREFIX = "Enter";

export const validateFirstName = (firstName) => {
  if (_isEmpty(firstName)) {
    return {
      error: true,
      helperText: `${CANNOT_BE_EMPTY_PREFIX} First Name`,
    };
  }
  return {
    error: false,
    helperText: "",
  };
};
export const validateLastName = (lastName) => {
  if (_isEmpty(lastName)) {
    return {
      error: true,
      helperText: `${CANNOT_BE_EMPTY_PREFIX} Last Name`,
    };
  }
  return {
    error: false,
    helperText: "",
  };
};
export const validateEmail = (email) => {
  if (_isEmpty(email)) {
    return {
      error: true,
      helperText: `${CANNOT_BE_EMPTY_PREFIX} Email`,
    };
  }
  // Check for other validations
  return {
    error: false,
    helperText: "",
  };
};
export const validatePassword = (password) => {
  if (_isEmpty(password)) {
    return {
      error: true,
      helperText: `${CANNOT_BE_EMPTY_PREFIX} Password`,
    };
  }
  // Check for other validations
  return {
    error: false,
    helperText: "",
  };
};

export const validatePasswordConfirmMatch = (password, confirmPassword) => {
  if (_isEmpty(password) && _isEmpty(confirmPassword)) {
    return {
      error: true,
      helperText: `${CANNOT_BE_EMPTY_PREFIX} Password`,
    };
  }
  if (password !== confirmPassword) {
    return {
      error: true,
      helperText: ValidationMessagesConst.PASSWORD.PASSWORDS_MISMATCH,
    };
  }
  return {
    error: false,
    helperText: "",
  };
};
