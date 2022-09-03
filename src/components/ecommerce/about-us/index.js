import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import HeaderSection from "../shared/layout/HeaderSection";
import SidebarSection from "../shared/layout/SidebarSection";
import SidebarNavLinks from "../shared/SidebarNavLinks";
import MainSection from "../shared/layout/MainSection";

export default function PersistentDrawerLeft() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const handleSidebarOpen = () => {
    setSidebarOpen(true);
  };
  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <HeaderSection title="CrazyKart Demo - About Us"></HeaderSection>
      <SidebarSection>
        <SidebarNavLinks />
      </SidebarSection>
      <MainSection>About Us</MainSection>
    </Box>
  );
}
