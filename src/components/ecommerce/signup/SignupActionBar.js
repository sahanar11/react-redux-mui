import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import FlexBox from "../shared/FlexBox";

const ActionBarFlexBox = styled(FlexBox)`
  margin-top: 70px;
`;

export default function ({ onSignupClick }) {
  return (
    <>
      <ActionBarFlexBox>
        <Button variant="text">Sign in instead</Button>
        <Button
          sx={{ marginLeft: "auto" }}
          variant="contained"
          onClick={onSignupClick}
        >
          Next
        </Button>
      </ActionBarFlexBox>
    </>
  );
}
