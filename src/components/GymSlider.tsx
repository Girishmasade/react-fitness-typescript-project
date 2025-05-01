import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import tracking from "../assets/img4.jpg";
import stretching from "../assets/img5.jpg";

type imageType = {
  id: number,
  color: string,
  height: string
}

const imageSlides: imageType[] = [
  { id: 1, color: "bg-yellow-400", height: "h-[150px]" },
  { id: 2, color: "bg-red-400", height: "h-[250px]" },
  { id: 3, color: "bg-blue-400", height: "h-[350px]" },
  { id: 4, color: "bg-green-400", height: "h-[150px]" },
  { id: 5, color: "bg-purple-400", height: "h-[250px]" },
];

const GymSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? imageSlides.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === imageSlides.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className=" px-4 md:px-10 lg:px-20 py-12 text-white">
 
      <div className="w-full flex justify-end">
        <div className="mb-12 max-w-3xl w-full">
          <h1 className="text-3xl md:text-4xl font-bold  mb-4 text-right">
            Train With Experts
          </h1>
          <p className=" text-md md:text-lg text-right">
            Transform your body and health with professional <br /> guidance and world-class facilities.
          </p>

          <div className="flex flex-col md:flex-row items-start gap-6 mt-10 md:pl-64">
            <div className="flex gap-4 self-end md:self-start">
              <button onClick={handlePrev} className="text-3xl text-yellow-400 hover:text-yellow-500 transition">
                <FaArrowAltCircleLeft />
              </button>
              <button onClick={handleNext} className="text-3xl text-yellow-400 hover:text-yellow-500 transition">
                <FaArrowAltCircleRight />
              </button>
            </div>

            <p className="text-white w-full md:w-[350px] text-right md:text-left">
              Our gym offers personalized coaching and modern equipment to help you achieve your goals efficiently. Join now and feel the difference.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center md:justify-start flex-wrap gap-6 transition-all duration-500">
        {imageSlides
          .slice(
            currentIndex,
            currentIndex + (typeof window !== "undefined" && window.innerWidth >= 768 ? 3 : 1)
          )
          .map((slide) => (
            <div
              key={slide.id}
              className={`w-[300px] ${slide.height} ${slide.color} rounded-xl shadow-md transition-all duration-500`}
            ></div>
          ))}
      </div>

      <p className="text-white text-lg max-w-[320px] mt-2">
        Discover our premium fitness spaces with expert-led sessions and dynamic workout routines tailored just for you.
      </p>

      <div className="mt-10 md:flex-row flex-col flex items-center gap-6">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src={tracking}
            alt="Tracking Workout"
            className="w-full shadow-xl object-cover"
          />
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src={stretching}
            alt="Stretching Routine"
            className="w-full object-cover"
          />
        </div>
       
      </div>
      <div className="pt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ratione voluptas, architecto nisi totam rem sunt laborum amet vel saepe, repellendus error, doloremque excepturi impedit qui eligendi facere sequi ullam.
        </div>
    </div>
  );
};

export default GymSlider;
