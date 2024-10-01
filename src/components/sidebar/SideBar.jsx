import { Navs } from "./Navs";
const SideBar = () => {
  return (
    <div className="h-screen w-[3rem] lg:w-[6rem]  absolute top-0 text-white bg-black flex  flex-col justify-center items-center">
      <div className="mt-4 text-center rounded shadow-md p-1 w-[29px]">
        <span className="text-3xl font-bold"> S</span>
        <span className="text-4xl text-teal-400 rounded">.</span>
      </div>
      <ul className=" self-center flex flex-col gap-20 my-auto">
        {Navs.map((item, index) => (
          <li className="rotate-90 text-gray-400 text-[1.2rem] font-thin" key={index}>{item.nav}</li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
