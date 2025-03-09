import React from "react";

import "./invertedCard.css";
const InvertedCard = ({ mainHeading, btnColor, btnText, mainImgSrc }) => {
  return (
    <div className="wrapper">
      <div className="flex items-center justify-between flex-col w-[400px] h-[500px]   border-2 border-[#F9FAFB4D] rounded-[40px] relative glass">
        <div className="first-card border-b-2 border-[#F9FAFB4D] w-full flex items-center px-10 justify-start h-[15%]  ">
          <h1 className="text-white text-2xl font-semibold ">{mainHeading} </h1>
        </div>

        <div className="bg-[#757575] w-[80%] h-[40%] flex items-center justify-evenly absolute top-[31%] opacity-[50%] z-30 rounded-t-[40px]"></div>
        <div className="bg-[#9E9D9D] w-[90%] h-[60%] flex items-center justify-evenly absolute top-[35%] opacity-[90%] z-40 rounded-t-[40px]"></div>
        <div className="second-card  absolute z-50 ">
          <div className="box flex items-center justify-evenly relative">
            <img
              src={mainImgSrc}  alt="A scenic landscape"
            />
            <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-[20%] w-[25%] h-[70%] bg-green-200 rounded-lg bg-transparent overflow-hidden"></div>
            <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-[50%] w-[25%] h-[70%] bg-green-200 rounded-lg bg-transparent overflow-hidden"></div>
            <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-[80%] w-[25%] h-[70%] bg-green-200 rounded-lg bg-transparent overflow-hidden"></div>
          </div>
          <div className="cta" style={{ backgroundColor: btnColor }}>
            {/* <span> */}
            {btnText}
            {/* </span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvertedCard;
