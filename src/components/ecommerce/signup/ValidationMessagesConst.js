const ValidationMessagesConst = {
  NAME: {},
  EMAIL: {
    HELPER_TEXT: "You can use letters, numbers & periods",
    INVALID_LENGTH:
      "Sorry, your email must be between 15 to 40 characters long",
    INVALID_FORMAT: "Sorry, your email format is wrong",
    INVALID_FORMAT_MISSING_AT_THE_RATE: "Don't forget to include the @",
  },
  PASSWORD: {
    HELPER_TEXT:
      "Use 8 or more characters with a mix of letters, numbers & symbols",
    INVALID_LENGTH: "Use 8 characters or more for your password",
    PASSWORD_STRENGTH_LOW:
      "Sorry, your password strength is low. You can use a combination of letters, numbers & special characters to build a strong password.",
    PASSWORDS_MISMATCH: "Those passwords didn't match. Try again.",
  },
};

export default ValidationMessagesConst;
