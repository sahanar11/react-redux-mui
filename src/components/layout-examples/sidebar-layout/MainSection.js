import React from "react";
import styled from "styled-components";
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum();

const StyledMainSection = styled.div`
  /* layout specific */
  width: 100%;
  overflow: scroll;

  /* generic */
  padding: 20px;
`;

export default function () {
  return (
    <StyledMainSection>
      <h1>Main section</h1>
      <p>{lorem.generateParagraphs(4)}</p>
      <p>{lorem.generateParagraphs(4)}</p>
      <p>{lorem.generateParagraphs(4)}</p>
      <p>{lorem.generateParagraphs(4)}</p>
    </StyledMainSection>
  );
}
