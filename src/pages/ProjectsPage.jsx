import ProjectList from "../components/project/ProjectList";
const ProjectPage = () => {
  return (
    <div className="pt-[80px]">
      <div className="bg-white px-8 pt-6">
        <h1 className="text-[70px] font-bold">Projects</h1>
        <p className="text-[35px] mt-[36px] font-medium">My builds...</p>
      </div>

      <div
        style={{ backgroundPosition: "0px 0px", backgroundSize: "6px" }}
        className="w-[100%] min-h-[100svh]  flex flex-col border-t-[1px] border-black bg-grayMatter bg-repeat bg-[url('https://assets.website-files.com/5e87e737ee7085b9ba02c101/5e87e737ee7085fccd02c10d_pattern-grey.svg')] mt-[30px] md:mt-[-127px] lg:mt-[52px] pt-5   pb-20 md:px-0 text-[4rem] font-extrabold px-4 "
      >
        <ProjectList />
      </div>
    </div>
  );
};

export default ProjectPage;
