import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import FlexBox from "../shared/FlexBox";

const ActionBarFlexBox = styled(FlexBox)`
  margin-top: 70px;
`;

export default function () {
  return (
    <>
      <ActionBarFlexBox>
        <Button variant="text">Sign in instead</Button>
        <Button sx={{ marginLeft: "auto" }} variant="contained">
          Next
        </Button>
      </ActionBarFlexBox>
    </>
  );
}
