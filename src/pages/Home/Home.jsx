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
      <div className="grid gap-6 grid-cols-1 md:grid-cols-4 text-center">
        <div className="border border-black">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="md:col-span-2 border border-black">
          <p className="text-2xl font-poppins font-bold underline">Hello world</p>
        </div>
        <div className="border border-black">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
