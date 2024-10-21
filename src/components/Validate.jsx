import React from 'react'
import { useState } from 'react'
import './../index-8.css' 

function Validate() {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [errorUserName, setErrorUserName] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('')

    const [userColor, setUserColor] = useState('')
    const [emailColor, setEmailColor] = useState('')
    const [passwordColor, setPasswordColor] = useState('')
    const [confirmPasswordColor, setConfirmPasswordColor] = useState('')


    function validate(e) {
        e.preventDefault()

        if(userName.length >= 8) {
            setErrorUserName('')
            setUserColor('green') }
            else {
            setErrorUserName('Username must be 8 characters or more than 8 characters long..')
            setUserColor('red')
            }

        if(email.includes('@gmail.com')) {
            setErrorEmail('')
            setEmailColor('green') }
            else {
            setErrorEmail('Email must have @gmail.com')
            setEmailColor('red')
            }

        if(password.length >= 8) {
            setErrorPassword('')
            setPasswordColor('green') }
            else {
            setErrorPassword('Password must be 8 characters or more than 8 characters long..')
            setPasswordColor('red')
            }

        if(password != '' && password == confirmPassword) {
            setErrorConfirmPassword('')
            setConfirmPasswordColor('green') }
            else {
            setErrorConfirmPassword("Password didn't match")
            setConfirmPasswordColor('red')
            }
        }

  return (
    <>
      <div className="cards">
        <div className="cards-image"></div>

        <form>
            <input type="text" 
            placeholder='Name' 
            value={userName} 
            onChange={(e) => setUserName(e.target.value)} 
            style={{borderColor: userColor}}/>
            <p className="error">{errorUserName}</p>

            <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} style={{borderColor: emailColor}}/>
            <p className="error">{errorEmail}</p>

            <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} style={{borderColor: passwordColor}}/>
            <p className="error">{errorPassword}</p>

            <input type="password" placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} style={{borderColor: confirmPasswordColor}}/>
            <p className="error">{errorConfirmPassword}</p>

            <button className="submit-btn" onClick={validate}>Submit</button>

        </form>
      </div>
    </>
  )
}


export default Validate
