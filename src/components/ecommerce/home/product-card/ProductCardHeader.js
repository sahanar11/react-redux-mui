import * as React from "react";
import { styled } from "@mui/material/styles";

import CardHeader from "@mui/material/CardHeader";
import Skeleton from "@mui/material/Skeleton";

export default function ({ loading = false, product = {} }) {
  const { title, subTitle } = product || {};
  return (
    <>
      <CardHeader
        title={
          loading ? (
            <Skeleton
              animation="wave"
              height={10}
              width="80%"
              style={{ marginBottom: 6 }}
            />
          ) : (
            title
          )
        }
        subheader={
          loading ? (
            <Skeleton animation="wave" height={10} width="40%" />
          ) : (
            subTitle
          )
        }
      />
    </>
  );
}
