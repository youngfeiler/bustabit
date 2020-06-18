import React from 'react';
import '../CSS/BigBox.css'
import BetBox from './BetBox'
import GameBox from './GameBox'

function bigBox(){
  return(
    <div className="wrapper">
    <article className="main center box">
      <GameBox />  
    </article>
    <aside className="aside aside-1"><BetBox /></aside> 
    <footer className="footer">
    </footer>
  </div>

  )
}



export default bigBox
