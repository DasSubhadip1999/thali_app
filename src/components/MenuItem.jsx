import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/features/CartSlice";
import { RxMinus, RxPlus } from "react-icons/rx";
import isCurrentItemInCart from "../utils/isCurrentItemInCart";

const MenuItem = ({ menu }) => {
  const [isInCart, setIsInCart] = useState({
    status: false,
    quantity: 0,
  });
  const { status, quantity } = isInCart;
  const { cart } = useSelector((state) => state.cart);
  const { name, description, price, discountedPrice, imgLink } = menu;
  const dispatch = useDispatch();

  useEffect(() => {
    const { response, quantity } = isCurrentItemInCart(cart, menu);
    setIsInCart({
      status: response,
      quantity,
    });
  }, [cart]);

  const onAddToThali = (item) => {
    const cartItem = {
      item,
      quantity: 1,
    };
    dispatch(addToCart(cartItem));
  };

  const removeFromThali = () => {
    dispatch(removeFromCart(menu));
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
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
          {status ? (
            <div className="flex items-center border-[1px] border-[#fbbd23] rounded-md px-2 text-[1.3rem]">
              <RxMinus
                className="cursor-pointer"
                onClick={() => removeFromThali()}
              />
              <span className="mx-3 text-[1.4rem]">{quantity}</span>
              <RxPlus
                className="cursor-pointer"
                onClick={() => onAddToThali(menu)}
              />
            </div>
          ) : (
            <button
              className="btn-warning px-8 rounded-md py-1 active:scale-[0.97]"
              onClick={() => onAddToThali(menu)}
            >
              Add to Thali
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
