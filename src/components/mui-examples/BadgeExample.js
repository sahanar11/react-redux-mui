import React from "react";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function () {
  return (
    <div>
      <Badge badgeContent={4} color="secondary">
        <ShoppingCartIcon color="action" />
      </Badge>
    </div>
  );
}
