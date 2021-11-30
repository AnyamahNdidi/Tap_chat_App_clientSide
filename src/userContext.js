import react,{createContext} from "react"

export const UserContext = createContext(null)

export const UserProvider = ({children})=>{
  const [user, setUser] = react.useState(null)

  return (
    <UserContext.Provider value={{user, setUser}}>
    {children}
    </UserContext.Provider>
  )
}