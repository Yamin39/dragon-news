import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const form = new FormData(e.currentTarget);
    const email = form.get("email")
    const password = form.get("password")

    console.log(email, password);
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="flex flex-col justify-center items-center min-h-[70vh] mt-8">
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-50 text-gray-800">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Login</h1>
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
