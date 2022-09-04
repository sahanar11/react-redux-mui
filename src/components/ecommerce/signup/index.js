import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import HeaderSection from "../shared/layout/HeaderSection";
import SidebarSection from "../shared/layout/SidebarSection";
import SidebarNavLinks from "../shared/SidebarNavLinks";
import MainSection from "../shared/layout/MainSection";
import SignupForm from "./SignupForm";

export default function PersistentDrawerLeft() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <HeaderSection title="CrazyKart Demo - Signup"></HeaderSection>
      <SidebarSection>
        <SidebarNavLinks />
      </SidebarSection>
      <MainSection>
        <SignupForm />
      </MainSection>
    </Box>
  );
}
