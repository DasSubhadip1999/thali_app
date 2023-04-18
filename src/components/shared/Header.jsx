import React from "react";

const Header = ({ text, mt = "4rem", my = 3 }) => {
  return (
    <header className={`text-[2rem] text-center `} style={{ marginTop: mt }}>
      {text}
    </header>
  );
};

export default Header;
