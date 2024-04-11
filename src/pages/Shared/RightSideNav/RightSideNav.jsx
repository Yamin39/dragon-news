import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import facebook from "../../../assets/Facebook.svg";
import instagram from "../../../assets/Instagram.svg";
import twitter from "../../../assets/Twitter.svg";
import bg from "../../../assets/bg.png";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";

const RightSideNav = () => {
  const { user, logInWithGoogle, logInWithGithub } = useContext(AuthContext);

  const handleGoogle = () => {
    logInWithGoogle()
      .then((res) => {
        console.log(res.user);
        alert("Successful");
      })
      .catch((err) => console.error(err));
  };

  const handleGithub = () => {
    logInWithGithub()
      .then((res) => {
        console.log(res.user);
        alert("Successful");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      {!user && (
        <>
          <h4 className="font-semibold text-xl text-dark-2">Login With</h4>
          <div className="space-y-3 mt-5 mb-10">
            <button
              onClick={handleGoogle}
              className="flex gap-2 justify-center hover:bg-slate-100 duration-100 active:scale-95 items-center text-sm font-normal py-2 px-4 rounded-lg w-full border text-blue-500 bg-white border-blue-500"
            >
              <FaGoogle />
              <p>Login with Google</p>
            </button>

            <button
              onClick={handleGithub}
              className="flex gap-2 justify-center hover:bg-slate-100 duration-100 active:scale-95 items-center text-sm font-normal py-2 px-4 rounded-lg w-full border text-dark-2 bg-white border-dark-2"
            >
              <FaGithub />
              <p>Login with Github</p>
            </button>
          </div>
        </>
      )}

      <h4 className="font-semibold text-xl text-dark-2 mb-5">Find Us On</h4>
      <div className="border border-dark-6 rounded-md mb-5">
        <a href="https://www.facebook.com/" target="_blank" className="flex gap-2 items-center p-4 border-b border-b-dark-6">
          <img src={facebook} alt="facebook icon" />
          <p className="font-medium text-dark-3">Facebook</p>
        </a>
        <a href="https://twitter.com/" target="_blank" className="flex gap-2 items-center p-4 border-b border-b-dark-6">
          <img src={twitter} alt="facebook icon" />
          <p className="font-medium text-dark-3">Twitter</p>
        </a>
        <a href="https://www.instagram.com/" target="_blank" className="flex gap-2 items-center p-4">
          <img src={instagram} alt="facebook icon" />
          <p className="font-medium text-dark-3">Instagram</p>
        </a>
      </div>

      <div className="py-4 px-1 bg-dark-7 rounded-md mb-5">
        <h4 className="font-semibold px-4 text-xl text-dark-2 mb-5">Q-Zone</h4>
        <div className="w-fit mx-auto space-y-5">
          <img src={qZone1} alt="qZone1" />
          <img src={qZone2} alt="qZone2" />
          <img src={qZone3} alt="qZone3" />
        </div>
      </div>

      <div className="py-16 px-10 text-white text-center" style={{ backgroundImage: `url(${bg})` }}>
        <h2 className="font-bold text-3xl lg:text-xl xl:text-3xl leading-10">Create an Amazing Newspaper</h2>
        <p className="leading-6 text-base lg:text-sm xl:text-base mt-5 mb-7">
          Discover thousands of options, easy to customize layouts, one-click to import demo and much more.
        </p>
        <button className="hover:opacity-90 duration-100 active:scale-95 p-4 lg:py-2 lg:px-3 xl:py-4 xl:px-4 bg-dark-pink text-xl lg:text-base xl:text-xl font-medium text-white rounded-none">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default RightSideNav;
