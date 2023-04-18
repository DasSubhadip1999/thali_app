import React from "react";
import Customer from "../components/Customer";
import OrderSummary from "../components/OrderSummary";

const Checkout = () => {
  return (
    <div className="pt-20 pb-8 px-20 bg-[#faf4e6] flex gap-10">
      <Customer />
      <OrderSummary />
    </div>
  );
};

export default Checkout;
