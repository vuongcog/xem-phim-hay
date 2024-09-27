import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/main.layout";
import "../js/main";
import { generateScript, removeScript } from "./utils/generate-script";
import Home from "./modules/main.home/presentation";
import HomeStyle2 from "./modules/main.home/presentation/HomeStyle2";
import Catalog from "./modules/catalog/presentation";
import CatalogItem from "./modules/catalog/presentation/Catalog/index";
import HomeStyle1 from "./modules/main.home/presentation/HomeStyle1";
import CatalogGrid from "./modules/catalog/presentation/Catalog/Grid";
import CatalogList from "./modules/catalog/presentation/Catalog/List";
import Detail from "./modules/catalog/presentation/Detail";
import DetailMovie from "./modules/catalog/presentation/Detail/Movie";
import DetailTVSeries from "./modules/catalog/presentation/Detail/TVSeries";
import Pricing from "./modules/pricing/presentation";

const App = () => {
  useEffect(() => {
    generateScript();
    return () => {
      removeScript();
    };
  }, []);

  return (
    <Routes>
      <Route path="/" element={<MainLayout></MainLayout>}>
        <Route path="/" element={<Home></Home>}>
          <Route path="/" element={<HomeStyle1></HomeStyle1>}></Route>
          <Route path="/style2" element={<HomeStyle2></HomeStyle2>}></Route>
        </Route>

        <Route path="/catalog" element={<Catalog></Catalog>}>
          <Route path="/catalog/catalog" element={<CatalogItem></CatalogItem>}>
            <Route
              path="/catalog/catalog/grid"
              element={<CatalogGrid></CatalogGrid>}
            ></Route>
            <Route
              path="/catalog/catalog/list"
              element={<CatalogList></CatalogList>}
            ></Route>
          </Route>

          <Route path="/catalog/detail" element={<Detail></Detail>}>
            <Route
              path="/catalog/detail/movie"
              element={<DetailMovie></DetailMovie>}
            ></Route>
            <Route
              path="/catalog/detail/tv-series"
              element={<DetailTVSeries></DetailTVSeries>}
            ></Route>
          </Route>
        </Route>
        <Route path="/pricing" element={<Pricing></Pricing>}></Route>
      </Route>
    </Routes>
  );
};

export default App;
