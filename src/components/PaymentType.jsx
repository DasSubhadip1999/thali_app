import React from "react";

const PaymentType = () => {
  const labelstyle = "text-[15px] text-[rgba(0,0,0,0.7)]";
  const inputstyle = "accent-[#fbbd23]";
  return (
    <div className="mt-6">
      <div>Payment Method</div>
      <div className="bg-white mt-1 px-4 flex gap-4 items-center py-3">
        <div className="flex items-center gap-[3px]">
          <input type="radio" name="payment" className={inputstyle} />
          <label className={labelstyle}>Online Payment</label>
        </div>
        <div className="flex items-center gap-[3px]">
          <input
            type="radio"
            name="payment"
            checked={true}
            className={inputstyle}
          />
          <label className={labelstyle}>Cash Payment</label>
        </div>
      </div>
    </div>
  );
};

export default PaymentType;
