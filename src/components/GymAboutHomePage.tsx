import React from "react";
import runner from "../assets/runner.png";
import cardio from '../assets/img3.jpg';
import { CgSmartphoneChip } from "react-icons/cg";
import { MdSportsMartialArts } from "react-icons/md";
import { RiUserCommunityFill } from "react-icons/ri";
import GymSlider from "./GymSlider";

const GymAboutHomePage: React.FC = () => {
  return (
    <div className="px-4 md:px-10 lg:px-16 min-h-screen pt-10 flex flex-col items-center bg-white text-black">
      {/* Top Section */}
      <div className="grid md:grid-cols-2 gap-16 items-center w-full max-w-7xl">
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase leading-tight tracking-wide text-black">
            <span>Move to</span> <br />
            <span>Maintain Your</span> <br />
            <span>Health</span>
          </h1>

          <p className="text-base md:text-lg text-gray-700 max-w-xl">
            Unlock your full potential with expert training, community support, and a lifestyle that promotes holistic wellness. Join us and start your fitness transformation today.
          </p>

          <button className="bg-yellow-400 px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-300 transition-all">
            Get Started
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-100 rounded-xl shadow-xl overflow-hidden">
            <img src={runner} alt="Runner" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                A Brighter Future Starts with a Healthy Life
              </h2>
            </div>
          </div>

          <div className="grid grid-rows-2 gap-6">
            <div className="bg-yellow-400 rounded-xl shadow-md flex items-center justify-center h-40 text-center px-4">
              <h3 className="text-2xl md:text-3xl font-semibold text-black">
                Don't Think, Take Action
              </h3>
            </div>
            <div className="rounded-xl overflow-hidden shadow-md h-52">
              <img src={cardio} alt="Cardio" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* middle Section */}
      <div className="w-full max-w-7xl py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Achieve Your Health Goals
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-yellow-300 p-6 rounded-xl shadow-lg text-center flex flex-col items-center gap-4">
            <CgSmartphoneChip size={40} className="text-gray-800" />
            <h3 className="text-xl font-bold">Smarter Training</h3>
            <p className="text-gray-700">
              Personalized, tech-driven workouts designed for every fitness level. Track your progress and optimize your routine.
            </p>
          </div>

          <div className="bg-green-400 p-6 rounded-xl shadow-lg text-center flex flex-col items-center gap-4">
            <MdSportsMartialArts size={40} className="text-white" />
            <h3 className="text-xl font-bold text-white">Combat Conditioning</h3>
            <p className="text-white">
              Get stronger with dynamic martial arts-inspired workouts that boost confidence, flexibility, and strength.
            </p>
          </div>

          <div className="bg-red-400 p-6 rounded-xl shadow-lg text-center flex flex-col items-center gap-4">
            <RiUserCommunityFill size={40} className="text-white" />
            <h3 className="text-xl font-bold text-white">Strong Community</h3>
            <p className="text-white">
              Train with a supportive fitness community that motivates you to push limits and celebrate every milestone together.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl py-20 bg-gray-500 min-h-screen">
        <GymSlider/>
      </div>
    </div>
  );
};

export default GymAboutHomePage;
