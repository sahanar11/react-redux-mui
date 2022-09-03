import * as React from "react";
import { styled } from "@mui/material/styles";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Skeleton from "@mui/material/Skeleton";
import ProductCardImage from "./ProductCardImage";
import ProductCardHeader from "./ProductCardHeader";
import ProductCardContent from "./ProductCardContent";
import ProductCardActions from "./ProductCardActions";

export default function ({ loading = false, product = {} }) {
  return (
    <Card sx={{ width: 300, m: 2 }}>
      <ProductCardImage loading={loading} product={product} />
      <ProductCardHeader loading={loading} product={product} />
      <ProductCardContent loading={loading} product={product} />
      <ProductCardActions loading={loading} product={product} />
    </Card>
  );
}
