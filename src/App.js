import React from 'react'
import Friendship from './components/Count'
import Movieshow from './components/Movieticket'
import Moviechange from './components/Movie'
import Name from './components/Name'
import Title from './components/Title'

export default function App() {
  return (
    <div>
      <Friendship />
      <Movieshow />
      <Moviechange />
      <Name />
      <Title />
    </div>
  )
}
