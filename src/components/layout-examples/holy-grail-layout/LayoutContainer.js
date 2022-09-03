import React, { useState } from "react";
import styled from "styled-components";
import MainContainer from "./main/MainContainer";
import SidebarSection from "./side/SidebarSection";

const StyledContainer = styled.div`
  /* layout specific */
  position: relative;
  display: flex;
`;

export default function () {
  const [showSidebar, setShowSidebar] = useState(true);
  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <StyledContainer>
      <SidebarSection show={showSidebar} />
      <MainContainer onToggleSidebar={handleToggleSidebar} />
    </StyledContainer>
  );
}
