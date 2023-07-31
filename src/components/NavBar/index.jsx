import React from "react";
import { slide as Menu } from "react-burger-menu";
export default function NavBar() {
  return (
    <header>
      <div className="menu__cellphone block md:hidden">
        <Menu className="">
          <div className="logo">
            <img src="myIcon.svg" alt="" width="50px" />
          </div>
          <ul className="flex justify-evenly">
            <li className="ml-5">
              <a href="#home">Home</a>
            </li>
            <li className="ml-5">
              <a href="#about-me">Sobre mim</a>
            </li>
            <li className="ml-5">
              <a href="#portifolio">Portifólio</a>
            </li>
            <li className="ml-5">
              <a href="#knowledge">Skills</a>
            </li>
            <li className="ml-5">
              <a href="#carrer">Carreira</a>
            </li>
            <li className="ml-5">
              <a href="#feedback">Recomentações</a>
            </li>
            <li className="ml-5">
              <a href="#contact">Contato</a>
            </li>
          </ul>
        </Menu>
      </div>
      <nav className="menu__pc md:flex mt-2 mx-12 justify-between px-20 py-5 menu rounded-lg hidden fixed w-11/12 bg-violet/10">
        <div className="logo">
          <img src="myIcon.svg" alt="" width="50px" />
        </div>
        <div className="list ">
          <ul className="flex justify-evenly">
            <li className="ml-5">
              <a href="#home">Home</a>
            </li>
            <li className="ml-5">
              <a href="#about-me">Sobre mim</a>
            </li>
            <li className="ml-5">
              <a href="#portifolio">Portifólio</a>
            </li>
            <li className="ml-5">
              <a href="#knowledge">Skills</a>
            </li>
            <li className="ml-5">
              <a href="#carrer">Carreira</a>
            </li>
            <li className="ml-5">
              <a href="#feedback">Recomentações</a>
            </li>
            <li className="ml-5">
              <a href="#contact">Contato</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
