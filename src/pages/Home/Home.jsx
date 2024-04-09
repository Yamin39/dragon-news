import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-7 mt-16">
        <div className="md:col-span-3 lg:col-span-2 border border-black text-center">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="md:col-span-4 lg:col-span-3 border border-black text-center">
          <p className="text-2xl font-poppins font-bold underline">Hello world</p>
        </div>
        <div className="hidden lg:block lg:col-span-2">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
