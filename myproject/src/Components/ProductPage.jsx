import React from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const ref = useParams();
  console.log(ref);
  return <div>ProductPage </div>;
};

export default ProductPage;
