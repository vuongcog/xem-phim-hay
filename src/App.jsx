import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/main.layout";
import "../js/main";
import { generateScript, removeScript } from "./utils/generate-script";
import Home from "./modules/main.home/presentation";
import HomeStyle2 from "./modules/main.home/presentation/HomeStyle2";
import Catalog from "./modules/catalog/presentation";
import CatalogItem from "./modules/catalog/presentation/Catalog/index";
import HomeStyle1 from "./modules/main.home/presentation/HomeStyle1";

const App = () => {
  useEffect(() => {
    generateScript();
    console.log("effect");
    return () => {
      console.log("unmount");
      removeScript();
    };
  }, []);

  return (
    <Routes>
      <Route path="/" element={<MainLayout></MainLayout>}>
        <Route path="/" element={<Home></Home>}>
          <Route path="/style2" element={<HomeStyle2></HomeStyle2>}></Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
