import React from "react";
import Header from "../../components/Header";
import MenuMobile from "../../components/Menu";
import Home from "../../modules/main.home/presentation";
import Content from "../../modules/catalog/presentation";
import Footer from "../../components/Footer";
import Modal from "../../components/Modal";

const MainLayout = () => {
  return (
    <>
      <Header></Header>
      <MenuMobile></MenuMobile>
      <Home></Home>
      <Content></Content>
      <Footer></Footer>
      <Modal></Modal>
    </>
  );
};

export default MainLayout;
