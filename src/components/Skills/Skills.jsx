import { Libraries, skills } from "../../data/Skills";
import { Tools } from "../../data/Skills";
const Skills = () => {
  return (
    <div  className="w-[100%] flex flex-col border-t-[4px] border-black place-items-center bg-white pt-10 pb-20 md:px-40 text-[4rem] font-extrabold px-6 ">
      <h2 className="self-start mt-5 underline italic">Skills</h2>
      <div className="px-5 pt-6 min-w-[320px] h-auto flex flex-col md:flex-row gap-6 flex-wrap justify-center mt-[40px] font-medium md:mt-[50px]">
        {skills.map((skill, index) => (
          <ol key={index} className="flex gap-2 list">
            <li className="flex gap-2">
              <skill.logo className="text-[30px]  font-medium" />
              <span className="text-[30px]  font-medium">{skill.skill}</span>
            </li>
          </ol>
        ))}
      </div>

      <h2 className="self-start mt-20 text-[50px] underline italic">
        Libraries
      </h2>

      <div className="px-2 pt-6 min-w-[300px] h-auto flex flex-col md:flex-row gap-6 flex-wrap justify-center mt-[40px] font-medium md:mt-[50px]">
        {Libraries.map((item, index) => (
          <ol key={index} className="flex gap-2 ">
            <li className="flex gap-2">
              <item.logo className="text-[30px]  font-medium" />
              <span className="text-[30px]  font-medium">{item.skill}</span>
            </li>
          </ol>
        ))}
      </div>

      <h2 className="self-start mt-20 text-[50px] underline italic">Tools</h2>

      <div className="px-2 pt-6 min-w-[300px] h-auto flex flex-col md:flex-row gap-6 flex-wrap justify-center mt-[40px] md:mt-[50px]">
        {Tools.map((tool, index) => (
          <ol key={index} className="flex gap-2 ">
            <li className="flex gap-2 font-medium">
              <tool.logo className="text-[30px] font-medium" />
              <span className="text-[30px] font-medium ">{tool.skill}</span>
            </li>
          </ol>
        ))}
      </div>
    </div>
  );
};

export default Skills;
