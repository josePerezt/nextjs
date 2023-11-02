"use client";

import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();

  const handlerClick = () => {
    router.push("/");
  };
  return (
    <div className=" w-full flex justify-center items-center flex-col h-screen ">
      <div className="border-y-2 p-4 rounded w-3/5 my-5">
        <h1 className="text-white font-bold text-center text-3xl">About!!</h1>
      </div>
      <div className=" bg-slate-600 text-center w-2/4 my-5 rounded p-4">
        <p className="text-white font-medium">
          I'm a junior full stack programmer with a burning passion for
          technology. Currently, I'm immersed in learning Next.js, an exciting
          technology that's constantly evolving. My desire to acquire new
          knowledge in the programming world is insatiable, and I'm thrilled by
          the opportunity to explore and master new technologies as I advance in
          my career. The ability to create end-to-end web solutions excites me,
          and I'm eager to contribute to the digital world in increasingly
          creative and efficient ways.
        </p>
      </div>
      <button
        onClick={handlerClick}
        className="bg-slate-600 p-4 border-2 my-4 rounded w-1/6 text-white font-bold font-mono text-xl"
      >
        Home
      </button>
    </div>
  );
};

export default About;
