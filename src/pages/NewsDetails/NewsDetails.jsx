import { GoArrowLeft } from "react-icons/go";
import { RiMenuUnfoldLine } from "react-icons/ri";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";

const NewsDetails = () => {
  const allNews = useLoaderData();
  const { id } = useParams();

  const news = allNews.find((aNews) => aNews._id === id);
  const { image_url, title, details, category_id } = news;
  return (
    <div>
      <Header></Header>
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-7 mt-6">
        <div className="lg:col-span-5">
          <div className="mb-5 flex items-center justify-between">
            <h4 className="font-semibold text-xl text-dark-2">Dragon News</h4>
            <div className="lg:hidden">
              <div className="drawer drawer-end z-10">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                  {/* Page content here */}
                  <label htmlFor="my-drawer-4" className="btn btn-ghost drawer-button">
                    <RiMenuUnfoldLine className="text-2xl" />
                  </label>
                </div>
                <div className="drawer-side">
                  <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                  <ul className="menu p-4 w-80 min-h-full bg-white">
                    {/* Sidebar close btn */}
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="w-full relative mb-6">
                      <span className="btn btn-circle btn-error btn-outline absolute right-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </span>
                    </label>
                    {/* Sidebar content here */}
                    <RightSideNav></RightSideNav>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-dark-6 rounded-md p-5">
            <div>
              <img src={image_url} alt={title} />
            </div>
            <h3 className="text-dark-2 text-2xl font-bold leading-10 mt-5 mb-2">{title}</h3>
            <p className="text-[#706F6F] leading-6">{details}</p>
            <Link
              to={`/category/${category_id}`}
              className="btn px-6 mt-8 py-2 bg-dark-pink hover:bg-dark-pink hover:opacity-90 text-xl font-medium text-white rounded-none"
            >
              <GoArrowLeft />
              <span>All news in this category</span>
            </Link>
          </div>
        </div>
        <div className="hidden lg:block lg:col-span-2">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
