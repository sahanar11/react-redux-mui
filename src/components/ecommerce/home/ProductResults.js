import * as React from "react";
import { styled } from "@mui/material/styles";
import ProductCard from "./product-card/ProductCard";
import Box from "@mui/material/Box";

const productResults = [
  {
    id: 1,
    title: "Shirt",
    subTitle: "Awesome Shirt",
    price: "12",
    description: "Something!",
    imageSource:
      "https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512",
    imageHeight: "180",
    imageAltText: "Shirt",
  },
  {
    id: 2,
    title: "Pant",
    subTitle: "Awesome Pant",
    price: "15",
    description: "Something!",
    imageSource:
      "https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512",
    imageHeight: "180",
    imageAltText: "Shirt",
  },
];

export default function () {
  const loading = false;
  return (
    <Box sx={{ display: "flex" }}>
      {productResults?.map((productResult) => {
        return (
          <ProductCard
            loading={loading}
            key={productResult.id}
            product={productResult}
          />
        );
      })}
    </Box>
  );
}
