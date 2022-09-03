import React from "react";
import styledComponents from "styled-components";
import Divider from "@mui/material/Divider";

import ButtonExample from "./ButtonExample";
import CheckboxExample from "./CheckboxExample";
import TextFieldExample from "./TextFieldExample";
import RadioButtonExample from "./RadioButtonExample";
import StyledButtonExample from "./StyledButtonExample";
import SelectboxExample from "./SelectboxExample";
import SwitchExample from "./SwitchExample";
import BadgeExample from "./BadgeExample";
import TooltipExample from "./TooltipExample";
import AlertExample from "./AlertExample";
import SkeletonExample from "./SkeletonExample";

const StyledContainer = styledComponents.div`
  padding: 20px;
  margin: 0 auto;
`;

export default function () {
  return (
    <StyledContainer>
      <AlertExample />
      <SkeletonExample />
      <BadgeExample />
      <TextFieldExample />
      <Divider />
      <CheckboxExample />
      <RadioButtonExample />
      <SwitchExample />
      <SelectboxExample />
      <TooltipExample />
      <ButtonExample />
      <br />
      <StyledButtonExample />
    </StyledContainer>
  );
}
