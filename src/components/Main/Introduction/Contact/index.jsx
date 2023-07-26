import React from 'react'
import DownloadIcon from './img/DownloadIcon'
import WhatsAppIcon from './img/WhatsAppIcon'

export default function Contact() {
  return (
    <div className='introduction__contact flex flex-col justify-center items-center'>
        <a href="#" className='flex gap mb-5'>Baixar Currículo <DownloadIcon/> </a>
        <button className='flex gap-2 introduction__contact__button rounded-3xl'><WhatsAppIcon /> Vamos Conversar</button>
    </div>
  )
}
