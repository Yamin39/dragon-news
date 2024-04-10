import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";
const Home = () => {
  const news = useLoaderData();
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-7 mt-16">
        <div className="md:col-span-3 lg:col-span-2">
          <div className="md:hidden">
            <div className="w-fit mx-auto">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn px-6 py-2 bg-dark-pink hover:bg-dark-pink hover:opacity-90 text-xl font-medium text-white rounded-none"
                >
                  Select News Category
                </div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                  <LeftSideNav></LeftSideNav>
                </ul>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <LeftSideNav></LeftSideNav>
          </div>
        </div>
        <div className="md:col-span-4 lg:col-span-3">
          <h4 className="font-semibold text-xl text-dark-2 mb-5">Dragon News Home</h4>
          <div className="space-y-7">
            {news.map((aNews) => (
              <NewsCard key={aNews._id} aNews={aNews}></NewsCard>
            ))}
          </div>
        </div>
        <div className="hidden lg:block lg:col-span-2">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
