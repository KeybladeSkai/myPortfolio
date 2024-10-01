import skai from "../../assets/images/skai.png";
import { Link } from "react-router-dom";
const HomeBody = () => {
  return (
    <div className="bg-white w-[100%]  mx-auto overflow-y-auto overflow-x-hidden  md:mt-[-1px] mt-[20px]  pt-[50px] md:pt-[20px] lg:pt-[58px] lg:ml-20 ">
      <div className="flex flex-col lg:flex-row mb-[80px] overflow-x-hidden">
        <div className="md:h-[500px] flex items-center justify-center flex-col ml-6 md:ml-[3rem]">
          <span className="font-extrabold self-start leading-[0.9] mb-[12px] text-[4.1rem] md:text-[6.1rem] md:mb-[20px]  sm:text-[7rem]">
            Hello.
          </span>
          <span className="self-start font-extrabold mt-[6px] sm:mt-[20px] md:mt-[5px]  text-[4.1rem] sm:text-[7rem] md:text-[6.1rem]">
            I &#39;m Skai.
          </span>

          <span className="w-[280px] sm:w-[580px] md:w-[650px] lg:w-[480px] self-start mt-[25px] text-[1.7rem] leading-[30px] font-medium md:mt-[50px] sm:mt-[60px]">
            I &#39;m a creative frontend engineer, welcome to my portfolio
          </span>

          <button className="self-start mt-[30px] md:mt-10 border-[5px] border-black text-xl  bg-grayMatter py-5  font-bold w-[15rem] ">
            <Link to="/contact" className="Link">
              Contact Me
            </Link>
          </button>
        </div>

        <img
          src={skai}
          alt="a guy on a robot"
          className="w-[100%] md:w-[100%] mt-20 md:mt-0 rounded-none lg:h-[500px] lg:w-[500px] max-w-[100%] object-contain grayscale lg:rounded-lg  bg-gradient-to-b from-black via-purple-900 to-indigo-900 h-screen  lg:ml-[50px]"
        />
      </div>
    </div>
  );
};

export default HomeBody;
