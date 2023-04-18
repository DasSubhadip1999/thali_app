import React from "react";
import ThaliItem from "./ThaliItem";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";

const Thali = () => {
  const { cart } = useSelector((state) => state.cart);
  return (
    <div className="w-72 h-72 rounded-full border-[1px] mx-auto mt-10 relative shadow-inner">
      {cart.map((menu, index) => (
        <ThaliItem menu={menu} key={uuidv4()} index={index} />
      ))}
    </div>
  );
};

export default Thali;
