import React from "react";
import menuData from "../data/menuData";
import { v4 as uuidv4 } from "uuid";
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 ml-10 mt-3">
      {menuData.map((menu) => (
        <MenuItem menu={menu} key={uuidv4()} />
      ))}
    </div>
  );
};

export default Menu;
