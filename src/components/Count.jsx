import React, {useState} from 'react'

const Friendship = () => {
    const [friend, setFriend] = useState(['Diplo','Jack'])

    const Addfriend = () => {
        setFriend([...friend, 'David'])
    }

    const Removefriend = () => {
        setFriend(friend.filter((event) => event !== 'Jack'));
    }

    const Updatefriend = () => {
        setFriend(friend.map((event) => (event === 'Diplo' ? 'Diplo Dhanoki' : event)));
    }

  return (
    <div>
      {friend.map((event) => (
        <li key={Math.random()}>{event}</li>
      ))}


      <button onClick={Addfriend}>Add Friend</button>
      <button onClick={Removefriend}>Remove Friend</button>
      <button onClick={Updatefriend}>Update Friend</button>
    </div>
  )
}

export default Friendship
