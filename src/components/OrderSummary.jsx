import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import OrderItem from "./OrderItem";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import { createOrder } from "../redux/features/CartSlice";

const OrderSummary = () => {
  const [totalAmount, setTotalAmount] = useState(0);

  const { cart, customer } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    const amount = cart.reduce(
      (total, cartItem) =>
        total + +cartItem.item.discountedPrice * +cartItem.quantity,

      0
    );
    setTotalAmount(amount);
  }, [cart]);

  const onConfirmOrder = () => {
    if (!customer) {
      return toast.error("Fill customer details");
    }
    dispatch(createOrder());
  };

  return (
    <div className="w-[50%]">
      <div>Order Summary</div>
      <div className="bg-white mt-1 p-6 flex flex-col justify-between min-h-[72.1vh] ">
        {cart.length > 0 ? (
          <>
            <div className="flex flex-col gap-5 max-h-[51vh] overflow-y-auto scrollbar pr-5">
              {cart.map((cartItem) => (
                <OrderItem key={uuidv4()} cartItem={cartItem} />
              ))}
            </div>
            <div>
              <div className="mb-3 mt-3 pt-3 border-t-[1px] flex justify-between items-center">
                <span>Total Amount</span>
                <span>₹{totalAmount}</span>
              </div>
              <button
                className="bg-[#fbbd23] hover:bg-[#efb115] transition-all w-full py-2"
                onClick={onConfirmOrder}
              >
                Confirm Order
              </button>
            </div>
          </>
        ) : (
          <div className="text-[rgba(0,0,0,0.7)]">No orders yet</div>
        )}
      </div>
    </div>
  );
};

export default OrderSummary;
