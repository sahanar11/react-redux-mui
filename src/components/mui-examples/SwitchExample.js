import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

export default function () {
  return (
    <div>
      <FormControlLabel control={<Switch defaultChecked />} label="Label" />
    </div>
  );
}
