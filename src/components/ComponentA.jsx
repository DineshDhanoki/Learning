import React from 'react'
import {Information} from './src/App'

const ComponentA = () => {
  return (
    <div>
      <Data.Consumer>
        {(naam) => {
            return <h1>My name is: {naam}</h1>
        }}
      </Data.Consumer>
    </div>
  )
}

export default ComponentA
