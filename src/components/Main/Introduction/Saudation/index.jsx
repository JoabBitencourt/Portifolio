import React from "react";
import github from "./img/GithubIcon.jsx"
import GithubIcon from "./img/GithubIcon.jsx";
import LinkedinIcon from "./img/LinkedinIcon.jsx";

export default function Saudation() {
  return (
    <div className="grid-row-4 introduction__saudation grid gap-3 align-center justify-center my-28">
      <div className="introduction__saudation__clap w-28 rounded-lg center">
        <span>🖐️Saudações!</span>
      </div>
      <div className="introduction__saudation__name">
        <span className="text-6xl font-bold">Joab A. Bitencourt</span>
      </div>
      <div className="introduction__saudation__description">
        <span>Outsystems Full Stack · Front-end developer</span>
      </div>
      <div className="introduction__saudation__icons flex ">
        <LinkedinIcon />
        <GithubIcon />
      </div>
    </div>
  );
}
