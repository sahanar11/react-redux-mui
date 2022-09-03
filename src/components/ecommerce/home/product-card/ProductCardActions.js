import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Skeleton from "@mui/material/Skeleton";
import { useDispatch } from "react-redux";

import { OrderActions } from "../../../../redux/reducers/ecommerce/orderSlice";

export default function ({ loading = false, product = {} }) {
  const { id, description } = product || {};

  const dispatch = useDispatch();
  const handleRemoveFromCart = () => {
    dispatch(
      OrderActions.removeFromCart({
        productId: id,
        qty: 1,
      })
    );
  };
  const handleAddToCart = () => {
    dispatch(
      OrderActions.addToCart({
        productId: id,
        qty: 1,
      })
    );
  };
  if (loading) {
    return (
      <>
        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
      </>
    );
  }
  return (
    <>
      <CardActions>
        <Box sx={{ display: "flex", marginLeft: "auto" }}>
          <Button size="small" onClick={handleRemoveFromCart}>
            Remove from cart
          </Button>
          <Button size="small" onClick={handleAddToCart} variant="contained">
            Add to cart
          </Button>
        </Box>
      </CardActions>
    </>
  );
}
