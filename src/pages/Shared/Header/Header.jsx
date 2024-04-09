import moment from "moment";
import logo from "../../../assets/logo.png";

const Header = () => {
  return (
    <div className="mt-6 md:mt-8 text-center">
      <img className="mx-auto" src={logo} alt="Logo" />
      <p className="mt-4 mb-1 text-lg text-dark-3">Journalism Without Fear or Favour</p>
      <p className="font-medium text-xl text-[#403F3F]">{moment().format("dddd, MMMM DD, YYYY")}</p>
    </div>
  );
};

export default Header;
