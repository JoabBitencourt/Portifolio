import React from 'react'
import { PiQuotesDuotone } from "react-icons/pi";

export default function FeedbackCard({message, img, name, position}) {
  return (
    <div className="feedbacks__card justify-between flex flex-col p-5 border border-violet-900 w-96 rounded-2xl">
          <PiQuotesDuotone />
          <p>
            {message}
          </p>
          <div className="flex">
            <img
              src={img}
              width="80px"
              height="80px"
              className="bg-white rounded-full"
            />
            <div className="flex flex-col justify-around">
              <span className='font-bold text-lg ml-2'>{name}</span>
              <span className='font-bold text-xl text-violet ml-2'>{position}</span>
            </div>
          </div>
        </div>
  )
}
