import React from "react";

export default function MyCarrerCard() {
  return (
    <div className="myCarrerCard p-5 flex flex-col w-full border rounded-2xl border-violet/60 hover:bg-violet-600/10">
      <h2 className="text-xl font-bold mb-2">
        Técnico I · Parque Tecnologico de Itaipu
      </h2>
  
        <br />
        <ul className="list-disc ml-6">
          <li>
            Desenvolvimento e manutenção de sistemas em Outsystems 11(React,
            Mobile e traditional)
          </li>
          <li>Auxílio nas decisões técnicas sobre arquitetura Outsystems</li>
          <li>
            Reuniões de levantamento e análise de requisitos com cliente
            Gerenciamento de atividades com Scrum e Kanban(Jira e trello)
          </li>
          <li>Documentação de sistemas(Confluence)</li>
          <li>Planejar, monitorar e reportar o andamento de projetos</li>
          <li>Aplicação de conhecimentos HTML, CSS e JavaScript</li>
          <li>Treinamento de novos funcionários com a Ferramenta Outsystems</li>
        </ul>

      <div className="myCarrerCard__footer flex justify-between text-violet hover:text-neutral-50 mt-5">
        <span className="font-bold ">2 anos e 3 meses</span>
        <span>Abril/2021 · Atualmente</span>
      </div>
    </div>
  );
}
