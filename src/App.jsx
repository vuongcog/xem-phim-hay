import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/main.layout";
import "../js/main";
import { generateScript, removeScript } from "./utils/generate-script";

const App = () => {
  useEffect(() => {
    generateScript();

    return () => {
      removeScript();
    };
  }, []);

  return (
    <Routes>
      <Route path="/" element={<MainLayout></MainLayout>}></Route>
    </Routes>
  );
};

export default App;
