import React from 'react'
import Saudation from './Saudation'
import Avatar from './Avatar'
import Contact from './Contact'

export default function Introduction() {
  return (
    <section className='introduction grid grid-cols-3 w-10/12 place-self-center gap-x-10 mt-10	'>
      <Saudation />
      <Avatar />
      <Contact />
    </section>
  )
}
