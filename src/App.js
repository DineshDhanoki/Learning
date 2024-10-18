import React from 'react'
import Accordion from './components/Accordion'
import { accordionData } from "./utils/content"; 
// import Testimonials from './components/Testimonials'
// import HiddenSearchBar from './components/HiddenSearchBar'
// import ToggleButtonColor from './components/ToggleButtonColor'
// import Calculator from './components/Calculator'
// import MealAPI from './components/MealAPI'
// import Counter from './components/Counter'
// import Todo from './components/Todo'

const App = () => {

  return (
    <div>
      <div className="accordion">{accordionData.map(({ title, content }) => (
      <Accordion title={title} content={content} />
      ))}
    

    </div>
    </div>
  )
}

export default App
 