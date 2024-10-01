const AboutMe = () => {
  return (
    <>
      <div
        style={{ backgroundPosition: "0px 0px", backgroundSize: "6px" }}
        className="w-[100%] flex flex-col border-[1px] border-black place-items-center bg-grayMatter bg-repeat bg-[url('https://assets.website-files.com/5e87e737ee7085b9ba02c101/5e87e737ee7085fccd02c10d_pattern-grey.svg')] mt-[-98px] pt-40 pb-20 md:px-40 text-[4rem] font-extrabold px-4 "
      >
        <div className="border-[3px] border-black  bg-white mt-12 pb-4">
          <h1 className="text-[25px] p-2 border-b-[4px] border-black text-center bg-grayMatter">
            about me
          </h1>

          <div className="px-4 pt-6">
            <h1 className="text-[45px] font-bold">Hi, I &#39;m KeybladeSkai</h1>
            <article className="text-[23px] mt-[20px] font-medium">
              I &#39;m a Frontend engineer with over a year experience, obsessed
              with building amazing UI and seamless functionalities.
            </article>
            <h1 className="text-[45px] font-bold mt-[40px] underline">
              Present Role
            </h1>
            <article className="text-[23px] mt-[20px] font-medium ">
              I currently work at a BioTechnology company, collaborating with a
              team of Backend engineers, Machine learning and and AI experts to
              build products that benefit humanity.
            </article>
            <h1 className="text-[45px] font-bold mt-[40px] underline">
              Future aspirations
            </h1>
            <article className="text-[23px] mt-[20px] font-medium">
              One day, i aspire to become a software AI expert, skilled in
              building both frontend and backend Systems, Large language models,
              and pushing projects as an indie hacker.
            </article>
            <button className="self-start mt-[20px] md:mt-5 border-[5px] border-black text-xl  bg-grayMatter py-3 font-bold w-[15rem] ">
              View Page
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
