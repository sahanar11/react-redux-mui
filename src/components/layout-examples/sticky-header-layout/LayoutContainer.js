import React from "react";
import styled from "styled-components";
import MainSection from "./MainSection";
import HeaderSection from "./HeaderSection";

const StyledContainer = styled.div``;

export default function () {
  return (
    <StyledContainer>
      <HeaderSection />
      <MainSection />
    </StyledContainer>
  );
}
