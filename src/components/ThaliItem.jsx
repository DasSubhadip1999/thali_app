import React from "react";

const ThaliItem = ({ menu, index }) => {
  const { item, quantity } = menu;

  let position = "";

  switch (index) {
    case 0:
      position = "top-[4.5rem] left-3";
      break;
    case 1:
      position = "top-[1rem] left-[40%]";
      break;
    case 2:
      position = "top-[30%] right-3";
      break;
    case 3:
      position = "top-[64%] right-[3.5rem]";
      break;
    case 4:
      position = "top-[61%] left-[15%]";
      break;
  }

  return (
    <div
      className={`text-[10px] w-[5.3rem] aspect-square border-[1px] rounded-full absolute ${position} grid place-items-center p-2`}
    >
      <img
        src={item?.imgLink}
        alt={item?.name}
        className="w-full aspect-square rounded-full object-cover"
      />
    </div>
  );
};

export default ThaliItem;
