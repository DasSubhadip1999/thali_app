import React from "react";
import { RxMinus, RxPlus } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/features/CartSlice";

const OrderItem = ({ cartItem }) => {
  const {
    item: { imgLink, name, discountedPrice, description },
    quantity,
  } = cartItem;

  const dispatch = useDispatch();

  return (
    <div className="flex justify-between gap-10">
      <div className="flex gap-3">
        <img
          className="aspect-square w-20 h-20 object-cover rounded-sm"
          src={imgLink}
          alt="food"
        />
        <div className="text-[rgba(0,0,0,0.7)] text-[15px]">
          <h1>{name}</h1>
          <p className="text-[13px]">{`${description}`.substring(0, 114)}...</p>
          <h2 className="font-semibold">₹{`${discountedPrice}`}</h2>
        </div>
      </div>

      <div className="flex items-center border-[1px] h-8 border-[#fbbd23] rounded-sm px-2 text-[1.1rem]">
        <RxMinus
          className="cursor-pointer"
          onClick={() => dispatch(removeFromCart(cartItem.item))}
        />
        <span className="mx-3 text-[1.1rem]">{quantity}</span>
        <RxPlus
          className="cursor-pointer"
          onClick={() => dispatch(addToCart(cartItem))}
        />
      </div>
    </div>
  );
};

export default OrderItem;
