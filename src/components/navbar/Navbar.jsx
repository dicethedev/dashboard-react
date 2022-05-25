
import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ListIcon from '@mui/icons-material/List';
import { useContext } from 'react'
import { DarkModeContext } from '../../context/darkModeContext'

const Navbar = () => {

  const { dispatch } = useContext(DarkModeContext)

  return (
    <div className="navbar">
        <div className="wrapper">
          <div className="search">
            <input type="text" placeholder="Search..." />
            <SearchIcon />
          </div>
          <div className="items">
            <div className="item">
              <LanguageIcon className="icon" />
              English
            </div>
             <div className="item">
              <DarkModeIcon className="icon" 
              onClick={() => dispatch({ type:"TOGGLE" })} 
              />
            </div>
             <div className="item">
              <FullscreenExitIcon className="icon" />
            </div>
             <div className="item">
              <NotificationsNoneIcon className="icon" />
              {/* Notifications message */}
              <div className="counter">1</div>
            </div>
              <div className="item">
              <ChatBubbleIcon className="icon" />
              <div className="counter">2</div>
            </div>

              <div className="item">
              <ListIcon className="icon" />
            </div>

            <div className="item">
              <img src="https://images.pexels.com/photos/819497/pexels-photo-819497.jpeg?cs=srgb&dl=pexels-lukas-lafayete-819497.jpg&fm=jpg" alt="" className="avatar" />
            </div>
           </div>
        </div>
    </div>
  )
}

export default Navbar