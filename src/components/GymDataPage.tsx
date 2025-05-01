import React from "react";
import track from "../assets/track.jpg";
import fitness from "../assets/fitness.jpg";
import fitnessTracking from "../assets/fitnessTracking.jpg";

const GymDataPage: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white min-h-screen w-full min-w-7xl pt-3">
      <div className="flex flex-col gap-10">
        <div className="mt-10 text-center">
          <h1 className="text-4xl pb-10">Getting Started is Simple Use!</h1>
          <div className="flex md:flex-row flex-col justify-center items-start gap-10 flex-wrap">
            <div className="flex flex-col gap-5">
              <div className="bg-blue-400 w-[400px] h-[400px] rounded-md p-4">
                <img src={track} alt="" className="bg-contain w-full mt-4" />
              </div>
              <h1 className="max-w-sm text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                nemo obcaecati nesciunt ab possimus magni exercitationem
                voluptates, vitae labore quod.
              </h1>
            </div>

            <div className="flex flex-col gap-5">
              <div className="bg-red-400 w-[420px] h-[527px] mt-32 rounded-md p-4">
                <img src={fitness} alt="" className="bg-contain w-full" />
              </div>
              <h1 className="max-w-sm text-justify text-xl">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
                provident labore incidunt, recusandae laboriosam tenetur placeat
                numquam necessitatibus impedit, nihil sit soluta. Impedit, eum
                aliquid.
              </h1>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <h1 className="text-center text-5xl pb-10">
            Smarter Training, Data- <br />
            Driven Fitness For Everyone
          </h1>
          <div className="flex md:flex-row flex-col w-full max-w-7xl flex-wrap justify-between px-4 gap-10 mt-6 ">
            <div className="bg-blue-300 md:w-[65%] h-[525px] rounded-xl relative">
              <div className="absolute top-0 right-0 w-24 h-16 bg-gray-800 rounded-bl-2xl flex items-center shadow-xs justify-center" />
              <div className="flex-grow flex items-center justify-center">
                <img
                  src={fitnessTracking}
                  alt="Fitness Tracking"
                  className="w-[100%] h-auto object-contain rounded-lg shadow-lg"
                />
              </div>
            </div>
            <div className="bg-yellow-300 rounded-xl shadow-lg w-full md:w-[35%] h-[220px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GymDataPage;
