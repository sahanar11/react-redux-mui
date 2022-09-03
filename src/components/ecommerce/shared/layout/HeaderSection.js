import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import {
  LayoutActions,
  LayoutSelector,
} from "../../../../redux/reducers/ecommerce/layoutSlice";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) =>
    prop !== "sidebarOpen" && prop !== "sidebarWidth",
})(({ theme, sidebarOpen, sidebarWidth }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(sidebarOpen && {
    width: `calc(100% - ${sidebarWidth}px)`,
    marginLeft: `${sidebarWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function ({
  title,
  appbarActionsCenter,
  appbarActionsRight,
  sidebarWidth = 240,
  children,
}) {
  const dispatch = useDispatch();
  const sidebarOpen = useSelector(LayoutSelector.sidebarOpen);
  const handleSidebarOpen = () => {
    dispatch(
      LayoutActions.setSidebarOpen({
        sidebarOpen: true,
      })
    );
  };

  return (
    <AppBar
      position="fixed"
      sidebarOpen={sidebarOpen}
      sidebarWidth={sidebarWidth}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="To"
          onClick={handleSidebarOpen}
          edge="start"
          sx={{ mr: 2, ...(sidebarOpen && { display: "none" }) }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          {title}
        </Typography>
        <Box sx={{ flexGrow: 0.1 }} />
        {appbarActionsCenter && (
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}>
            {appbarActionsCenter}
          </Box>
        )}
        <Box sx={{ flexGrow: 1 }} />
        {appbarActionsRight && (
          <Box sx={{ display: { xs: "flex", md: "flex" } }}>
            {appbarActionsRight}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
