import React from "react";
import styled from "styled-components";
import MainSection from "./MainSection";
import SidebarSection from "./SidebarSection";

const StyledContainer = styled.div`
  /* layout specific */
  display: flex;
  height: calc(100vh); /* special use of 100vh */
`;

export default function () {
  return (
    <StyledContainer>
      <SidebarSection />
      <MainSection />
    </StyledContainer>
  );
}
