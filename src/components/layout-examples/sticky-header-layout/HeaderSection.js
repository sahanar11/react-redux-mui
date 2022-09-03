import React from "react";
import styled from "styled-components";

const StyledHeaderSection = styled.div`
  /* layout specific */
  position: sticky;
  top: 0;
  z-index: 10;

  /* generic */
  background-color: whitesmoke;
  box-shadow: 0 2px 3px 1px #aeaeae;
  padding: 10px;
  height: 25px;
`;

export default function () {
  return <StyledHeaderSection>Header</StyledHeaderSection>;
}
