import React from "react";
import menuData from "../data/menuData";
import { v4 as uuidv4 } from "uuid";
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 ml-10">
      {menuData.map((menu) => (
        <MenuItem menu={menu} key={uuidv4()} />
      ))}
    </div>
  );
};

export default Menu;
