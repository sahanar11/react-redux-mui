import React from "react";
import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const StyledHeaderSection = styled.div`
  /* layout specific */
  position: sticky;
  top: 0;
  z-index: 10;

  /* generic */
  background-color: whitesmoke;
  box-shadow: 2px 2px 3px 1px #aeaeae;
  padding: 10px;
  height: 25px;
`;

export default function ({ onToggleSidebar }) {
  return (
    <StyledHeaderSection>
      <IconButton onClick={onToggleSidebar} aria-label="menu" component="label">
        <MenuIcon />
      </IconButton>
      Header
    </StyledHeaderSection>
  );
}
