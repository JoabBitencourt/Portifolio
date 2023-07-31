import React from "react";
import { BsWhatsapp } from "react-icons/bs";

export default function LetsTalkButton() {
  return (
    <button className="flex gap-2 introduction__contact__button rounded-3xl h-12 justify-center items-center">
      <BsWhatsapp
        style={{ color: "green", width: "1.3rem", height: "1.3rem" }}
      />{" "}
      Vamos Conversar
    </button>
  );
}
