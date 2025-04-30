import React from "react";
import { FaStar } from "react-icons/fa";

type avt = {
  name: string;
};

const avatar: avt[] = [
  {
    name: "Vicky",
  },
  {
    name: "Rahul",
  },
  {
    name: "Akshay",
  },
];

const GymHeroCard: React.FC = () => {
  return (
    <div className="my-2 bg-slate-600  max-w-full w-full container">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-2 p-2 items-center">
        <div className="flex bg-slate-900 flex-col gap-5 items-start px-5 justify-center py-5 ">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {avatar.map((item, index) => (
                <div
                  key={item.name + index}
                  className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center bg-yellow-400 text-black text-sm font-semibold shadow-md"
                >
                  {item.name.slice(0, 1).toUpperCase()}
                </div>
              ))}
            </div>
            <h1 className="text-3xl md:text-4xl text-white font-bold tracking-wide">
              150K+
            </h1>
          </div>

          <p className="text-xl">
          Active members transforming their fitness with us!
          </p>
        </div>

        <div className="flex bg-slate-900 flex-col gap-5 items-start px-5 justify-center py-5 ">
          <div className="flex gap-4 items-center justify-center">
            <FaStar className="text-yellow-400 text-4xl" />
            <h1 className="text-4xl text-white font-bold">4.8</h1>
          </div>
          <p className="text-xl">
          Rated by thousands of satisfied fitness lovers worldwide.
          </p>
        </div>

        <div className="flex bg-slate-900 flex-col gap-5 items-start px-5 justify-center py-5 ">
          <h1 className="text-4xl text-white font-bold">120+</h1>
          <p className="text-xl">
          Custom training programs designed for all fitness levels.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GymHeroCard;
