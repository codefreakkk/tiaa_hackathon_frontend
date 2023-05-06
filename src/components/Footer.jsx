import React from "react";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-1 gradient-bg-footer">
    <div className="w-full flex sm:flex-row  justify-between items-center my-4">
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-1 w-full">
        <p className="text-white text-base text-center mx-2 cursor-pointer font2">Actors</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer font2">Movies</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer font2">Directors</p>
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-2">
      <p className="text-white text-sm text-center font2">Come join us and hear for the unexpected miracle</p>
      <p className="text-white text-sm text-center font-medium mt-2 font2">Team1 - TIAA</p>
    </div>
  </div>
);
export default Footer;