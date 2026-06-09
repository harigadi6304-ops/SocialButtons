import React from "react";

const SocialButtons: React.FC = () => {
  return (
    <div
      className={`bg-[url(https://assets.ccbp.in/frontend/react-js/social-buttons-bg.png)] bg-no-repeat bg-center  bg-cover p-10 box-border gap-8 flex flex-col justify-center items-center h-[80%] w-[50%]`}
    >
      <h1 className="font-bold text-5xl text-white font-[roboto]">
        Social Buttons
      </h1>
      <div className="flex flex-row gap-2 justify-center items-center">
        <button className="bg-[#eab308] text-white text-sm rounded-lg px-8 py-3 box-border cursor-pointer font-serif">
          Like
        </button>
        <button className="bg-white text-[#323f4b] text-sm rounded-lg px-8 py-3 box-border cursor-pointer font-serif">
          Comment
        </button>
        <button className="bg-[#1d4ed8] text-white text-sm rounded-lg px-8 py-3 box-border cursor-pointer font-serif">
          Share
        </button>
      </div>
    </div>
  );
};

export default SocialButtons;
