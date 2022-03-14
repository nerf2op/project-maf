import React, { useContext } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import Items from "./Items";
import arrow from "./images/arrow.png";
import cartImage from "./images/cartImage.png";
import { CartContext } from "./Cart.js";
import { Button } from "antd";
import { useSelector } from "react-redux";

const CartWithContext = () => {
  const id = useSelector((state)=> state.getProductId);
  
  const product= useSelector((state)=> state.getProductData);
  console.log("pro",id);
  const { items, clearAll, totalItems, totalAmount } = useContext(CartContext);
  return (
    <>
      <section className="main-cart-section">{
        console.log("id==>"+id)
      }
        <h1>Shopping Cart</h1>
        <p className="total-items">
          Total items: <span className="total-items-count">{totalItems}</span>
        </p>
        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars className="scroll">
              {product.map((val, idx) => {
                return <Items key={idx} {...val} />;
              })}
            </Scrollbars>
          </div>
        </div>
        <div className="card-total">
          <h3>
            Cart Total : <span>{totalAmount}</span>
          </h3>
          <Button size="large" type="primary">
            Checkout
          </Button>
          <Button
            size="large"
            type="danger"
            className="clear-cart"
            onClick={() => clearAll()}
          >
            Clear All
          </Button>
        </div>
      </section>
    </>
  );
};

export default CartWithContext;
