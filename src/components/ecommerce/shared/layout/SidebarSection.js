import React from "react";
import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import DrawerHeader from "./DrawerHeader";
import { useDispatch, useSelector } from "react-redux";
import {
  LayoutActions,
  LayoutSelector,
} from "../../../../redux/reducers/ecommerce/layoutSlice";

export default function ({ sidebarWidth = 240, children }) {
  const dispatch = useDispatch();
  const sidebarOpen = useSelector(LayoutSelector.sidebarOpen);
  const handleSidebarClose = () => {
    dispatch(
      LayoutActions.setSidebarOpen({
        sidebarOpen: false,
      })
    );
  };
  return (
    <Drawer
      sx={{
        width: sidebarWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: sidebarWidth,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={sidebarOpen}
    >
      <DrawerHeader>
        <IconButton onClick={handleSidebarClose}>
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />
      {children}
    </Drawer>
  );
}
