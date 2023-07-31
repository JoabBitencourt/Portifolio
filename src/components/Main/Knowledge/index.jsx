import SectionTitle from "@/components/SectionTitle";
import React from "react";
import {
  IoLogoReact,
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoGithub,
} from "react-icons/io5";
import { PiFileSqlLight } from "react-icons/pi";
import { TbBrandNextjs } from "react-icons/tb";
import { FaConfluence, FaJira } from "react-icons/fa";
import { DiScrum } from "react-icons/di"

export default function Knowledge() {
  return (
    <section id="knowledge" className="my-20 Knowledge flex flex-col items-center w-10/12">
      <SectionTitle>👨‍💻Skills · Experiências</SectionTitle>
      <h2 className="text-6xl font-bold my-10 text-center ">Tecnologias e Habilidades</h2>

      <div className="kwnoledge__daily">
        <h4 className="font-light text-2xl text-center mt-20">

          Tecnologias que utilizo no dia a dia
        </h4>
        <div className="knowledge__daily__icons flex gap-2 flex-wrap justify-center ">
          <img src="outsystemsIcon.svg" alt="Icone outsystems" title="Outsystes" />
          <IoLogoReact title="React" alt="React Icon" />
          <IoLogoJavascript title="Javascript" alt="Javascript Icon" />
          <IoLogoHtml5 title="Html5" alt="Html5 Icon" />
          <IoLogoCss3 title="Css3" alt="Css3 Icon" />
          <IoLogoGithub title="Github" alt="Github Icon" />
          <PiFileSqlLight title="Sql" alt="Sql Icon" />
          <TbBrandNextjs title="Nextjs" alt="Nextjs Icon" />
          <img src="materialUI.png" title="materialUI" alt="materialUI Icon" />
          <FaJira title="Jira" alt="Jira Icon"  />
          <FaConfluence title="Confluence" alt="Confluence Icon" />
        </div>
      </div>
    </section>
  );
}
