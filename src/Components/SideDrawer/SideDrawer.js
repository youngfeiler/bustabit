import React from 'react';
import './SideDrawer.css';
import { FaPiggyBank } from 'react-icons/fa'
import { IoIosStats } from 'react-icons/io'
import { AiFillMessage } from 'react-icons/ai'

const sideDrawer = props =>{
  let drawerClases = 'side-drawer';
  if (props.show){
    drawerClases =['side-drawer open']
  }
  return(
  <nav className={drawerClases}>
    <h1 className="drawer-header">Just a Bit</h1>
    <hr></hr>
    <ul>
      <li><a href="/"><FaPiggyBank className="left"/>Transfer</a></li>
      <li><a href="/"><IoIosStats className="left"/>Statisitics</a></li>
      <li><a href="/"><AiFillMessage className="left"/>My Account</a></li>
      <li><a href="/"><FaPiggyBank className="left"/>Log Out</a></li>
    </ul>
  </nav>
  );
};

export default sideDrawer