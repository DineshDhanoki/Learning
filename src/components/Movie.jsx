import React, {useState} from 'react'

const Moviechange = () => {
    const [movies, setMovies] = useState([
        {id:1, title:'ABCD 1', ratings:8}, 
        {id:2, title:'ABCD 2', ratings:7}, 
        {id:3, title:'ABCD 3', ratings:6}
    ])

    const handleClick = () => {
        setMovies(
            movies.map((event) => (event.id === 1 ? {...movies, title:"Any Body Can Dance 1"} : event))
        )
    }


  return (
    <div>
        <ul>
      {movies.map((event) => (
        <li key={Math.random()}>{event.title}</li>
        ))}
        </ul>
        <button onClick={handleClick}>Change Movie Name</button>
    </div>
  )
}

export default Moviechange
