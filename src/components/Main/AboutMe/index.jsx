import SectionTitle from "@/components/SectionTitle";
import React from "react";

export default function AboutMe() {
  return (
    <section id="about-me" className="AboutMe flex justify-center flex-col w-10/12 items-center">
      <SectionTitle>
        🤔Sobre mim
      </SectionTitle>
      <div className="AboutMe__container flex flex-col w-10/12 items-center md:grid md:grid-cols-12">
      <div  className="AboutMe__img md:col-span-5 ">
        <div className="AboutMe__img__me w-50 h-50"></div>
      </div>

      <div className="AbouMe__text  flex flex-col gap-y-8 justify-around md:col-span-7">  
        <div className="AboutMe__text__name">
          <h2 className="text-7xl font-bold text-center">Joab Alexander Bitencourt</h2>
        </div>
        <div className="AboutMe__text__synopsis text-center ">
          <p>👋 Me chamo Joab. Prazer! </p>
          <p>
            👨‍💻 Há mais de 2 anos desenvolvendo e dando manutenção em sistemas em outsystems, desde a parte de levantamento de requisitos até a entrega e a atualização da documentação de legados.
          </p>{" "}
          <p>
            🎓 Graduado em Análise e Desenvolvimento de Sistemas pela Faculdade Anhanguera Educacional{" "}
          </p>
          <p>
            💡 Interesses em desenvolvimento Outsystems, Front-end com React, backend com java
          </p>
          <p>🚀 Evoluindo mais a cada dia, no momento estou estudando desenvolvimento de API's com Java e spring para back-end</p>
        </div>
      </div>
      </div>
    </section>
  );
}
