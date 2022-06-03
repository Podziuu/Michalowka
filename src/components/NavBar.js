import React from "react";

import logo from "../assets/logo-michalowka.png";

const NavBar = () => {
  return (
    <nav className="w-full bg-[#E9C46A] flex items-center text-white px-8 py-2 fixed h-24 z-10">
      <a href="#home" className="flex items-center">
        <img className="w-20" src={logo} />
      </a>
      <ul className="flex justify-center w-full text-xl">
        <li className="mx-4 cursor-pointer">
          <a href="#home">Strona Główna</a>
        </li>
        <li className="mx-4 cursor-pointer">
          <a href="#onas">O nas</a>
        </li>
        <li className="mx-4 cursor-pointer">
          <a href="#oferta">Oferta</a>
        </li>
        <li className="mx-4 cursor-pointer">
          <a href="#kontakt">Kontakt</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
