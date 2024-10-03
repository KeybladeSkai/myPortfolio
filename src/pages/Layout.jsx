import { useEffect } from "react";
import Header from "../components/header/Header";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const { pathname } = useLocation(); // Track the route change

  useEffect(() => {
    const scrollableContainer = document.getElementById(
      "your-scrollable-container"
    );

    if (scrollableContainer) {
      // Ensure the scroll happens after the content has loaded
      setTimeout(() => {
        scrollableContainer.scrollTop = 0;
      }, 0);
    }
  }, [pathname]); // Run the effect only when the route (pathname) changes

  return (
    <div className="bg-black h-[100svh] flex flex-col overflow-hidden relative px-2 md:px-4  md:pt-[20px] ">
      <Header />
      <div
        id="your-scrollable-container"
        className="overflow-auto overflow-x-hidden h-[100svh] w-full scrollbar-thin md:scrollbar-thin2 bg-white mt-[66px] md:mt-[50px] "
      >
        <Outlet />
        <footer className="w-[100%] py-2 text-black border-black text-center flex flex-col border-t-[1px]">
          <span className="font-medium">
            @2024, made by <span className="font-bold">KeybladeSkai</span> with
            React.js.
          </span>
          <span className="mt-[-10px] font-medium">
            I hope I left a good impression ㋡ ....
          </span>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
