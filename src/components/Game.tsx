import React, { useState } from "react";
import blueCard from "../images/blue-card.svg";
import redCard from "../images/redCard.svg";
import "./Game.css";
import Modal from "./Modal";
import nextButton from "../images/next-button.svg";
type Props = {};

const redCardData = [
  { fruit: "apple", icon: "🍎" },
  { fruit: "orange", icon: "🍊" },
  { fruit: "grape", icon: "🍇" },
  { fruit: "banana", icon: "🍌" },
  { fruit: "mango", icon: "🥭" },
  { fruit: "pineapple", icon: "🍍" },
];

const blueCardData = [
  { fruit: "apple", icon: "🍎", letter: "A" },
  { fruit: "orange", icon: "🍊", letter: "O" },
  { fruit: "grape", icon: "🍇", letter: "G" },
  { fruit: "banana", icon: "🍌", letter: "B" },
  { fruit: "mango", icon: "🥭", letter: "M" },
  { fruit: "pineapple", icon: "🍍", letter: "P" },
];

const Game = (props: Props) => {
  const [selectedRedCard, setSelectedRedCard] = useState<{
    fruit: string;
    icon: string;
  }>();
  const [selectedBlueCard, setSelectedBlueCard] = useState<{
    fruit: string;
    icon: string;
    letter: string;
  }>();
  const [completed, setCompleted] = useState<string[]>([]);
  const [isMatched, setIsMatched] = useState<boolean>(false);
  const selectRedCard = (data: { fruit: string; icon: string }) => {
    if (!selectedRedCard) {
      setSelectedRedCard(data);
    }
  };

  const selectBlueCard = (data: {
    fruit: string;
    icon: string;
    letter: string;
  }) => {
    if (!selectedBlueCard && selectedRedCard) {
      setSelectedBlueCard(data);
      setTimeout(() => {
        if (selectedRedCard.fruit !== data.fruit) {
          setSelectedRedCard(undefined);
          setSelectedBlueCard(undefined);
        } else {
          setCompleted([...completed, data.fruit]);
          setIsMatched(true);
        }
      }, 1000);
    }
  };
  return (
    <div className="w-full h-full flex items-center justify-center ">
      {isMatched && (
        <div className="fixed inset-0 z-10 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <button
            onClick={() => {
              setIsMatched(false);
              setSelectedRedCard(undefined);
              setSelectedBlueCard(undefined);
            }}
          >
            <img
              src={nextButton}
              alt="start"
              className="absolute bottom-10 right-10 hover:scale-110 transition"
            />
          </button>
          <div className=" z-30 flex gap-14 relative">
            <div className="absolute text-5xl font-extrabold text-orange-500 -top-10 right-0">
              It's a Match
            </div>
            <div className="bg-[#eaada0] border-white border-8 p-4 rounded-md w-[190px] h-[240px] mt-2 flex items-center justify-center text-8xl animated-rotate animated-slide-in-left">
              {selectedRedCard?.icon}
            </div>
            <div className="bg-[#eaada0] border-white border-8 p-4 rounded-md text-green-600 w-[190px] h-[240px] mt-2 flex items-center justify-center text-8xl animated-slide-in-right translate-y-[30%]">
              {selectedBlueCard?.letter}
            </div>
          </div>
        </div>
      )}
      <div className=" flex gap-14">
        <div className="grid grid-cols-3">
          {redCardData.map((cardData) => {
            const isSelected =
              selectedRedCard && selectedRedCard.fruit === cardData.fruit;
            const isCompleted = completed.includes(cardData.fruit);
            return (
              <div
                onClick={() => selectRedCard(cardData)}
                className={`transition transform ${
                  isCompleted ? "invisible" : ""
                } ${!selectedRedCard ? "hover:scale-110" : ""} card ${
                  isSelected ? "flipped" : ""
                }`}
              >
                {selectedRedCard && selectedRedCard.fruit === cardData.fruit ? (
                  <div className="bg-[#eaada0] border-white border-8 p-4 rounded-md w-[190px] h-[240px] mt-2 flex items-center justify-center text-8xl">
                    {cardData.icon}
                  </div>
                ) : (
                  <img src={redCard} alt="card" />
                )}
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-3">
          {blueCardData.map((cardData) => {
            const selected =
              selectedBlueCard && cardData.fruit === selectedBlueCard.fruit;
            const isCompleted = completed.includes(cardData.fruit);
            return (
              <div
                onClick={() => selectBlueCard(cardData)}
                className={`transition ${isCompleted ? "invisible" : ""} ${
                  selectedRedCard && !selectedBlueCard ? "hover:scale-110" : ""
                } card ${selected ? "flipped" : ""}`}
              >
                {selected ? (
                  <div className="bg-[#eaada0] border-white border-8 p-4 rounded-md text-green-600 w-[190px] h-[240px] mt-2 flex items-center justify-center text-5xl">
                    {cardData.letter}
                  </div>
                ) : (
                  <img src={blueCard} alt="card" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Game;
