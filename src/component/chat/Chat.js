import React,{useContext} from 'react'
import {UserContext} from "../../userContext"
import {NavLink} from "react-router-dom"


function Chat() {
  const {user, setUser} = useContext(UserContext)



  return (
    <div>
      <center>
      <h1>chat {JSON.stringify(user)}</h1>
      <NavLink to="/">
       <button >go to home</button>
       </NavLink>
      </center>
     
    </div>
  )
}

export default Chat
