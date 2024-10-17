import React from 'react'
import './../index-4.css'
import { useState } from 'react'

function ToggleButtonColor() {
    const [backgroundColor, setBackgroundColor] = useState('white')
    const [textColor, setTextColor] = useState('#1b1b1b')
    const [buttonStyle, setButtonStyle] = useState('white')

    function handleSubmit() {
        setBackgroundColor(backgroundColor === 'white' ? '#1b1b1b' : 'white')
        setTextColor(textColor === '#1b1b1b' ? '#ffa31a' : '#1b1b1b')
        setButtonStyle(buttonStyle === 'white' ? '#1b1b1b' : 'white')
    }


  return (
    <>
      <section style={{backgroundColor, color: textColor}}>
        <button onClick={handleSubmit} style={{buttonStyle, color: textColor, border: `2px solid ${textColor}`}}>{backgroundColor === '#1b1b1b' ? 'Black Theme' : 'White Theme'}</button>
        <section className='content'>
        <h1>Welcome to the<br/>Real World</h1>
        </section>
      </section>
    </>
  )
}

export default ToggleButtonColor
