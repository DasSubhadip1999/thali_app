import React from "react";
import { useSelector } from "react-redux";
import ListItem from "./ListItem";
import { v4 as uuidv4 } from "uuid";

const OrderList = () => {
  const { order } = useSelector((state) => state.cart);

  return (
    <div className="mt-4 flex flex-col gap-4 max-h-[17rem] overflow-y-auto scrollbar">
      {order?.cart &&
        order?.cart.map((cartItem) => (
          <ListItem cartItem={cartItem} key={uuidv4()} />
        ))}
    </div>
  );
};

export default OrderList;
