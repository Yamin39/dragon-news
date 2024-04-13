import { Link } from "react-router-dom";
import data from "./animation.json";
import("@dotlottie/player-component");

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div>
        <div>
          <dotlottie-player src={JSON.stringify(data)} autoplay loop="true" style={{ height: "300px" }} />
        </div>
        <div className="text-center">
          <h4 className="text-5xl font-light mt-4">Oops!</h4>
          <p className="text-lg font-medium max-w-96 mx-auto mt-5 mb-3">
            Something went wrong or <br /> The page you are looking is doesn&apos;t exist!
          </p>
          <Link to="/" className="btn h-auto px-7 py-5 bg-black text-white hover:bg-black hover:text-white hover:scale-105">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
