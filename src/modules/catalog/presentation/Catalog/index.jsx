import { Outlet } from "react-router-dom";
import NowWatching from "../../../../components/NowWatching";
import Filter from "../../components/Filter";
import PageTitle from "../../components/PageTitle";

const Catalog = ({ children }) => {
  return (
    <>
      <PageTitle></PageTitle>
      <Filter></Filter>
      {children}
      <Outlet></Outlet>
      <NowWatching></NowWatching>
    </>
  );
};
export default Catalog;
