import { useEffect, createContext, useReducer } from "react"
import AuthReducer from "./AuthReducer"

const INITIAL_STATE = {
     // currentUser: null,
     currentUser: JSON.parse(localStorage.getItem('user')) || null,
}

export const AuthContext =  createContext(INITIAL_STATE)

export const AuthContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);


//This will store the email and password of the admin user into the browser localstorage
//The JSON.stringify is use here to store the user info into a string not object
  useEffect(() => {
       localStorage.setItem("user", JSON.stringify(state.currentUser))
  }, [state.currentUser])

  return (
       <AuthContext.Provider value={{currentUser: state.currentUser, dispatch }}>
            {children}
       </AuthContext.Provider>
  )
}