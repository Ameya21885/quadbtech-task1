import React from "react";
import MiniCart from "../card/MiniCart";

const Product = ({ score, show }) => {
  return <MiniCart key={show.id} score={score} show={show} />;
};

export default Product;
