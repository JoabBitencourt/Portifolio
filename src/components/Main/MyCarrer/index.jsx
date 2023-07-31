import React from "react";
import MyCarrerCard from "./MyCarrerCard";
import SectionTitle from "@/components/SectionTitle";

export default function MyCarrer() {
  return (
    <section id="carrer" className="myCarrer flex flex-col items-center justify-center">
      <SectionTitle>💼Carreira</SectionTitle>
      <h2 className="text-6xl font-bold mt-5">Trajetória até aqui</h2>
      <div className="myCarrer__content  my-20 w-10/12 md:grid md:grid-cols-2 gap-6">
      <div className="myCarrer__profetional flex flex-col items-center gap-y-5">
        <h3 className="text-3xl font-bold">Area Profissional</h3>
        <MyCarrerCard />
      </div>
      <div className="myCarrer__educational flex flex-col items-center gap-y-5">
        <h3 className="text-3xl font-bold mt-5 md:mt-0">Area Educacional</h3>

        <div className="myCarrerCard p-5 flex flex-col w-full border rounded-2xl border-violet/60 hover:bg-violet-600/10">
          <h2 className="text-xl font-bold mb-2">
            Pós em Arquitetura de Software · Prominas
          </h2>
          <ul className="list-disc ml-6">
            <li>Projeto e Desenvolvimento de Arquiteturas</li>
            <li>Arquitetura de Software Aplicada a Diversas Plataformas</li>
            <li>DevSecOps e o Ciclo Contínuo das Aplicações</li>
            <li>Estudo sobre Qualidade, Testes e Documentação Arquitetural</li>
            <li>Metodologias Ágeis Aplicadas à Elaboração de Software</li>
          </ul>
          <div className="myCarrerCard__footer flex justify-between text-violet  mt-5">
            <span className="font-bold ">6 meses</span>
            <span>julho/2023 · Atualmente</span>
          </div>
        </div>
        <div className="myCarrerCard p-5 flex flex-col w-full border rounded-2xl border-violet/60 hover:bg-violet-600/10">
          <h2 className="text-xl font-bold mb-2">
            Cursos de aprendizagem · Alura
          </h2>
          <ul>
            <li>
              
              Realizei diversos cursos na plataforma Alura, referência em
              educação online na área de tecnologia e desenvolvimento. Os cursos
              abordaram temas essenciais para o aprimoramento das habilidades
              técnicas e de comunicação, proporcionando um apredizado prático e
              atualizado.
              
            </li>
            <li className="my-2">Para ver os cursos conclídos<a className="mx-5 italic font-bold text-violet-400 hover:text-slate-300 " href="https://cursos.alura.com.br/user/joab-bitencourt/fullCertificate/77fe63562f7f2e8cd65c52dfbfe48124">
                Clique aqui
              </a></li>
          </ul>
          <div className="myCarrerCard__footer flex justify-between text-violet hover:text-neutral-50 mt-5">
            <span className="font-bold ">+2 anos</span>
            <span>Abril/2021 · Atualmente</span>
          </div>
        </div>
        <div className="myCarrerCard p-5 flex flex-col w-full border rounded-2xl border-violet/60 hover:bg-violet-600/10">
          <h2 className="text-xl font-bold mb-2">
            Superior Técnologo em Análise e Desenvolvimento de Sistemas ·
            Anhanguera
          </h2>
          <ul>
            <li>
              Reforcei e avancei sobre os conceitos e bases da programação,
              banco de dados, análise e projeto de sistemas, engenharia de
              software e sistemas operacionais e redes.
            </li>
          </ul>
          <div className="myCarrerCard__footer flex justify-between text-violet hover:text-neutral-50 mt-5">
            <span className="font-bold ">2 anos e 6 meses</span>
            <span>Março/2021 · junho/2023</span>
          </div>
        </div>
        <div className="myCarrerCard p-5 flex flex-col w-full border rounded-2xl border-violet/60 hover:bg-violet-600/10">
          <h2 className="text-xl font-bold mb-2">
            Ensino Médio Técnico em Informatica · IFPR - Foz do Iguaçu
          </h2>
          <ul>
            <li>
              Aprendi a base sobre desenvolvimento, banco de dados, análise e
              projetos de sistemas, básico de sistemas operacionais e redes.
              Assim como o desenvolvimento full-stack com php.
            </li>
          </ul>
          <div className="myCarrerCard__footer flex justify-between text-violet hover:text-neutral-50 mt-5">
            <span className="font-bold ">4 anos</span>
            <span>Fevereiro/2016 · Dezembro/2019</span>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
