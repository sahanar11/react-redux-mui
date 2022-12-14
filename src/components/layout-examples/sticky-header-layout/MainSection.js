import React from "react";
import styled from "styled-components";
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum();

const StyledMainSection = styled.div`
  position: relative;

  /* generic */
  padding: 10px;
`;

const StyledFixedBox = styled.div`
  position: absolute;
  top: 0;

  /* generic */
  width: 50px;
  height: 60px;
  background: gray;
`;

export default function () {
  return (
    <StyledMainSection>
      <h1>Main Section</h1>
      <StyledFixedBox />
      <p>{lorem.generateParagraphs(3)}</p>
      <p>{lorem.generateParagraphs(4)}</p>
      <p>{lorem.generateParagraphs(4)}</p>
      <p>{lorem.generateParagraphs(6)}</p>
      <p>{lorem.generateParagraphs(6)}</p>
    </StyledMainSection>
  );
}
