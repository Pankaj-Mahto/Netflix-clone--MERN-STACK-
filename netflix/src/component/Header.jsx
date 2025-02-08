import React from "react";

const Header = () => {
  return (
    <div className="flex absolute w-[100%] items-center justify-between px-6 bg-gradient-to-b from-black z-10">
      <img
        className="w-50 pt-3"
        src="/public/Netflix_2015_logo.svg.png"
        alt="netflix logo"
      />
      <div className="flex items-center ">
        <h1 className="text-lg font-medium text-white">Pankaj Mahto</h1>
        <div className="ml-4">
          <button className="bg-red-800 text-white px-4 py-2">Logout</button>
          <button className="bg-red-800 text-white px-4 py-2 ml-2">Search Movie</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
