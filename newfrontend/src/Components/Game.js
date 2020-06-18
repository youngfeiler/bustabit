import React from'react';
import "../CSS/Game.css"


class Game extends React.Component{
  constructor(props){
    super(props)
    this.state={
      num:1,
      bust:1.41,
      busted:false,
      
    }
    this.increase=this.increase.bind(this)
  }
  
  increase () {
    this.setState({
      num:(this.state.num +.01)
    })
    if(this.state.num >= this.state.bust -.01) {
      clearInterval(this.intervalId);
      this.setState({busted:true})
      this.setState({num:1})    
    }
  }
  
  componentDidMount() {
    this.intervalId = setInterval(this.increase.bind(this), 500);
  }

 
  render(){
    return(

    <div>
      {this.state.busted ? <h1 className="red">BUSTED AT {this.state.bust}</h1>:<h1 className="mint">{(this.state.num).toFixed(2)}</h1>}
    </div>

  )
  
}



}

export default Game
