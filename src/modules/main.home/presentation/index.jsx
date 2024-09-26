import { Outlet } from "react-router-dom";
import NowWatching from "../../../components/NowWatching";
import Partner from "../../../components/Partner";
import PricingPlan from "../../../components/PricingPlan";
import Content from "../../catalog/presentation";
import HomeStyles1 from "./HomeStyle1";

const Home = ({ children }) => {
  return (
    <>
      {/* <HomeStyles1></HomeStyles1> */}
      {children}
      <Outlet></Outlet>
      <Content></Content>
      <NowWatching></NowWatching>
      <PricingPlan></PricingPlan>
      <Partner></Partner>
    </>
  );
};
export default Home;
