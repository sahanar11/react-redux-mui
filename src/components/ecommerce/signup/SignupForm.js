import React, { useState } from "react";
import styledComponent from "styled-components";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import SignupActionBar from "./SignupActionBar";
import PasswordField from "./PasswordField";
import FlexBox from "../shared/FlexBox";

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
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();
  const handleTextFieldChange = (setterFunction, event) => {
    setterFunction(event?.target?.value);
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleToggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <StyledContainer>
      <Typography variant="h6" color="text.secondary" component="h6">
        Create your Account
      </Typography>
      <InputFieldsGroup>
        <FormControl error={false} fullWidth>
          <StyledFlexBox>
            <TextField
              value={firstName}
              onChange={handleTextFieldChange.bind(this, setFirstName)}
              error={false}
              label="First name"
              fullWidth
              required
              variant="outlined"
            />
            <TextField
              value={lastName}
              onChange={handleTextFieldChange.bind(this, setLastName)}
              error={false}
              label="Last name"
              fullWidth
              required
              variant="outlined"
            />
          </StyledFlexBox>
          <FormHelperText>Helper text</FormHelperText>
        </FormControl>
      </InputFieldsGroup>
      <InputFieldsGroup>
        <StyledFlexBox>
          <TextField
            value={email}
            onChange={handleTextFieldChange.bind(this, setEmail)}
            error={true}
            helperText="You can use letters, numbers and periods"
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
            required
          />
        </StyledFlexBox>
      </InputFieldsGroup>
      <InputFieldsGroup>
        <FormControl error={false} fullWidth>
          <StyledFlexBox>
            <PasswordField
              label="Password"
              value={password}
              onChange={handleTextFieldChange.bind(this, setPassword)}
              showPassword={showPassword}
              onToggleShowPassword={handleToggleShowPassword}
              error={false}
            />
            <PasswordField
              label="Confirm"
              value={passwordConfirm}
              onChange={handleTextFieldChange.bind(this, setPasswordConfirm)}
              showPassword={showPassword}
              onToggleShowPassword={handleToggleShowPassword}
              error={false}
            />
          </StyledFlexBox>
          <FormHelperText>Helper text</FormHelperText>
        </FormControl>
      </InputFieldsGroup>
      <SignupActionBar />
    </StyledContainer>
  );
}
