import * as React from "react";
import { styled } from "@mui/material/styles";
import CardMedia from "@mui/material/CardMedia";
import Skeleton from "@mui/material/Skeleton";

export default function ({ loading = false, product = {} }) {
  const { imageSource, imageHeight, imageAltText } = product || {};
  if (loading) {
    return (
      <>
        <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
      </>
    );
  }
  return (
    <>
      <CardMedia
        component="img"
        height={imageHeight}
        image={imageSource}
        alt={imageAltText}
      />
    </>
  );
}
