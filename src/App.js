
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import List from './pages/list/List'
import Single from './pages/single/Single'
import NewPage from './pages/newPage/NewPage'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { userInputs, productInputs } from './formSource'
import './style/dark.scss'
import { useContext } from 'react'
import { DarkModeContext } from './context/darkModeContext'
import { AuthContext } from './context/AuthContext'


function App() {

  // const [dark, setDark] =  useState(false)

  const {darkMode} = useContext(DarkModeContext)

  const { currentUser } = useContext(AuthContext)

  //Protecting the route path of the current links ======================
  // const currentUser = false;

  const RequireAuth = ({children}) => {
    return currentUser ? (children) : <Navigate to="/login"/>;
  };
  //======================The End of the Protecting Fuction ==============

   console.log(currentUser)


  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
              <Route path="login" element={<Login />} />

            <Route index element={
            <RequireAuth>
              <Home/>
              </RequireAuth>
               } 
               />
            {/* <Route path="login" element={<Login />} /> */}

              <Route path="users">
              <Route index element={
              <RequireAuth>
              <List /> 
              </RequireAuth>
                } 
                />


              <Route path=":userId" element={
              <RequireAuth>
              <Single /> 
              </RequireAuth>
                } 
                />
              {/* inputs and title props are passed to NewPage */}
              <Route path="new" element={
                <RequireAuth>
              <NewPage inputs={userInputs} title="Add New User"/> 
              </RequireAuth>
                }
                 />
              </Route>

            <Route path="products">
              <Route index element={
                <RequireAuth>
              <List /> 
              </RequireAuth>
               } 
               />

              <Route path=":productId" element={
              <RequireAuth>
                <Single />
              </RequireAuth>
               } 
               />

              <Route path="new" element={
              <RequireAuth><NewPage inputs={productInputs} title="Add New Product"/>
              </RequireAuth>
              }
             />
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
