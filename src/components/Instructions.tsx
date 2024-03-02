import React from "react";
import one from "../images/01.svg";
import redCard from "../images/red-card.svg";
import blueCard from "../images/blue-card.svg";
import match from "../images/matched.svg";
import backCard from "../images/redCard.svg";

const Instructions = () => {
  return (
    <div className="w-full h-full flex items-center justify-center px-10">
      <div className="grid grid-cols-3 gap-28">
        <div className="w-[320px] h-[400px] bg-white rounded-3xl relative ">
          <div className="w-full h-fit relative">
            <img
              src={backCard}
              className="mx-auto absolute top-0 left-0"
              alt="red-card"
            />
            <img
              src={redCard}
              className="mx-auto translate-y-[20px] translate-x-1/2 absolute top-0 left-0"
              alt="red-card"
            />
          </div>
          <img
            src={one}
            alt="step one"
            className="left-0 absolute bottom-1/4"
          />
          <div className="mx-auto w-fit my-3 text-4xl font-extrabold text-center mt-[255px] text-[#11AEC6]">
            Select a <br /> pink card
          </div>
          <div className="mx-auto w-fit font-bold text-2xl text-[#A6C930]">
            It has images
          </div>
        </div>
        <div className="w-[320px] h-[400px] bg-white rounded-3xl relative ">
          <img src={blueCard} className="mx-auto" alt="red-card" />
          <div className="left-0 absolute w-14 h-14 rounded-r-2xl font-bold text-4xl text-white bottom-1/4 bg-[#A6CD25] flex items-center justify-center">
            02
          </div>
          {/* <img
            src={one}
            alt="step one"
            className="left-0 absolute bottom-1/4"
          /> */}
          <div className="mx-auto w-fit my-3 text-4xl font-extrabold text-center text-[#11AEC6]">
            Select a <br /> blue card
          </div>
          <div className="mx-auto w-fit font-bold text-2xl text-[#A6C930]">
            It has alphabets
          </div>
        </div>

        <div className="w-[320px] h-[400px] bg-white rounded-3xl relative ">
          <img src={match} className="mx-auto" alt="red-card" />
          <div className="left-0 absolute w-14 h-14 rounded-r-2xl font-bold text-4xl text-white bottom-1/4 bg-[#FB993D] flex items-center justify-center">
            03
          </div>
          <div className="-translate-y-[70px]">
            <div className="mx-auto w-fit font-bold text-2xl text-[#A6C930]">
              If they’re same
            </div>
            <div className="mx-auto w-fit my-2 text-4xl font-extrabold text-center text-[#11AEC6]">
              It's a match!
            </div>
            <div className="mx-auto w-fit font-bold text-2xl text-[#A6C930]">
              otherwise retry
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
