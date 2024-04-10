import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import Navbar from "../Shared/Navbar/Navbar";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);

    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photoURL = form.get("photoURL");
    const email = form.get("email");
    const password = form.get("password");

    console.log(name, photoURL, email, password);

    // create user
    createUser(email, password)
      .then((result) => console.log(result.user))
      .catch((error) => console.log(error.message));
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="flex flex-col justify-center items-center min-h-[70vh] mt-8">
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-50 text-gray-800">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Register</h1>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                  required
                />
              </div>
              <div>
                <label htmlFor="photoURL" className="block mb-2 text-sm">
                  Photo URL
                </label>
                <input
                  type="text"
                  name="photoURL"
                  id="photoURL"
                  placeholder="Enter your Photo URL"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                  required
                />
              </div>
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
              <div className="flex items-center gap-2">
                <input type="checkbox" id="terms" name="terms" className="checkbox" required />
                <label htmlFor="terms">
                  Accept{" "}
                  <a href="" className="font-bold">
                    Term & Conditions
                  </a>
                </label>
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <input type="submit" value="Register" className="w-full px-8 py-3 font-semibold cursor-pointer rounded-md bg-dark-2 text-gray-50" />
              </div>
              <p className="px-6 text-sm text-center text-gray-600">
                Already have an account?{"  "}
                <Link to="/login" className="hover:underline text-dark-pink">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
