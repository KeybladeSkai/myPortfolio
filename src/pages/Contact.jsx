import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useForm, ValidationError } from "@formspree/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { PacmanLoader } from "react-spinners";

const Contact = () => {
  const [retrying, setRetrying] = useState(false);

  const retry = () => {
    setRetrying(true); // This will reset the form visibility
  };

  const [state, handleSubmit] = useForm("xpwavjvy");

  const [loading, setLoading] = useState(false);
  const handleTheSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await handleSubmit(e);
    setLoading(false);
  };

  if (state.succeeded && !retrying) {
    return (
      <div className="flex justify-center items-center h-[100vh] flex-col">
        <p className="text-[25px] font-bold"> Thanks for reaching out! </p>
        <button
          onClick={retry}
          className="mt-[10px] text-[15px] font-bold w-[12rem] text-center underline cursor-pointer Link"
        >
          Contact me again
        </button>
      </div>
    );
  }

  return (
    <div
      style={{ backgroundPosition: "0px 0px", backgroundSize: "6px" }}
      className=" md:w-[100%] flex flex-col border-[1px] border-black place-items-center bg-grayMatter bg-repeat bg-[url('https://assets.website-files.com/5e87e737ee7085b9ba02c101/5e87e737ee7085fccd02c10d_pattern-grey.svg')] mt-[-98px] pt-40 pb-20 md:px-40 text-[4rem] font-extrabold px-4 
      
      "
    >
      <div className="border-[3px] border-black  bg-white mt-12 pb-4">
        <h1 className="text-[25px] p-2 border-b-[4px] border-black text-center bg-grayMatter">
          contact me
        </h1>

        <div className="px-4 pt-6">
          <h1 className="text-[45px] font-bold">Say HI ㋡....</h1>
          <form onSubmit={handleTheSubmit} className="mt-[20px]">
            <label className="text-[20px] mb-[-4px]">Your name</label>
            <input
              required
              id="text"
              name="text"
              type="text"
              placeholder="Jane Doe"
              className="w-[100%] border-[4px] border-black h-[60px] px-4 bg-grayMatter text-[20px] focus:bg-white text-black mb-4"
            />
            <label className="text-[20px] mb-[-4px]">Your email</label>
            <input
              id="email"
              name="email"
              required
              type="text"
              placeholder="janeDoe@gmail.com"
              className="w-[100%] border-[4px] border-black h-[60px] px-4 bg-grayMatter text-[20px] focus:bg-white text-black mb-4"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label className="text-[20px] mb-[-4px]">message</label>
            <textarea
              id="message"
              name="message"
              required
              type="text"
              placeholder="Jane Doe"
              maxLength={5000}
              className="w-[100%] leading-[2rem] border-[4px] border-black  px-5 py-4 bg-grayMatter text-[20px] focus:bg-white text-black h-auto"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

            <button
              className="self-start mt-[30px] mb-[20px] md:mt-5 border-[4px] border-black text-xl bg-grayMatter  py-3 font-bold w-[9rem]  flex justify-center items-center"
              disabled={state.submitting}
            >
              {loading ? <PacmanLoader size={15} /> : "Submit"}
            </button>
            <p className="text-center text-[30px] mt-10 mb-6">or</p>
            <div className="flex justify-around items-center flex-wrap gap-2">
              <a href="https://x.com/keyBladeSkai?t=SaoXwwThtG9FSAuZG9oL-Q&s=08">
                <div className="flex justify-center items-center gap-1">
                  <FaSquareXTwitter className="text-[20px]" />
                  <p className="text-sm underline">@KeybladeSkai</p>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/sule-odu-ayotide?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <div className="flex justify-center items-center gap-1">
                  <FaLinkedin className="text-[20px]" />
                  <p className="text-sm underline">Suleodu Ayotide</p>
                </div>
              </a>
              <a href="mailto:asuleodu@gmail.com">
                <div className="flex justify-center items-center gap-1">
                  <MdEmail className="text-[20px]" />
                  <p className="text-sm underline">asuleodu@gmail.com</p>
                </div>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
