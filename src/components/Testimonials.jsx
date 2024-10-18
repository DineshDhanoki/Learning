import React from 'react'
import { useState } from 'react'
import './../index-6.css' 

function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const testimonials = [
        {
            quote: "The only thing we have to fear is fear itself",
            author: "Franklin D. Roosevelt"
        },
        {
            quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
            author: "Nelson Mandela"
        },
        {
            quote: "You must be the change you wish to see in the world.",
            author: "Mahatma Gandhi"
        },
        {
            quote: "It is better to have loved and lost than never to have loved at all.",
            author: " Alfred Lord Tennyson"
        },
        {
            quote: "The greatest happiness in life is knowing you have someone to protect.",
            author: "Unknown"
        }   
    ]

const handlePrevClick = () => {
    setCurrentIndex((currentIndex + testimonials.length - 1) % testimonials.length)
}

const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length)
}

  return (
    <div className='testimonials'>
    <div className="testimonials-quote">{testimonials[currentIndex].quote}</div>
    <div className="testimonials-author">{testimonials[currentIndex].author}</div>
    <testimonials className="nav">
    <button onClick={handlePrevClick}>Previous</button>
    <button onClick={handleNextClick}>Next</button>
    </testimonials>
    </div>
  )
}

export default Testimonials
