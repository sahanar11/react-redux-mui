import React from "react";
import { styled } from "@mui/material/styles";

import DrawerHeader from "./DrawerHeader";
import { LayoutSelector } from "../../../../redux/reducers/ecommerce/layoutSlice";
import { useSelector } from "react-redux";

const Main = styled("main", {
  shouldForwardProp: (prop) =>
    prop !== "sidebarOpen" && prop !== "sidebarWidth",
})(({ theme, sidebarOpen, sidebarWidth }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${sidebarWidth}px`,
  ...(sidebarOpen && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

export default function ({ sidebarWidth = 240, children }) {
  const sidebarOpen = useSelector(LayoutSelector.sidebarOpen);
  return (
    <Main sidebarOpen={sidebarOpen} sidebarWidth={sidebarWidth}>
      <DrawerHeader />
      <div>{children}</div>
    </Main>
  );
}
