import SectionTitle from "@/components/SectionTitle";
import React from "react";
import PortifolioTagsFilter from "./PortifolioTagsFilter/Index";
import Card from "./Card";
import cards from "./myJson.json"
import { v4 } from "uuid";


export default function Portifolio() {
  
  return (
    <section id="portifolio" className="Portifolio w-10/12 ">
        <div className="Portifolio__header  flex my-10">
            <div className="Portifolio__header__title w-10/12">
                <SectionTitle >🔗Portifólio</SectionTitle>
                <h2 className="text-6xl font-bold mt-5">Trabalhos e projetos</h2>
            </div>
            {/* <PortifolioTagsFilter  /> */}
        </div>
        <div className="Portifolio__cards flex gap-10 justify-center flex-wrap">
          {cards.Projects.map(card=><Card key={v4()} card={card} />)}
        </div>
    </section>
  );
}
