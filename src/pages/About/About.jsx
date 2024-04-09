import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";

const About = () => {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="min-h-[60vh] flex justify-center items-center">
        <h1 className="text-3xl font-semibold text-center leading-10">
          You will <br /> soon learn more <br /> about us <br /> 😉
        </h1>
      </div>
    </div>
  );
};

export default About;
