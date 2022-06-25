import React, { useState, useEffect, useCallback, useMemo } from "react";
import Child from "./child";
import Cart from "./cart";
import DemonUseReducer from "./demonUseReducer";

export default function HooksPage() {
  const [number, setNumber] = useState(0);
  const [like, setLike] = useState(0);

  const listCart = [
    { id: 1, productName: "Samsung" },
    { id: 2, productName: "Iphone" },
  ];

  const listCartMemo = useMemo(() => listCart, []);

  useEffect(() => {
    console.log("userEffect - tuong duong componentDidmount ben Class");
  }, []);

  useEffect(() => {
    console.log("userEffect - tuong duong componentDidUpdate ben Class");
  }, [number]);
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Hello Cybersoft");
    }, 1000);

    return () => {
      //tuong duong willUnmount ben class
      clearInterval(interval);
    };
  }, []);

  const renderNoti = () => {
    return `So Like la ${like}`;
  };
  const renderNotiCallback = useCallback(renderNoti, [like]);
  return (
    <div>
      <h1>HooksPage</h1>
      <h3>Number : {number}</h3>
      <button
        className="btn btn-success"
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        Click
      </button>

      <div>
        <h3>Like: {like}</h3>
        <button
          className="btn btn-danger"
          onClick={() => {
            setLike(like + 1);
          }}
        >
          Like
        </button>
      </div>
      <hr />
      <Child renderNoti={renderNotiCallback} />
      <hr />
      <Cart listCart={listCart} />
      <hr />
      <DemonUseReducer />
    </div>
  );
}
