import React from "react";
import Button from "@mui/material/Button";

import { styled } from "@mui/material/styles";

const StyledButton = styled(Button)`
  width: 300px;
`;

export default function () {
  return (
    <>
      <StyledButton variant="contained">Contained</StyledButton>
    </>
  );
}
