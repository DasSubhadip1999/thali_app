import React from "react";

const ListItem = ({ cartItem }) => {
  const { item, quantity } = cartItem;

  return (
    <div className="flex justify-between">
      <div className="flex gap-3">
        <img
          src={item.imgLink}
          className="w-24 h-24 rounded-sm aspect-square object-cover"
        />
        <div className="flex flex-col">
          <span>{item.name}</span>
          <p className="w-[70%] text-[13px]">{item.description}</p>
        </div>
      </div>
      <div className="flex flex-col pr-3">
        <h1 className="text-[17px]">₹{item.discountedPrice}</h1>
        <div className="text-[13px]">Qty.{quantity}</div>
      </div>
    </div>
  );
};

export default ListItem;
