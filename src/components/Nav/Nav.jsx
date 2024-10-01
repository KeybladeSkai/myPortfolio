import { Navs } from "../../data/Navs";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import { ScrollRestoration } from "react-router-dom";
const Nav = () => {
  return (
    <div className="bg-white flex justify-center items-center ">
      <ul className="list-none flex place-items-center relative flex-col z-[1000] lg:flex-row w-[97%] lg: border-t-[4px] border-black  ">
        {Navs.map((item, index) => (
          <li key={index} className="w-[100%]">
            <Link
              to={item.link}
              className="border-b-[4px] border-r-[4px] border-l-[4px] border-black text-[1.3rem]  h-15 font-bold bg-grayMatter text-center hover:bg-black hover:text-white py-2 flex justify-between items-center px-6  Link" // Ensure Link is block-level for full width
            >
              <button className="w-[100%]  flex items-center justify-between md:px-6 lg:px-2">
                <span className="">{item.nav}</span>
                <MdArrowOutward className="text-[30px]" />
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
