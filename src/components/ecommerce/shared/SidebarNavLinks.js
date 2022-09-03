import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import { SidebarConst } from "../constants/SidebarConst";

const StyledLink = styled(Link)`
  width: 100%;
`;

export default function () {
  return (
    <>
      <List>
        {SidebarConst.routeLinks?.map((routeLink) => {
          return (
            <ListItem key={routeLink.path}>
              <StyledLink to={routeLink.path}>
                <ListItemButton>
                  <ListItemText primary={routeLink.label} />
                </ListItemButton>
              </StyledLink>
            </ListItem>
          );
        })}
      </List>
    </>
  );
}
