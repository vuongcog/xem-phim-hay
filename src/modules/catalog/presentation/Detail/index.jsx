import { Outlet } from "react-router-dom";

const Detail = ({ children }) => {
  return (
    <>
      {children}
      <Outlet></Outlet>
    </>
  );
};

export default Detail;
