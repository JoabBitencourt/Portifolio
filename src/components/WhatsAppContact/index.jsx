import React from 'react'
import { BsWhatsapp } from "react-icons/bs";

export default function WhatsAppContact() {
  return (
    <a 
        href="https://api.whatsapp.com/send?phone=5545991034834&text=Ol%C3%A1!"
        target="_blank"
        className='flex items-center border rounded-3xl px-5 text-violet border-violet hover:text-neutral-100 hover:border-neutral-100'
      >
        <BsWhatsapp
          className='text-inherit w-8 mr-2'
        />
        Vamos Conversar
      </a>
  )
}
