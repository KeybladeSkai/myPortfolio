import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-black h-[100svh] flex flex-col overflow-hidden relative px-2 md:px-4  md:pt-[20px] ">
      <Header />
      <div className="overflow-auto overflow-x-hidden h-[100svh] w-full scrollbar-thin md:scrollbar-thin2 bg-white mt-[66px] md:mt-[50px] ">
        <Outlet />
        <footer className=" w-[100%]  py-2 text-black  border-black text-center flex flex-col border-t-[1px]">
          <span className="font-medium">
            @2024, made by <span className="font-bold"> KeybladeSkai </span>
            with reactjs.
          </span>
          <span className="mt-[-10px] font-medium">
            I hope i left a Good impression ㋡ ....
          </span>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
