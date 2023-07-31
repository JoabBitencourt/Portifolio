import React from "react";

export default function Experience() {
  return (
    <section  className="Experience flex flex-col items-center">
      
      <div className="Experience__cads flex flex-col items-center gap-y-5 md:flex-row">
        <div className="flex flex-col items-center Experience__card ">
          <div className="icon"></div>
          <span>Desenvolvedor Outsystems</span>
          <h1>Full Stack</h1>
        </div>
        <div className="flex flex-col items-center Experience__card">
          <div className="icon"></div>
          <span>+2 anos de</span>
          <h1>Experiencia</h1>
        </div>
        <div className="flex flex-col items-center Experience__card">
          <div className="icon"></div>
          <span>Formação</span>
          <h1>T.A.D.S</h1>
        </div>
      </div>

      <div className="flex flex-wrap bg-violet/20 rounded-2xl mt-2 w-10/12 justify-center gap-y-2 py-5 md:flex-nowrap md:w-full md:justify-around">
        <div className="Experince__bar__especiality">
          <span>Prof. Outsystems</span>
          <h1>Certificado</h1>
        </div>
        <div className="Experince__bar__especiality  ">
          <span>Dezenas de projetos e</span>
          <h1>Experiências</h1>
        </div>
        <div className="Experince__bar__especiality  ">
          <span>Desenvolvedor e Freelancer</span>
          <h1>Front-end</h1>
        </div>
      </div>
    </section>
  );
}
