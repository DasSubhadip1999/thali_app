import React from "react";

const Form = () => {
  const inputgroup = "flex flex-col w-full my-1";
  const inputstyle =
    "outline-none border-[1px] mt-[2px] px-3 py-1 text-[14px] text-[rgba(0,0,0,0.75)] placeholder:font-light";
  const labelstyle = "text-[rgba(0,0,0,0.7)] text-[15px]";
  return (
    <form className="font-normal bg-white mt-1 px-4 py-5 w-full ">
      <div className="flex gap-5">
        <div className={inputgroup}>
          <label className={labelstyle}>Name</label>
          <input
            type="text"
            placeholder="Subhadip Das"
            className={inputstyle}
          />
        </div>

        <div className={inputgroup}>
          <label className={labelstyle}>Mobile Number</label>
          <input
            type="tel"
            placeholder="+918906499398"
            className={inputstyle}
          />
        </div>
      </div>
      <div className={inputgroup}>
        <label className={labelstyle}>Email</label>
        <input
          type="email"
          placeholder="subhadipdasrng54@gmail.com"
          className={inputstyle}
        />
      </div>
    </form>
  );
};

export default Form;
