import React from 'react'
import { useState } from 'react'
import './../index-7.css' 

const Accordion = ({title,content}) => {
    const [isActive, setIsActive] = useState(false)

  return (
    <section className='accordian-cards' key={Math.random()}>
      <div className="header" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <p className='icon'>{isActive ? '_' : '+'}</p>
      </div>

      <div className="content">
        {isActive && <p className='card-info'>{content}</p>}
        </div>
    </section>
  )
}

export default Accordion
