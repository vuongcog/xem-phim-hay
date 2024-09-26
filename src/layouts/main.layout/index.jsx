import React from "react";
import Header from "../../components/Header";
import MenuMobile from "../../components/Menu";
import Content from "../../modules/catalog/presentation";
import Footer from "../../components/Footer";
import Modal from "../../components/Modal";
import PricingPlan from "../../components/PricingPlan";
import NowWatching from "../../components/NowWatching";
import Partner from "../../components/Partner";
import Home from "../../modules/main.home/presentation";
import { Outlet } from "react-router-dom";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <MenuMobile></MenuMobile>
      {children}
      <Outlet></Outlet>
      <Footer></Footer>
      <Modal></Modal>
    </>
  );
};

export default MainLayout;
