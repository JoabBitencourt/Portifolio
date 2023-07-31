import React from "react";
import DownloadIcon from "./img/DownloadIcon";
import { BiSolidDownload } from "react-icons/bi";
import WhatsAppContact from "@/components/WhatsAppContact";

export default function Contact() {
  return (
    // flex flex-col justify-center items-center
    <div className="introduction__contact flex flex-col justify-center items-center">
      <a
        href="JoabCV.pdf"
        download
        className="flex gap mb-5 items-center text-violet text-xl hover:text-neutral-100"
      >
        Baixar Currículo <BiSolidDownload className="w-8 text-inherit" />
      </a>
      <WhatsAppContact />
    </div>
  );
}
