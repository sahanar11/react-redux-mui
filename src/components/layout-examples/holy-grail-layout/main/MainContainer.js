import React from "react";
import styled from "styled-components";
import HeaderSection from "./HeaderSection";
import MainSection from "./MainSection";

const StyledContainer = styled.div`
  /* layout specific */
  position: relative;
  overflow: auto;
  height: calc(100vh); /* special use of 100vh */
`;

export default function ({ onToggleSidebar }) {
  return (
    <StyledContainer>
      <HeaderSection onToggleSidebar={onToggleSidebar} />
      <MainSection />
    </StyledContainer>
  );
}
