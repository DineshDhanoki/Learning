import React,{useState} from 'react'


const Movieshow = () => {
    const [movie, setMovie] = useState({title:'ABCD', ratings:7,})

    const handleClick = () => {
        setMovie({...movie, ratings:6})
    }

  return (
    <div>
      <h1>{movie.title}</h1>
      <h2>{movie.ratings}</h2>
      <button onClick={handleClick}>Change Ratings</button>
    </div>
  )
} 

export default Movieshow
