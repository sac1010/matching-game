import React, { useRef, useState } from "react";
import "./App.css";
import bg from "./images/bg-svg.svg";
import monkey from "./images/monkey.svg";
import cloud from "./images/cloud.svg";
import buttonSvg from "./images/button.svg";
import backButton from "./images/back-button.svg";
import nextButton from "./images/nextButton.svg";
import Instructions from "./components/Instructions";
import playButton from "./images/playButton.svg";
import Game from "./components/Game";
import GameComplete from "./components/GameComplete";
import vol from "./images/volume.svg";
import stopAudio from "./images/noAudio.svg";

type Screen =
  | "intro"
  | "mizoIntro"
  | "canYouHelp"
  | "instructions"
  | "play"
  | "complete";

const App: React.FC = () => {
  const [screen, setScreen] = useState<Screen>("intro");
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const bgAudioRef = useRef<HTMLAudioElement>(null);

  const renderScreenContent = () => {
    switch (screen) {
      case "intro":
        return (
          <div className="w-full h-full flex items-center justify-center">
            <div className="relative">
              <img
                src={monkey}
                alt="Monkey"
                className="translate-y-20 h-[550px] w-[550px]"
              />
              <img
                src={cloud}
                alt="cloud"
                className="absolute -top-14 left-[300px]"
              />
              <div className="absolute -top-14 left-[300px] w-full">
                <div className="absolute text-5xl font-extrabold top-16 left-16 text-[#11AEC6] w-full">
                  Welcome Kiddo!
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                audioRef?.current?.play();
                setScreen("mizoIntro");
              }}
            >
              <img
                src={buttonSvg}
                alt="start"
                className="absolute bottom-10 right-10 hover:scale-110 transition"
              />
            </button>
          </div>
        );
      case "mizoIntro":
        return (
          <div className="w-full h-full flex items-center justify-center">
            <div className="relative">
              <img
                src={monkey}
                alt="Monkey"
                className="translate-y-20 h-[550px] w-[550px]"
              />
              <img
                src={cloud}
                alt="cloud"
                className="absolute -top-14 left-[300px]"
              />
              <div className="absolute -top-14 left-[300px] w-full">
                <div className="absolute text-5xl font-extrabold top-12 left-16 text-[#11AEC6] w-full">
                  Hi , I am Mizo ! <br /> and I love bananas
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                audioRef?.current?.play();
                setScreen("canYouHelp");
              }}
            >
              <img
                src={nextButton}
                alt="start"
                className="absolute bottom-10 right-10 hover:scale-110 transition"
              />
            </button>
            <button
              onClick={() => {
                audioRef?.current?.play();
                setScreen("intro");
              }}
            >
              <img
                src={backButton}
                alt="start"
                className="absolute top-10 left-10 hover:scale-110 transition"
              />
            </button>
          </div>
        );
      case "canYouHelp":
        return (
          <div className="w-full h-full flex items-center justify-center">
            <div className="relative">
              <img
                src={monkey}
                alt="Monkey"
                className="translate-y-20 h-[550px] w-[550px] animate-bounce"
              />
              <img
                src={cloud}
                alt="cloud"
                className="absolute -top-14 left-[300px]"
              />
              <div className="absolute -top-14 left-[300px] w-full">
                <div className="absolute text-5xl font-extrabold top-12 left-12 text-[#11AEC6] w-full">
                  Can you help me get some ?
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                audioRef?.current?.play();
                setScreen("instructions");
              }}
            >
              <img
                src={nextButton}
                alt="start"
                className="absolute bottom-10 right-10 hover:scale-110 transition"
              />
            </button>
            <button
              onClick={() => {
                audioRef?.current?.play();
                setScreen("mizoIntro");
              }}
            >
              <img
                src={backButton}
                alt="start"
                className="absolute top-10 left-10 hover:scale-110 transition"
              />
            </button>
          </div>
        );
      case "instructions":
        return (
          <div className="w-full h-full">
            <button
              className="absolute bottom-10 right-10 hover:scale-110 transition"
              onClick={() => {
                audioRef?.current?.play();
                setScreen("play");
              }}
            >
              <img src={playButton} alt="start" className="" />
            </button>
            <button
              className="absolute top-10 left-10 hover:scale-110 transition"
              onClick={() => {
                audioRef?.current?.play();
                setScreen("mizoIntro");
              }}
            >
              <img src={backButton} alt="start" />
            </button>
            <Instructions />
          </div>
        );
      case "play":
        return (
          <div className="w-full h-full">
            <Game setScreen={setScreen} />
            <button
              className="absolute top-4 left-4 hover:scale-110 transition"
              onClick={() => {
                audioRef?.current?.play();
                setScreen("instructions");
              }}
            >
              <img src={backButton} alt="start" className="w-32 h-32" />
            </button>
          </div>
        );
      case "complete":
        return (
          <div className="w-full h-full">
            <GameComplete setScreen={setScreen} />
          </div>
        );
      default:
        return null;
    }
  };

  const handleToggle = () => {
    if (bgAudioRef.current) {
      if (isPlaying) {
        bgAudioRef.current.pause();
      } else {
        bgAudioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div
      className="bg-cover bg-center h-screen w-full relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {renderScreenContent()}
      <audio className="hidden" ref={audioRef} src="/audio/click.mp3" />
      <audio className="hidden" ref={bgAudioRef} src="/audio/bgm.mp3" />
      <button className="fixed left-8 bottom-7" onClick={handleToggle}>
        {isPlaying ? (
          <img className="w-16 h-16 opacity-60" src={stopAudio} alt="" />
        ) : (
          <img className="w-16 h-16 opacity-60" src={vol} alt="" />
        )}
      </button>
    </div>
  );
};

export default App;
