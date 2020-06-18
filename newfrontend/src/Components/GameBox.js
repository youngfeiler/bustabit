import React from 'react'
import '../CSS/GameBox.css'
import NewGame from './NewGame.js'
class GameBox extends React.Component{
  render(){
    return(
      <div>
        <NewGame/>
      </div>
    )
  }
}
export default GameBox