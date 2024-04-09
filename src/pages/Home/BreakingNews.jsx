import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="bg-dark-7 p-4 my-8 flex gap-5 items-center">
      <button className="px-6 py-2 bg-dark-pink text-xl font-medium text-white rounded-none">Latest</button>
      <Marquee pauseOnHover={true} className="text-dark-2 font-semibold text-lg">
        <Link to="/" className="mr-9 hover:underline">I can be a React component 1...</Link>
        <Link to="/" className="mr-9 hover:underline">I can be a React component 2...</Link>
        <Link to="/" className="mr-9 hover:underline">I can be a React component 3...</Link>
        <Link to="/" className="mr-9 hover:underline">I can be a React component 4...</Link>
        <Link to="/" className="mr-9 hover:underline">I can be a React component 5...</Link>
        <Link to="/" className="mr-9 hover:underline">I can be a React component 6...</Link>
        <Link to="/" className="mr-9 hover:underline">I can be a React component 7...</Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
