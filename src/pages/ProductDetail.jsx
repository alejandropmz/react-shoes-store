import React from "react";
import { useParams } from "react-router-dom";

export const ProductDetail = () => {
  const { productdetail } = useParams();
  return <div>ProductDetail {productdetail}</div>;
};
