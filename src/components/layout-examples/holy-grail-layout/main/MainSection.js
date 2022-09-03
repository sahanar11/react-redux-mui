import React from "react";
import styled from "styled-components";
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum();

const StyledMainSection = styled.div`
  /* layout specific */
  flex: 1;

  /* generic */
  padding: 20px;
  text-align: justify;
`;

export default function () {
  return (
    <StyledMainSection>
      <h1>Main section</h1>
      <p>{lorem.generateParagraphs(3)}</p>
      <p>{lorem.generateParagraphs(3)}</p>
      <p>{lorem.generateParagraphs(4)}</p>
      <p>{lorem.generateParagraphs(5)}</p>
      <p>{lorem.generateParagraphs(5)}</p>
    </StyledMainSection>
  );
}
