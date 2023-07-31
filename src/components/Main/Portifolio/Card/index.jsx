import React from "react";
import CardTags from "./Tags";
import { v4 } from "uuid";

export default function Card({card}) {
  
  return (
    <div className="Card grid grid-rows-2 p-5 border border-violet/50 hover:bg-violet/10 rounded-2xl max-h-96 max-w-xs w-80 h-96 ">
      <div className="Card__header row-span-1">
        <h2 className="text-[1.5rem] font-bold mb-2">{card.title}</h2>
        <p className="font-thin">{card.description}</p>
        <CardTags key={v4()} tags={card.tags} />
      </div>
      <div className="Card__img block w-full h-d bg-white rounded-2xl ">

      </div>
    </div>
  );
}
