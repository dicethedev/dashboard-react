
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import List from './pages/list/List'
import Single from './pages/single/Single'
import NewPage from './pages/newPage/NewPage'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import { userInputs, productInputs } from './formSource'
import './style/dark.scss'
import { useContext } from 'react'
import { DarkModeContext } from './context/darkModeContext'


function App() {

  // const [dark, setDark] =  useState(false)

  const {darkMode} = useContext(DarkModeContext)

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>} />
            <Route path="login" element={<Login />} />

              <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              {/* inputs and title props are passed to NewPage */}
              <Route path="new" element={<NewPage inputs={userInputs} title="Add New User"/>} />
              </Route>

            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<NewPage inputs={productInputs} title="Add New Product"/>} />
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
