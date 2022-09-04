import React, { useState } from "react";
import styledComponent from "styled-components";
import _isEmpty from "lodash-es/isEmpty";
import _cloneDeep from "lodash-es/cloneDeep";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import SignupActionBar from "./SignupActionBar";
import PasswordField from "./PasswordField";
import FlexBox from "../shared/FlexBox";
import {
  validateFirstName,
  validateLastName,
  validateEmail,
  validatePassword,
  validatePasswordConfirmMatch,
} from "./ValidationUtil";
import ValidationMessagesConst from "./ValidationMessagesConst";
import { useDispatch, useSelector } from "react-redux";
import { UserSelector } from "../../../redux/reducers/ecommerce/userSlice";
import UserThunk from "../../../redux/reducers/ecommerce/userThunk";
import UserService from "../../../services/ecommerce/UserService";

const StyledFlexBox = styled(FlexBox)`
  column-gap: 10px;
  margin-top: 10px;
`;

const InputFieldsGroup = styled("div")`
  margin: 20px 0 50px 0;
`;

const StyledContainer = styledComponent.div`
    border-radius: 4px;
    border: 1px solid gray;
    padding: 25px;
    margin: 0 auto;
    width: 700px;
`;

export default function () {
  const updateInProgress = useSelector(UserSelector.updateInProgress);
  const userCreated = useSelector(UserSelector.userCreated);
  const dispatch = useDispatch();
  const [fieldValidationResp, setFieldValidationResp] = useState({});
  console.log("fieldValidationResp", fieldValidationResp);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const setterFunctions = {
    firstName: setFirstName,
    lastName: setLastName,
    email: setEmail,
    password: setPassword,
    passwordConfirm: setPasswordConfirm,
  };
  const validatorFunctions = {
    firstName: validateFirstName,
    lastName: validateLastName,
    email: validateEmail,
    password: validatePassword,
    passwordConfirm: validatePassword,
  };

  const validateFieldAndUpdateState = (fieldName, fieldValue) => {
    const validationResp = validatorFunctions[fieldName]?.(fieldValue);
    // debugger;
    const tempFieldValidationResp = _cloneDeep(fieldValidationResp);
    // console.log(
    //   "tempFieldValidationResp before ",
    //   fieldName,
    //   fieldValidationResp
    // );
    tempFieldValidationResp[fieldName] = validationResp;
    // console.log(
    //   "tempFieldValidationResp after ",
    //   fieldName,
    //   tempFieldValidationResp
    // );
    setFieldValidationResp(tempFieldValidationResp);
  };

  const handleTextFieldChange = (fieldName, event) => {
    const fieldValue = event?.target?.value;
    setterFunctions[fieldName]?.(fieldValue);
    validateFieldAndUpdateState(fieldName, fieldValue);

    // if (
    //   (fieldName === "password" || fieldName === "passwordConfirm") &&
    //   !_isEmpty(password) &&
    //   !_isEmpty(passwordConfirm)
    // ) {
    //   // TODO: need to take care of this
    //   validatePasswordConfirmMatch(password, passwordConfirm);
    // }
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleToggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSignupClick = () => {
    const tempFieldValidationResp = _cloneDeep(fieldValidationResp);

    tempFieldValidationResp["firstName"] =
      validatorFunctions["firstName"]?.(firstName);
    tempFieldValidationResp["lastName"] =
      validatorFunctions["lastName"]?.(lastName);
    tempFieldValidationResp["email"] = validatorFunctions["email"]?.(email);
    tempFieldValidationResp["password"] =
      validatorFunctions["password"]?.(password);
    tempFieldValidationResp["passwordConfirm"] =
      validatorFunctions["passwordConfirm"]?.(passwordConfirm);

    setFieldValidationResp(tempFieldValidationResp);

    const errorFields = [
      "firstName",
      "lastName",
      "email",
      "password",
      "passwordConfirm",
    ].filter((fieldName) => {
      return tempFieldValidationResp?.[fieldName]?.error;
    });
    if (!_isEmpty(errorFields)) {
      // there are errors
      return;
    }
    dispatch(
      UserThunk.createUser({
        userDetails: {
          firstName,
          lastName,
          email,
          password,
        },
      })
    );
  };
  if (updateInProgress) {
    return <StyledContainer>User creation in progress!!</StyledContainer>;
  }
  if (userCreated) {
    return (
      <StyledContainer>
        User created successfully !!
        <br />
        {userCreated?.firstName}
      </StyledContainer>
    );
  }

  return (
    <StyledContainer>
      <Typography variant="h6" color="text.secondary" component="h6">
        Create your Account
      </Typography>
      <InputFieldsGroup>
        <FormControl
          error={
            fieldValidationResp?.firstName?.error ||
            fieldValidationResp?.lastName?.error
          }
          fullWidth
        >
          <StyledFlexBox>
            <TextField
              value={firstName}
              onChange={handleTextFieldChange.bind(this, "firstName")}
              error={fieldValidationResp?.firstName?.error}
              label="First name"
              fullWidth
              required
              variant="outlined"
            />
            <TextField
              value={lastName}
              onChange={handleTextFieldChange.bind(this, "lastName")}
              error={fieldValidationResp?.lastName?.error}
              label="Last name"
              fullWidth
              required
              variant="outlined"
            />
          </StyledFlexBox>
          <FormHelperText>
            {fieldValidationResp?.firstName?.helperText}
          </FormHelperText>
        </FormControl>
      </InputFieldsGroup>
      <InputFieldsGroup>
        <StyledFlexBox>
          <TextField
            value={email}
            onChange={handleTextFieldChange.bind(this, "email")}
            error={fieldValidationResp?.email?.error}
            helperText={
              fieldValidationResp?.email?.helperText ||
              ValidationMessagesConst.EMAIL.HELPER_TEXT
            }
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
            required
          />
        </StyledFlexBox>
      </InputFieldsGroup>
      <InputFieldsGroup>
        <FormControl
          error={
            fieldValidationResp?.password?.error ||
            fieldValidationResp?.passwordConfirm?.error
          }
          fullWidth
        >
          <StyledFlexBox>
            <PasswordField
              label="Password"
              value={password}
              onChange={handleTextFieldChange.bind(this, "password")}
              showPassword={showPassword}
              onToggleShowPassword={handleToggleShowPassword}
              error={fieldValidationResp?.password?.error}
            />
            <PasswordField
              label="Confirm"
              value={passwordConfirm}
              onChange={handleTextFieldChange.bind(this, "passwordConfirm")}
              showPassword={showPassword}
              onToggleShowPassword={handleToggleShowPassword}
              error={fieldValidationResp?.passwordConfirm?.error}
            />
          </StyledFlexBox>
          <FormHelperText>
            {fieldValidationResp?.password?.helperText ||
              ValidationMessagesConst.PASSWORD.HELPER_TEXT}
          </FormHelperText>
        </FormControl>
      </InputFieldsGroup>
      <SignupActionBar onSignupClick={handleSignupClick} />
    </StyledContainer>
  );
}
