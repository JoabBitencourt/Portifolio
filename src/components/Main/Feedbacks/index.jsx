import SectionTitle from "@/components/SectionTitle";
import React from "react";

import { PiQuotesDuotone } from "react-icons/pi";
import FeedbackCard from "./Feedback";

export default function Feedbacks() {
  return (
    <section id="feedback" className="feedbacks my-20 md:w-10/12 flex flex-col items-center md:items-start ">
      <SectionTitle>💭Recomentações</SectionTitle>
      <h2 className="text-6xl my-5 font-bold text-center md:text-left">Em depoimentos</h2>

      <div className="feedbacks__cards flex flex-wrap gap-10 w-full justify-around">
        <FeedbackCard
          message="Destacamos que o colaborador possui excelência em capacidade
            criativa, aprendizado ativo, qualidade e orientação para resultados.
            No geral estamos muito satisfeitos com seu desempenho, é um
            profissional que tem grande potencial de crescimento seja no PTI ou
            qualquer outra empresa"
          img="./impulseUp.png"
          name="Willbur, Larissa e Valéria"
          position="Gestor e liderança imediata"
        />
        <FeedbackCard
          message="Parabéns por ser essa pessoa boa e que sempre está disposto a
          ajudar, ser resiliente e proativo, e por evoluir rapidamente
          continue assim que você vai muito longe ainda!!!"
          img="./impulseUp.png"
          name="Diego Oliveira"
          position="Lider técnico"
        />

        <FeedbackCard
        message="Demonstra estar sempre em busca de novas soluções, sempre trazendo
        novas informações para a equipe e sempre disponível para auxiliar os
        colegas com dificuldade."
        img="./impulseUp.png"
        name="Christian Carvalho"
        position="Colega de equipe" />

      </div>
    </section>
  );
}
