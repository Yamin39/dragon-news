import { useContext } from "react";
import { RiMenuUnfoldLine } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import defaultProfilePic from "../../../assets/user.png";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";
import RightSideNav from "../RightSideNav/RightSideNav";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result.user);
        alert("Log Out successful");
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="navbar flex-col md:justify-center lg:justify-normal md:flex-row bg-base-100 pt-0 mt-8">
      <div className="md:navbar-start hidden lg:block"></div>
      <div className="md:navbar-center flex">
        <ul className="menu menu-horizontal px-1 text-lg text-dark-3">
          <li>
            <NavLink className="home" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/career">Career</NavLink>
          </li>
        </ul>
      </div>
      <div className="w-full flex justify-between md:navbar-end">
        <div className="w-fit mx-auto lg:mx-0 flex items-center gap-3 justify-center">
          <div className="w-11 rounded-full">
            <img src={defaultProfilePic} alt="user" />
          </div>
          {user ? (
            <button
              onClick={handleLogOut}
              className="btn h-auto px-10 py-2 bg-dark-2 hover:bg-dark-2 hover:opacity-90 text-xl font-medium text-white rounded-none"
            >
              Log Out
            </button>
          ) : (
            <Link to="/login">
              <button className="btn h-auto px-10 py-2 bg-dark-2 hover:bg-dark-2 hover:opacity-90 text-xl font-medium text-white rounded-none">Login</button>
            </Link>
          )}
        </div>

        <div className="lg:hidden">
          <div className="drawer drawer-end z-10">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer-4" className="btn btn-ghost drawer-button">
                <RiMenuUnfoldLine className="text-3xl" />
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
    </div>
  );
};

export default Navbar;
