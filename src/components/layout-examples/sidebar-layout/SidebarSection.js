import React from "react";
import styled from "styled-components";
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum();

const StyledSidebarSection = styled.div`
  /* layout specific */
  flex-basis: 25%;
  min-width: 280px;
  max-width: 400px;
  overflow: scroll;

  /* generic */
  background-color: whitesmoke;
  padding: 40px;
`;

export default function () {
  return (
    <StyledSidebarSection>
      <h1>Side bar section</h1>
      <p>{lorem.generateParagraphs(1)}</p>
      <p>{lorem.generateParagraphs(1)}</p>
      <p>{lorem.generateParagraphs(2)}</p>
      <p>{lorem.generateParagraphs(2)}</p>
    </StyledSidebarSection>
  );
}
