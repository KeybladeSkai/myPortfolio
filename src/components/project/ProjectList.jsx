import { ProjectData } from "../../data/ProjectData";
import "aos/dist/aos.css";

const ProjectList = () => {
  return (
    <div className="mt-2 w-full  overflow-x-auto md:flex md:flex-row md:gap-6  overflow-hidden scrollbar-thin3 md:pl-[40px]">
      <div className="md:min-w-[220vw] md:flex md:justify-around md:gap-10 md:ml-20  md:pr-8 md:h-[950px] ">
        {ProjectData.map((project) => (
          <div
            key={project.id}
            className="border-[4px] border-black bg-white mt-12 pb-4  md:w-[650px] h-auto relative"
          >
            <div className="p-2 border-t-[1px] border-black  bg-grayMatter  w-[100%] flex relative justify-center items-center ">
              <div className="sm:flex gap-[6px] absolute left-[40px] hidden ">
                <div className="h-[20px] w-[20px] bg-[white] rounded-full border-[4px] border-black"></div>
                <div className="h-[20px] w-[20px] bg-[white] rounded-full border-[4px] border-black"></div>
              </div>

              <h1 className="text-[25px] justify-center">{project.name}</h1>
            </div>

            <div className="w-full border-b-[3px] border-black">
              <img
                src={project.pic}
                className="w-full h-auto"
                alt={project.name}
              />
            </div>

            <div className="p-4 ">
              <p className="text-[23px] mt-[20px] font-medium ">
                {project.desc}
              </p>
              <div className="md:absolute bottom-7 w-[98%]">
                <p className="text-[30px] mt-10 underline">Built with. </p>
                <p className="text-[24px] font-semibold">{project.stack}</p>
                <a href={project.link}>
                  <button className="self-start mt-[20px] md:mt-5 border-[5px] border-black text-xl bg-grayMatter py-3 font-bold w-[15rem] ">
                    View Page
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
