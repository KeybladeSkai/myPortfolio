import ProjectList from "./ProjectList";
const Projects = () => {
  return (
    <div
      style={{ backgroundPosition: "0px 0px", backgroundSize: "6px" }}
      className="w-[100%] min-h-[100svh]  flex flex-col border-t-[4px] border-black bg-grayMatter bg-repeat bg-[url('https://assets.website-files.com/5e87e737ee7085b9ba02c101/5e87e737ee7085fccd02c10d_pattern-grey.svg')] mt-[-127px] lg:mt-[-32px] pt-40  pb-20 md:px-0 text-[4rem] font-extrabold px-4 "
    >
      <h2 className="self-start md:pl-20 mt-[50px] md:ml-[35px]">Projects</h2>

      <ProjectList />
    </div>
  );
};
55;

export default Projects;
