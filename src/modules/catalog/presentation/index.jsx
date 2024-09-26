import { Outlet } from "react-router-dom";

const Catalog = ({ children }) => {
  return (
    <>
      {children}
      <Outlet></Outlet>
    </>
  );
};
export default Catalog;
