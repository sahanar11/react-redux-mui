import React from "react";
import styled from "styled-components";
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum();

const StyledSidebarSection = styled.div`
  /* layout specific */
  flex-basis: 25%;
  min-width: 280px;
  max-width: 400px;
  overflow: auto;
  height: calc(100vh); /* special use of 100vh */

  ${(props) => {
    return props.show ? "" : "";
  }}

  /* generic */
  background-color: whitesmoke;
  padding: 20px;
  text-align: justify;
`;

export default function ({ show }) {
  if (!show) {
    return null;
  }
  return (
    <StyledSidebarSection show={show}>
      <h1>Side bar section</h1>
      <p>{lorem.generateParagraphs(1)}</p>
      <p>{lorem.generateParagraphs(1)}</p>
      <p>{lorem.generateParagraphs(2)}</p>
      <p>{lorem.generateParagraphs(2)}</p>
    </StyledSidebarSection>
  );
}
