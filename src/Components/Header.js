import React from 'react';
import animLogo from './Images/Animlogo.png'
import '../CSS/LoggedInHeader.css'
import  DrawerToggleButton from './SideDrawer/DrawerToggleButton'
import { FaPiggyBank } from 'react-icons/fa'
import { IoIosStats } from 'react-icons/io'
import { AiFillMessage } from 'react-icons/ai'
import LogButton from './LogButton'


function Header(props){

  return(

    <header className="toolbar">
      <nav className="toolbar_navigation">
        <div className="toolbar_toggle_button">
          <DrawerToggleButton click={props.drawerClickHandler}/></div>
        <div className="toolbar_logo">
        <img className="img" src={animLogo} alt="LOGO" />
          <a href="/">Just a Bit</a>
        </div>
        <div className="toolbar_navigation-items">
        <ul>
          <li>
            <a href="/"><FaPiggyBank className="left"/>Transfer
            </a>
          </li>
          <li>
            <a href="/"><IoIosStats className="left"/>Statistics  
            </a>
          </li>
          <li>
            <a href="/"><AiFillMessage className="left"/>Contact
            </a>
          </li>
        </ul>
        </div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
        <ul className="inline">
          <li>
            <LogButton 
              value={props.change}
              test={props.logged}/>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  )
}

export default Header
