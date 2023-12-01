// import React from 'react'
import {useContext ,useState} from 'react'
import UserContext  from '../contextApi/UserContext'

function Login() {
    const [username ,setUsername ] = useState("")
    const [password ,setPassword ] = useState("")

    const {setUser} = useContext(UserContext)

    const handleSubmit =(e)=>{
        e.preventDefault()
        setUser({username , password})
    }
  return (
    <div>
        <h1>Login</h1>
        <label htmlFor="name">Nmae:</label>
        <input 
        type="text"
        value={username}
        placeholder='username'
        onChange={(e)=>setUsername(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input 
        type="password"
        value={password}
        placeholder='username'
        onChange={(e)=>setPassword(e.target.value)}
         />
        <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login