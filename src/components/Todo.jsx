// import React from 'react'
// import './../index1.css'
// import { useState } from 'react'

// function generateId() {
//     return Math.floor(Math.random() * 100)
// }

// function Todo() {
//     const [todos, setTodos] = useState([])
//     const [input,setInput] = useState('')

//     const handleSubmit = () => {
//         setTodos((todos) => 
//             todos.concat({text: input, id: generateId()}))
//             setInput('')
//     }

//     const removeTodo = (id) => {
//         setTodos((todos) => todos.filter((f) => f.id !== id))
//     }

//   return (
//     <>
//     <div className="container">
//     <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder='Type Your Todo List'/>

//     <button onClick={handleSubmit}>Submit</button>

//     <ul className="todos-list">
//         {todos.map(({text,id}) => {
//             return(
//         <li key={id} className="todo">
//         <span>{text}</span>
//         <button className="close" onClick={() => removeTodo(id)}>Close/Cancel</button>
//         </li>
//         )})}
//     </ul>
//     </div>
//     </>
//   )
// }

// export default Todo

