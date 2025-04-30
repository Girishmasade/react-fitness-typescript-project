import React from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import tracking from '../assets/img4.jpg'
import streaching from '../assets/img5.jpg'

const GymSlider: React.FC = () => {
  return (
    <div className="min-h-screen px-6 py-3">
      <div className="">

      <div className="md:justify-self-end flex flex-col">
        <h1>Lorem, ipsum dolor.</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>

        <div className="flex md:flex-row flex-col-reverse items-start pt-8 gap-5">
     
          <div className="flex  gap-3 justify-start pt-2 pb-6">
            <button className=""><FaArrowAltCircleLeft/></button>
            <button className=""><FaArrowAltCircleRight /></button>
          </div>
          <p className="w-[330px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem,
            cupiditate. Omnis quibusdam beatae non. Sapiente debitis earum sequi
            quam a dolorem quis? Necessitatibus, vitae.
          </p>
       
        </div>
       
      </div>
      <div className="flex flex-col">
         <div className="grid md:grid-rows-2">
          <div className="flex md:flex-row flex-col gap-2 relative">
            <div className="w-[300px] bg-yellow-400 h-[150px]" ></div>
            <div className="w-[300px] bg-green-400 h-[250px] static md:absolute top-20 right-0 md:left-[320px] left-0"></div>
            <div className="w-[300px] bg-red-400 h-[350px] static md:absolute top-32 right-0 md:left-[660px]"></div>
          </div>
          <div className="flex justify-start items-start w-[190px] pt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
         </div>
        </div>
      </div>

        <div className="pt-9 flex items-center relative top-48 w-full gap-3 min-h-screen">
          <div className="flex w-[30%] bg-yellow-300 gap-2 p-4 bg-containn h-[100%]">
            <img src={tracking} alt="" />
          </div>
          <div className="bg-green-300 flex w-[70%] p-4">
    <img src={streaching} alt="" />
          </div>
        </div>
    </div>
  );
};

export default GymSlider;
