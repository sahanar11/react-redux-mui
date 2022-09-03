import * as React from "react";
import { styled } from "@mui/material/styles";

import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";

export default function ({ loading = false, product = {} }) {
  const { id, description } = product || {};

  if (loading) {
    return (
      <>
        <CardContent>
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} width="80%" />
        </CardContent>
      </>
    );
  }
  return (
    <>
      <CardContent>
        <Typography variant="body2" color="text.secondary" component="p">
          {description}
        </Typography>
      </CardContent>
    </>
  );
}
