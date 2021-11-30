import React,{useContext} from 'react'
import {UserContext} from "../../userContext"
import {NavLink} from "react-router-dom"
import RoomList from './RoomList'
import io from "socket.io-client"

let socket;
function Home() {

const {user, setUser} = useContext(UserContext)
const [room, setRoom] = React.useState(" ")

const rooms =[
  {
    name:"room1",
    _id:"456"
},

{
  name:"room2",
  _id:123
}

]

const setAspeter =()=>{
  const peter={
    name:"peter",
    email:"peter@gmail.com",
    password:"456"
  }
  setUser(peter)

}

const setAsGiddy =()=>{
  const giddy={
    name:"giddy",
    email:"giddy@gmail.com",
    password:"777"
  }
  setUser(giddy)
}
const ENDPOINT = "localhost:5000"
React.useEffect(()=>{

  socket = io(ENDPOINT)
  return ()=>{
    socket.emit('disconnect');
    socket.off()
  }


},[ENDPOINT])

const handlingSubmit = (e)=>{
    e.preventDefault()
   socket.emit("create-room", room)
   console.log(room)
   setRoom("")
}

  return (
    <div>
      <center>
<div className="row">
  <div className="col s12 m6">
    <div className="card blue-grey darken-1">
      <div className="card-content white-text">
        <span className="card-title">Welcome {user ? user.name : ""}</span>
     

     <form onSubmit={handlingSubmit}>
  <div className="row">
    <div className="input-field col s12">
      <input placeholer="enter a room name" id="room" type="text" className="validate"
      value={room}
      onChange={(e)=>{
        setRoom(e.target.value)
      }}
      />
      <label htmlFor="room">room</label>
    </div>
  </div>
  <button className="btn">create room</button>
</form>

      </div>
      <div className="card-action">
        <a href="#" onClick={setAspeter}>set as peter</a>
        <a href="#" onClick={setAsGiddy}>set as gddy</a>
      </div>
    </div>
  </div>
  
  <div className="col s6 m5 offset-1">
    <RoomList rooms ={rooms}/>
    </div>
</div>

        
       
       <NavLink to="/chat">
       <button >go to chat</button>
       </NavLink>
      
      </center>
      
    </div>
  )
}

export default Home
