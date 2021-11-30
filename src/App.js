import logo from './logo.svg';
import {UserProvider} from "./userContext"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from './component/home/Home';
import Chat from "./component/chat/Chat";
import NavBar from "./component/layout/NavBar"


function App() {
  return (
 
      <UserProvider>
        <div>
          <Router>
            <NavBar/>
            <Routes>
          <Route path="" element={<Home/>}/>
          <Route path="chat" element={<Chat/>}/>
          </Routes>
          </Router>
        </div>
      </UserProvider>
  
  );
}

export default App;
