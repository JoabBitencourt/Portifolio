import React from 'react'

export default function NavBar() {
  return (
    <header>
        <nav className='flex mx-12 my-5 justify-between px-20 py-5 menu rounded-lg'>
      <div className="logo">
        <span>Icone</span>
      </div>-
      <div className="list ">
        <ul className='flex justify-evenly'>
            <li className='ml-5'><a href="">Home</a></li>
            <li className='ml-5'><a href="">Sobre mim</a></li>
            <li className='ml-5'><a href="">Portifólio</a></li>
            <li className='ml-5'><a href="">Skills</a></li>
            <li className='ml-5'><a href="">Carreira</a></li>
            <li className='ml-5'><a href="">Recomentações</a></li>
            <li className='ml-5'><a href="">Contato</a></li>
        </ul>
      </div>
    </nav>
    </header>
  )
}
