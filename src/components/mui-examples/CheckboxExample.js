import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function () {
  return (
    <div>
      <FormControlLabel control={<Checkbox />} label="Label" />
    </div>
  );
}
