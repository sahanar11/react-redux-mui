import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import HeaderSection from "../shared/layout/HeaderSection";
import SidebarSection from "../shared/layout/SidebarSection";
import SidebarNavLinks from "../shared/SidebarNavLinks";
import MainSection from "../shared/layout/MainSection";
import AppBarSearch from "./AppBarSearch";
import AppBarActionsRight from "./AppBarActionsRight";
import ProductResults from "./ProductResults";

export default function PersistentDrawerLeft() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <HeaderSection
        title="CrazyKart Demo - Homepage"
        appbarActionsCenter={<AppBarSearch />}
        appbarActionsRight={<AppBarActionsRight />}
      />
      <SidebarSection>
        <SidebarNavLinks />
      </SidebarSection>
      <MainSection>
        Home page
        <br />
        <br />
        <ProductResults />
      </MainSection>
    </Box>
  );
}
