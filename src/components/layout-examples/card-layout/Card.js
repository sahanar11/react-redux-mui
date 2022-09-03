import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  /* layout specific */
  flex-basis: calc(20% - 20px); /* special use of calc */
  margin: 10px;

  /* generic */
  height: 100px;
  background-color: whitesmoke;
  border-radius: 2px;
`;

export default function () {
  return <StyledCard>card title</StyledCard>;
}
