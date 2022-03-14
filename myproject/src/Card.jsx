import "./Card.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getProductId } from "./reducers/getProductId";
import { setProductId } from "./actions/getGlobalData";
import { useSelector } from "react-redux";

export default function Card() {
  const product = useSelector((state) => state.getProductData);
  console.log("Prodo=>> " + product);

  const dispatch = useDispatch();
  const obj = [
    {
      src: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/a09a67f0-75bd-42b8-8f0d-58ffad51e03b_1080x.png?v=1625045372",
      name: "Wyze announces",
      Brand: "Wyze",
      Tag: "Trending",
      id: "1",
    },
    {
      src: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/a09a67f0-75bd-42b8-8f0d-58ffad51e03b_1080x.png?v=1625045372",
      name: "boAt Storm",
      Brand: "boAt",
      Tag: "Popular",
      id: "2",
    },
    {
      src: "https://img.tatacliq.com/images/i6/1348Wx2000H/MP000000007530804_1348Wx2000H_20200820184600.jpeg",
      name: "realme Classic Smartwatch",
      Brand: "Realme",
      Tag: "Popular",
      id: "3",
    },
    {
      src: "https://m.media-amazon.com/images/I/616bFs167NL._SX679_.jpg",
      name: "Fire-Boltt Ring Bluetooth Calling Smartwatch",
      Brand: "Bolt",
      Tag: "new",
      id: "4",
    },
  ];

  return (
    <>
      <div class="type_div">
        {" "}
        <p className="type_div_p">Top Picked Products</p>
      </div>
      <ul className="crousel__ul" style={{ scrollX: "hidden" }}>
        {product.map((cur) => {
          return (
            <>
              {" "}
              <li class="crousel__li">
                <div className="product-box">
                  <a href="#">
                    <p class="header">{cur.tag}</p>
                    <strong>{cur.brand}</strong>
                    <img src={cur.img}></img>
                    <div className="available-colors">
                      <div
                        className="product-colors"
                        style={{ backgroundColor: "#5c5b58" }}
                      ></div>
                      <div
                        className="product-colors"
                        style={{ backgroundColor: "#e5e6e2" }}
                      ></div>
                      <div
                        className="product-colors"
                        style={{ backgroundColor: "#fcebd5" }}
                      ></div>
                      <div
                        className="product-colors"
                        style={{ backgroundColor: "#3f5d6a" }}
                      ></div>
                    </div>
                    <div className="rating">
                      <strong>{cur.rating}</strong>
                    </div>
                    <div class="buy-price">
                      <div className="buy-price-name">
                        {" "}
                        <h4 style={{ color: "#d2d4db" }}>{cur.name}</h4>{" "}
                      </div>
                      <a
                        onClick={() => {
                          dispatch(setProductId(cur));
                        }}
                        class="buy-btn"
                      >
                        Buy
                      </a>
                    </div>
                  </a>
                </div>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
}
