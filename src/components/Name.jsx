import React, {useState} from 'react'

const Name = () => {
    const [username, setUsername] = useState('')

    const handleChange = (event) => {
        setUsername(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        alert(`You have typed: ${username}`)
        setUsername('')
    }

    
  return (
    <div>
    <h1>Form Demo</h1>
    <form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={handleChange} />
        <button>Submit</button>
    </form>
    </div>
  )
}

export default Name
