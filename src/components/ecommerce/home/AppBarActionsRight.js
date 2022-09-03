import * as React from "react";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { OrderSelector } from "../../../redux/reducers/ecommerce/orderSlice";
import { useSelector } from "react-redux";

export default function () {
  const itemsInCart = useSelector(OrderSelector.itemsInCart);
  return (
    <>
      <IconButton
        size="large"
        aria-label="show more"
        aria-haspopup="true"
        onClick={null}
        color="inherit"
      >
        <Badge badgeContent={itemsInCart} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </>
  );
}
