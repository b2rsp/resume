import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md py-8">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold tracking-wide">Vitor Gonçalves</h1>
        <p className="text-xl text-gray-500 mt-2">Full Stack Developer</p>
        <div className="flex flex-col items-center mt-4 text-gray-600">
          <p className="text-lg">Funchal, Portugal</p>
          <p className="text-lg">vitorgoncalves57@gmail.com</p>
          <p className="text-lg">+351 965 741 329</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
