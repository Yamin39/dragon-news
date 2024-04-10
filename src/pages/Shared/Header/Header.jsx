import moment from "moment";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";

const Header = () => {
  return (
    <div className="text-center">
      <Link to="/">
        <img className="sm:max-w-[27.563rem] mx-auto" src={logo} alt="Logo" />
      </Link>
      <p className="mt-4 mb-1 text-lg text-dark-3">Journalism Without Fear or Favour</p>
      <p className="font-medium text-xl text-[#403F3F]">{moment().format("dddd, MMMM DD, YYYY")}</p>
    </div>
  );
};

export default Header;
