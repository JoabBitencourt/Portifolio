import React from "react";
import SectionTitle from "@/components/SectionTitle/index.jsx";
import {
  TiSocialLinkedinCircular,
  TiSocialGithubCircular,
} from "react-icons/ti";
import { AiFillGithub } from "react-icons/ai";

import { AiFillLinkedin } from "react-icons";

export default function Saudation() {
  return (
    // grid-row-4 introduction__saudation grid gap-3 align-center justify-center my-28
    <div className="flex flex-col items-center mt-20">
      <SectionTitle>🖐️Saudações!</SectionTitle>
      <div className="introduction__saudation__name text-center">
        <span className="text-6xl font-bold">Joab A. Bitencourt</span>
      </div>
      <div className="introduction__saudation__description text-center">
        <span>Outsystems Full Stack · Front-end developer</span>
      </div>
      <div className="introduction__saudation__icons flex ">
        {/* <AiFillLinkedin /> */}
        <a
          href="https://www.linkedin.com/in/joab-alexander-bitencourt-52050b215/"
          title="Acessar linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TiSocialLinkedinCircular />
        </a>
        <a
          href="https://github.com/JoabBitencourt/"
          title="Acessar github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TiSocialGithubCircular />
        </a>
      </div>
    </div>
  );
}
