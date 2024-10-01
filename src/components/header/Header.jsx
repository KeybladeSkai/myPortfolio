import { Hicons } from "./icons/Hicons";
import { MdMenu } from "react-icons/md";
import { Navs } from "../../data/Navs";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { link } from "framer-motion/client";

const Header = () => {
  const buttonRef = useRef();
  console.log(buttonRef.current);
  useEffect(() => {
    document.addEventListener("click", () => {
      if (buttonRef.current) {
        console.log("Hey you clicked me");
      } else {
        console.log("Hey you didn't click me");
      }
    });
  });

  const [toggleMenu, setToggleMenu] = useState(false);
  const setTheToggleMenu = () => {
    setToggleMenu((prev) => !prev);
  };
  // useEffect(() => {
  //   if (toggleMenu && document.addEventListener("click")) {
  //     setTheToggleMenu(false);
  //   }
  // });

  return (
    <div className="flex px-4 gap-2 bg-grayMatter  border-y-black justify-between border-b-black border-[3px]  header outline-none border-x-0 items-center  fixed top-[10px]  z-[999900]  rounded-tl-md rounded-tr-md ">
      <Link to="/">
        <button onClick={() => setToggleMenu(false)}>
          <h1 className="  font-extrabold text-[2.5rem] leading-[1.5] ">
            SKAI
          </h1>
        </button>
      </Link>
      <div className="hidden lg:block ml-10">
        <ul className="flex ">
          {Hicons.map((item, index) => (
            <li
              key={index}
              className="mr-[2rem] text-[2rem] leading-[1.5] flex justify-center items-center"
            >
              <a href={item.link} className="flex justify-center items-center">
                <button className="">{<item.icon />}</button>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <button
        ref={buttonRef}
        className="block lg:hidden text-[40px] cursor-pointer"
      >
        <MdMenu onClick={setTheToggleMenu} />
      </button>

      {toggleMenu && (
        <ul className="absolute w-[100%] list-none flex place-items-center flex-col border-[2px] border-black left-0 top-[60px]">
          {Navs.map((item, index) => (
            <li key={index} className="w-[100%]">
              <Link
                to={item.link}
                onClick={setTheToggleMenu}
                className="border-b-[4px] text-[1.3rem] border-black h-15 font-bold bg-grayMatter text-center hover:bg-black hover:text-white block py-2" // Ensure Link is block-level for full width
              >
                <button className="w-[]">{item.nav}</button>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Header;
