import React from 'react'
import { createContext } from 'react'
import Friendship from './components/Count'
import Movieshow from './components/Movieticket'
import Moviechange from './components/Movie'
import Name from './components/Name'
import Title from './components/Title'
import ComponentA from './components/ComponentA'

export const Data = createContext()

const Information = () => {
  const naam = "DIPLO"
}

export default function App() {
  return (

    <div>
      <Data.Provider value={naam}>
      <ComponentA />
      </Data.Provider>
      <Friendship />
      <Movieshow />
      <Moviechange />
      <Name />
      <Title />
    </div>
  )
}
