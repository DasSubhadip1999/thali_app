import React from "react";
import Header from "../components/shared/Header";
import Menu from "../components/Menu";
import Thali from "../components/Thali";
import { useSelector } from "react-redux";

const Home = () => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <>
      {cart.length > 0 && (
        <>
          <Header text={"Your Thali"} mt={"4rem"} />
          <Thali />
        </>
      )}
      <Header text={"Customize your Thali from our Menu"} />
      <Menu />
    </>
  );
};

export default Home;
