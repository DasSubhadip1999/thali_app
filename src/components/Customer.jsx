import React from "react";
import PaymentType from "./PaymentType";
import Form from "./Form";

const Customer = () => {
  return (
    <div className="w-[50%]">
      <div className="w-full">
        <div>Customer Information</div>
        <Form />
      </div>
      <PaymentType />
    </div>
  );
};

export default Customer;
