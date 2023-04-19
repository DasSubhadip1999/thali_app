import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCustomer, removeCustomer } from "../redux/features/CartSlice";

const Form = () => {
  const [isFilled, setIsFilled] = useState(false);
  const { customer, order } = useSelector((state) => state.cart);

  const nameRef = useRef(null);
  const numberRef = useRef(null);
  const emailRef = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (customer) {
      setIsFilled(true);
    } else {
      setIsFilled(false);
      if (order) {
        nameRef.current.value = "";
        numberRef.current.value = "";
        emailRef.current.value = "";
      }
    }
  }, [customer]);

  const onAddCustomer = (e) => {
    e.preventDefault();

    if (isFilled) {
      dispatch(removeCustomer());
      return;
    }

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const number = numberRef.current.value;

    const showAndRemoveError = () => {
      if (!name) {
        nameRef.current.style.border = "1px solid red";
      } else {
        nameRef.current.style.border = "1px solid rgba(0,0,0,0.1)";
      }
      if (!email) {
        emailRef.current.style.border = "1px solid red";
      } else {
        emailRef.current.style.border = "1px solid rgba(0,0,0,0.1)";
      }
      if (!number) {
        numberRef.current.style.border = "1px solid red";
      } else {
        numberRef.current.style.border = "1px solid rgba(0,0,0,0.1)";
      }
    };

    showAndRemoveError();

    if (name && email && number) {
      dispatch(addCustomer({ name, email, number }));
    }
  };

  const inputgroup = "flex flex-col w-full my-1";
  const inputstyle =
    "outline-none border-[1px] mt-[2px] px-3 py-1 text-[14px] text-[rgba(0,0,0,0.75)] placeholder:font-light";
  const labelstyle = "text-[rgba(0,0,0,0.7)] text-[15px] transition-all";
  return (
    <form
      className="font-normal bg-white mt-1 px-4 py-5 w-full"
      onSubmit={onAddCustomer}
    >
      <div className="flex gap-5">
        <div className={inputgroup}>
          <label className={labelstyle}>Name</label>
          <input
            type="text"
            placeholder="Subhadip Das"
            className={inputstyle}
            ref={nameRef}
            disabled={isFilled}
          />
        </div>

        <div className={inputgroup}>
          <label className={labelstyle}>Mobile Number</label>
          <input
            type="tel"
            placeholder="+918906499398"
            className={inputstyle}
            ref={numberRef}
            disabled={isFilled}
          />
        </div>
      </div>
      <div className={inputgroup}>
        <label className={labelstyle}>Email</label>
        <input
          type="email"
          placeholder="subhadipdasrng54@gmail.com"
          className={inputstyle}
          ref={emailRef}
          disabled={isFilled}
        />
      </div>
      <button
        type="submit"
        className="mt-2 w-full bg-black text-white py-[6px] text-[14px] transition-all hover:bg-[rgba(0,0,0,0.8)]"
      >
        {isFilled ? "Edit" : " Add Customer"}
      </button>
    </form>
  );
};

export default Form;
