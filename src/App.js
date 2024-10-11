import React from 'react'
import Friendship from './components/Count'
import Movieshow from './components/Movieticket'
import Moviechange from './components/Movie'
import Name from './components/Name'

export default function App() {
  return (
    <div>
      <Friendship />
      <Movieshow />
      <Moviechange />
      <Name />
    </div>
  )
}
