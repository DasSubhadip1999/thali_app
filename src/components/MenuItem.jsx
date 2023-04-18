import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, isCurrentItemInCart } from "../redux/features/CartSlice";
import { RxMinus, RxPlus } from "react-icons/rx";

const MenuItem = ({ menu }) => {
  const { name, description, price, discountedPrice, imgLink } = menu;
  const dispatch = useDispatch();

  const onAddToThali = (item) => {
    const cartItem = {
      item,
      quantity: 1,
    };
    dispatch(addToCart(cartItem));
  };

  const response = dispatch(isCurrentItemInCart(menu));

  console.log("response", response);

  return (
    <div className="card w-64 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={imgLink}
          alt="chapati"
          className="rounded-xl w-36 aspect-square object-cover"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p className="text-sm">{description}</p>
        <div className="flex gap-3 my-2">
          <div className="badge badge-primary">Price: ₹{discountedPrice}</div>
          <div className="badge badge-info line-through">₹{price}</div>
        </div>
        <div className="card-actions">
          <button
            className="btn-warning px-8 rounded-md py-1 active:scale-[0.97]"
            onClick={() => onAddToThali(menu)}
          >
            Add to Thali
          </button>

          <div>
            <RxMinus />
            <span>1</span>
            <RxPlus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
