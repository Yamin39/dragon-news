import { Link, NavLink } from "react-router-dom";
import defaultProfilePic from "../../../assets/user.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start"></div>
      <div className="navbar-center flex">
        <ul className="menu menu-horizontal px-1 text-lg text-dark-3">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/career">Career</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end space-x-3">
        <div className="avatar">
          <div className="w-11 rounded-full">
            <img src={defaultProfilePic} alt="user" />
          </div>
        </div>
        <Link>
          <button className="btn h-auto px-10 py-2 bg-dark-2 hover:bg-dark-2 hover:opacity-90 text-xl font-medium text-white rounded-none">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
