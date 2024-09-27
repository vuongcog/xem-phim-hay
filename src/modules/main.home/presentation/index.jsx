import { Outlet } from "react-router-dom";
import NowWatching from "../../../components/NowWatching";
import Partner from "../../../components/Partner";
import PricingPlan from "../../../components/PricingPlan";
import Content from "../../catalog/presentation";
import HomeStyles1 from "./HomeStyle1";
import RecentlyUpdated from "../../../components/RecentlyUpdated";

const Home = ({ children }) => {
  return (
    <>
      {children}
      <Outlet></Outlet>
      <RecentlyUpdated></RecentlyUpdated>
      <NowWatching></NowWatching>
      <PricingPlan></PricingPlan>
      <Partner></Partner>
    </>
  );
};
export default Home;
