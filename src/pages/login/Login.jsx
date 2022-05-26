import { useContext, useState } from 'react'
import './login.scss'
import { signInWithEmailAndPassword } from "firebase/auth";
import {  auth } from '../../firebaseinit'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext'

const Login = () => {
  const [error, setError] = useState(false)
   const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const {dispatch} = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault();

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    dispatch({type: 'LOGIN', payload:user})
    // console.log(user)
    //======== This will navigate back to the home page of the Admin Panel
    navigate("/");

  })
  .catch((error) => {
     setError(true)
  });

  }
  
  return (
    <div className="login">
       <form onSubmit={handleLogin}>
         <input type="eamil" placeholder="Email" 
         onChange={e=>setEmail(e.target.value)} 
         />
         <input type="password" placeholder="Password"  
         onChange={e=>setPassword(e.target.value)} 
         />
         <button type="submit">Login</button>
         {/* Condition to show this message */}
        { error && <span>Wrong email or password!</span>}
       </form>
    </div>
  )
}

export default Login
