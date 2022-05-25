import './sidebar.scss'
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import PersonIcon from '@mui/icons-material/Person';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import PsychologyIcon from '@mui/icons-material/Psychology';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import { DarkModeContext } from '../../context/darkModeContext'


const Sidebar = () => {
  
  const { dispatch } = useContext(DarkModeContext)

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{textDecoration: 'none'}}>
         <span className="logo">diceadmin</span>
        </Link>
        </div>
     <hr />
      <div className="center">
        <ul>
            <p className="title">MAIN</p>
            <li>
              <DashboardCustomizeIcon className="icon"/>
              <span>Dashboard</span>
            </li>
             <p className="title">LISTS</p>
          <Link to="/users" style={{textDecoration: 'none'}}>
          <li>
            <PersonIcon className="icon" />
            <span>Users</span>
          </li>
          </Link>
           
           <Link to="/products" style={{textDecoration: 'none'}}>
          <li>
            <AddBusinessIcon className="icon" />
            <span>Products</span>
          </li>
           </Link>

          <li>
            <ListAltIcon className="icon" />
            <span>Orders</span>
          </li>

          
          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>
            <p className="title">USEFUL</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Stats</span>
          </li>

          <li>
            <NotificationsIcon className="icon" />
            <span>Notification</span>
          </li>
            <p className="title">SERVICE</p>
          <li>
            <HealthAndSafetyIcon className="icon" />
            <span>System Health</span>
          </li>

          <li>
            <PsychologyIcon  className="icon" />
            <span>Logs</span>
          </li>

          <li>
            <SettingsIcon  className="icon" />
            <span>Setting</span>
          </li>
              <p className="title">USER</p>
          <li>
            <AccountCircleIcon className="icon" />
            <span>Profile</span>
          </li>
          
          <li>
            <LogoutIcon/>
            <span>Logout</span>
          </li>
          </ul>
        </div>
      <div className="bottom">
        <div className="color-option" onClick={() => dispatch({type:'LIGHT'})}></div>
        <div className="color-option"  onClick={() => dispatch({type:'DARK'})}></div>
        {/* <div className="color-option"></div> */}
      </div>
    </div>
  )
}

export default Sidebar
