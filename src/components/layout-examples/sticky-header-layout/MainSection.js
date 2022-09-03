import React from "react";
import styled from "styled-components";
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum();

const StyledMainSection = styled.div`
  /* generic */
  padding: 10px;
`;

export default function () {
  return (
    <StyledMainSection>
      <h1>Main Section</h1>
      <p>{lorem.generateParagraphs(3)}</p>
      <p>{lorem.generateParagraphs(4)}</p>
      <p>{lorem.generateParagraphs(4)}</p>
      <p>{lorem.generateParagraphs(6)}</p>
      <p>{lorem.generateParagraphs(6)}</p>
    </StyledMainSection>
  );
}
