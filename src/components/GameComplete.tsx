import React from "react";
import earned from "../images/earned.svg";
import monkey from "../images/monkey.svg";
import banana from "../images/banana.svg";
import nextButton from "../images/nextButton.svg";

type Props = { setScreen: any };

const bananaPositions = [
  { top: "20%", left: "-10%" },
  { top: "50%", left: "-30%" },
  { top: "70%", left: "100%" },
  { top: "0%", left: "40%" },
  { top: "40%", left: "115%" },
  { top: "80%", left: "-10%" },
  { top: "20%", left: "100%" },
];

const GameComplete = ({ setScreen }: Props) => {
  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative">
        <img className="w-[500px]" src={earned} alt="" />
        <img
          src={monkey}
          alt="monkey"
          className=" w-[300px] -translate-y-12 -translate-x-32 absolute top-1/2 left-1/2 transform"
        ></img>
        {bananaPositions.map((position, index) => (
          <img
            key={index}
            src={banana}
            alt={`banana-${index}`}
            className="w-[100px] absolute"
            style={{
              top: position.top,
              left: position.left,
            }}
          ></img>
        ))}
      </div>
      <button
        onClick={() => setScreen("instructions")}
        className="absolute bottom-8 w-[370px] h-[130px]"
      ></button>
    </div>
  );
};

export default GameComplete;
