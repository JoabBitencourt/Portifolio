import React from 'react'
import Saudation from './Saudation'
import Avatar from './Avatar'
import Contact from './Contact'

export default function Introduction() {
  return (
    // grid grid-cols-3 w-10/12 place-self-center gap-x-10 mt-5
    <section id="home" className='introduction flex flex-col items-center md:grid md:grid-cols-3 md:gap-x-10 md:mt-12 '> 
      <Saudation />
      <Avatar />
      <Contact />
    </section>
  )
}
