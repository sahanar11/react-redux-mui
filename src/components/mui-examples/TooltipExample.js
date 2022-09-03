import React from "react";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

export default function () {
  return (
    <div>
      <Tooltip title="Click here to add items to cart" placement="top-start">
        <Button variant="contained">Add to cart</Button>
      </Tooltip>
    </div>
  );
}
