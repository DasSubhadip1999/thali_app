import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaFileInvoiceDollar } from "react-icons/fa";
import OrderList from "../components/OrderList";

const Orders = () => {
  const [amount, setAmount] = useState(0);

  const { order } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  useEffect(() => {
    if (!order) {
      navigate("/");
    }
  }, [order]);

  useEffect(() => {
    const total = order?.cart.reduce(
      (total, cartItem) =>
        total + cartItem.item.discountedPrice * cartItem.quantity,
      0
    );

    setAmount(total);
  }, [order]);

  return (
    <div className="bg-[#faf4e6] px-20 pt-24 pb-10">
      <div className="bg-white w-[42rem] min-h-[34.1rem] rounded-sm mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="text-[1.7rem] text-[rgba(0,0,0,0.75)]">
            Order ID: <span>7493648093670</span>
          </div>
          <button className="flex gap-[2px] items-center px-2 border-[1px] rounded-sm text-[rgba(0,0,0,0.8)]">
            <FaFileInvoiceDollar size={13} />
            <span className="text-[14px]">Print</span>
          </button>
        </div>
        <div className="text-[15px] border-b-[1px] pb-4">
          Order date: {new Date().toLocaleDateString()}
        </div>
        <OrderList />
        {order?.customer && (
          <div className="flex justify-between mt-4 border-t-[1px] pt-3">
            <div className="w-[35%] flex flex-col">
              <h1 className="text-[15px] mb-1">Order Summary</h1>

              <div className="flex justify-between items-center text-[13px]">
                <span>Subtotal:</span>
                <span>₹{amount}</span>
              </div>
              <div className="flex justify-between items-center text-[13px]">
                <span>Tax:</span>
                <span>₹{(amount * (18 / 100)).toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center text-[14px] font-semibold">
                <span>Total:</span>
                <span>₹{(amount * (118 / 100)).toFixed(2)}</span>
              </div>
            </div>

            <div className="w-[40%]">
              <h1 className="text-[15px] mb-1">Customer details</h1>
              <div className="flex flex-col">
                <div className="flex justify-between items-center text-[13px]">
                  <span>Name:</span>
                  <span>{order?.customer.name}</span>
                </div>

                <div className="flex justify-between items-center text-[13px]">
                  <span>Mobile No.:</span>
                  <span>{order?.customer.number}</span>
                </div>

                <div className="flex justify-between items-center text-[13px]">
                  <span>Email:</span>
                  <span>{order?.customer.email}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
