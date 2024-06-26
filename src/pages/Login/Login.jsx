import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import Navbar from "../Shared/Navbar/Navbar";
import data from "./underlineAnimation.json";
import("@dotlottie/player-component");

const Login = () => {
  const { logIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.state);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    console.log(email, password);

    // log in

    logIn(email, password)
      .then((res) => {
        console.log(res.user);
        alert("Login successful");
        e.target.reset();
        navigate(location.state || "/");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="flex flex-col justify-center items-center min-h-[70vh] mt-8">
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-50 text-gray-800">
          <div className="mb-8 text-center">
            <div className="my-3 text-4xl font-bold relative flex flex-col items-center">
              <span className="z-10">Login</span>
              <div className="absolute bottom-0">
                <dotlottie-player src={JSON.stringify(data)} autoplay style={{ width: "200px", height: "20px" }} />
              </div>
            </div>
            <p className="text-sm text-gray-600">Login to access your account</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email address"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                  required
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="password" className="text-sm">
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <input type="submit" value="Login" className="w-full px-8 py-3 font-semibold cursor-pointer rounded-md bg-dark-2 text-gray-50" />
              </div>
              <p className="px-6 text-sm text-center text-gray-600">
                Don&apos;t have an account?{"  "}
                <Link to="/register" className="hover:underline text-dark-pink">
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
