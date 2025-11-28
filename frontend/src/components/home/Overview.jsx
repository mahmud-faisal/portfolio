import React, { useEffect, useState, useRef } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router";
import FocusOn from "./FocusOn";

const Overview = () => {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const overviewHeight = ref.current?.offsetHeight || 1;

  // Rotate only after full Overview scroll
  const extraScroll = Math.max(scrollY - overviewHeight, 0);
  const rotation = Math.min(extraScroll / 20, 50); // adjust divisor for rotation speed
  // const scale = Math.max(1 - rotation / 200, 0.8);

  return (
    <div className="relative bg-black -z-30">
      {/* Overview rotating in 2D */}
      <div
        ref={ref}
        className="bg-customlime h-screen pt-48 origin-center transition-transform duration-0 relative z-10"
        style={{
          transform: `rotate(${-rotation}deg)`,
        }}
      >
        <div className="wrapper flex flex-col w-9/10 m-auto relative">
          <div className="top flex flex-col md:flex-row w-full justify-between ">
            <div className="left md:w-5/10 text-3xl/10 text-justify font-mono ">
            With 4+ years of coding experience and a CS degree, I’m grounded in cloud architecture, software engineering, and database management. My work reflects best practices, continuous learning, and trusted contributions across projects...
            </div>

            <div className="right md:w-4/10 font-monos text-justify tracking-widest text-2xl">
            My portfolio blends theory with hands-on work. With 5+ projects and 1200+ algorithmic problems solved, I showcase strong problem-solving and end-to-end development skills. Explore my Projects for more.
            </div>
          </div>

          <div className="bottom flex flex-col items-center pt-32">
            <h2 className="text-4xl mb-8">
              Trusted by <span className="font-instrument italic">people</span>{" "}
              worldwide
            </h2>
            <div className="flex flex-col md:flex-row justify-between w-[600px]">
              <div className="solve text-center py-8">
                <p className="text-5xl font-bold font-mono">1200+</p>
                <p className="">Solved on Online Judges</p>
              </div>
              <div className="projects border-x-2 border-gray-400 p-8 text-center">
                <p className="text-5xl font-bold font-mono">5+</p>
                <p className="">Completed Projects</p>
              </div>
              <div className="experience py-8 text-center">
                <p className="text-5xl font-bold font-mono">4+</p>
                <p className="">Years of Coding</p>
              </div>
            </div>
          </div>

          <div className="knowmore relative">
            <Link
              to="/projects"
              className="flex items-center gap-2 px-5 py-17 bg-black rounded-full text-white absolute right-60 bottom-32 font-bold text-2xl hover:bg-white hover:text-black cursor-pointer"
            >
              Projects <GoArrowUpRight />
            </Link>
          </div>
        </div>
      </div>

      {/* Next component scrolls normally but overlays Overview */}
      <div className="relative z-20">
        {/* <FocusOn /> */}
      </div>
    </div>
  );
};

export default Overview;
