import LetsTalkButton from "@/components/LetsTalkButton";
import SectionTitle from "@/components/SectionTitle";
import React from "react";
import { FaRegPaperPlane } from "react-icons/fa";
import { PiCopySimple } from "react-icons/pi";
import { AiOutlineArrowUp } from "react-icons/ai";

export default function Contacts() {
  function myFunction() {
    navigator.clipboard.writeText("joabbitencourt8@gmail.com");

    alert("Texto copiado");
  }

  return (
    <section
      id="contact"
      className="contacts flex flex-col justify-center my-20 items-center"
    >
      <SectionTitle>📮Contatos</SectionTitle>
      <h2 className="text-6xl font-bold my-10 text-center">Vamos Conversar</h2>

      <div className="contacts__contatent flex gap-20 items-center flex-col md:flex-row">
        <LetsTalkButton />
        <div className="contacts__email flex flex-col items-center">
          <FaRegPaperPlane />
          <span>E-mail</span>
          <span id="myInput">joabbitencourt8@gmail.com</span>
          <button onClick={myFunction}><PiCopySimple /></button>
          
        </div>
      </div>
      <a
        href="#home"
        className="flex items-center my-20 text-violet hover:neutral-200"
      >
        {" "}
        Voltar ao topo <AiOutlineArrowUp />{" "}
      </a>
    </section>
  );
}
