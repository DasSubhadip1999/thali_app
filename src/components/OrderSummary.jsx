import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import OrderItem from "./OrderItem";
import { v4 as uuidv4 } from "uuid";

const OrderSummary = () => {
  const [totalAmount, setTotalAmount] = useState(0);

  const { cart } = useSelector((state) => state.cart);

  useEffect(() => {
    const amount = cart.reduce(
      (total, cartItem) =>
        total + +cartItem.item.discountedPrice * +cartItem.quantity,

      0
    );
    setTotalAmount(amount);
  }, [cart]);

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
              <button className="bg-[#fbbd23] w-full py-2">
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
