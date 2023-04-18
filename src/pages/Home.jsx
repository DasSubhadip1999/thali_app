import React from "react";
import Header from "../components/shared/Header";
import Menu from "../components/Menu";
import Thali from "../components/Thali";

const Home = () => {
  return (
    <>
      <Header text={"Your Thali"} />
      <Thali />
      <Header text={"Customize your Thali from our Menu"} />
      <Menu />
    </>
  );
};

export default Home;
