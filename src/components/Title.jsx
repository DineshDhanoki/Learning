import React, {useState, useEffect} from 'react'

const Title = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        async function getData() {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            const data = await response.json()
            if (data && data.length) setData(data)
        }

        getData()
    }, [])

  return (
    <div>
      <ul>
        {data.map((e) => (
            <li key={Math.random()}>{e.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Title
