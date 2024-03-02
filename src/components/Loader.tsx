import React from "react";
// import loaderEmpty from "../images/loader-empty.svg";
import loaderFull from "../images/loader-full.svg";

type Props = {bananas:number};


const Loader = ({bananas}: Props) => {
const width = ((bananas+1)/7)*100

  return (
    <div className="w-[400px] transform transition h-6 fixed top-10 left-0 right-0 mx-auto rounded-full bg-gray-50 overflow-hidden">
      <div style={{ width:`${width}%`, height: "100%" }}>
        <img className="w-full h-full object-cover" src={loaderFull} alt="" />
      </div>
    </div>
  );
};

export default Loader;
