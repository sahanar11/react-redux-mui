import React from "react";
import styled from "styled-components";
import Card from "./Card";

const StyledCardContainer = styled.div`
  /* layout specific */
  display: flex;
  flex-wrap: wrap;

  /* general */
  padding: 10px;
`;

export default function () {
  return (
    <StyledCardContainer>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </StyledCardContainer>
  );
}
