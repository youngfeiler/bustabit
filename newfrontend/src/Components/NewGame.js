import React from 'react';
import "../CSS/Game.css"
import createHash from 'create-hmac'

class NewGame extends React.Component{
  constructor(){
    super()
    this.state={
      numIncrease:1,
      bustPoint:1,
      prevBustPoint:1,
      isBusted:'',
      timer:5,
      gameNumber:1,
      testNum:1000,
      startTime:'',
    }
    this.increase=this.increase.bind(this)
    this.decrease=this.decrease.bind(this)
    this.crashPointFromHash=this.crashPointFromHash.bind(this)
    

  }
  
    increase(){
      if(this.state.numIncrease>=this.state.bustPoint){
        this.setState({isBusted:true})
        this.setState({numIncrease:1})
        this.genHash()
      }else if(this.state.isBusted==true){
        
      }
      else{
        this.setState(prevState => ({numIncrease:prevState.numIncrease+.01}))
      } 
  } 

  componentDidMount(){
    setInterval(this.increase,150)
  }
  
  

  genHash(){
    
    var numbers = ['2A2A581A77B2C98DFE2C6EBA26AD9B0296731BB1E6DD61048DA326843CE23090','7E8F99524CCD250F068FFB5B7190707231CFD19D0DF300DD17D14F225ED8E2BF','F00D2341030A2080CB354EE36D5296352021C4A449DCC1F290978EC05A2E5F76','0FF9132978200B09BCA7F2CDA0177CE1A514D3D33F9E4B253E1109E0F7CA9EC7','806ACBB12EB28EAF29DC52D9AF1F3476841198A17BC57240AB3480FC56880B87','0CB87556FF9657B2DBB845B5561494132F0A4EA6385EB2E0477865D3F7596EEB', '3B1DCF6B9A22EA080789AC3E13024C153DCF912FE92E441826DF9C56233FFC21']

    this.setState({timer:5, gameNumber: this.state.gameNumber +1 })

    var nextNumber = numbers[(numbers.length)-(this.state.gameNumber)]

    

    this.intervalID = setInterval(this.decrease,100)
    const timer = setTimeout(() =>{
      this.setState({numIncrease:1})
      this.setState({isBusted:false})
      console.log(this.state.bustPoint)
      this.increase()
      clearInterval(this.intervalID)
    },5000)


    this.crashPointFromHash(nextNumber)
    
    return()=> clearTimeout(timer)
  }

  crashPointFromHash(x){
      let hash=x
      function divisible(hash, mod) {
    
        var val = 0;
    
        var o = hash.length % 4; 
        for (var i = o > 0 ? o - 4 : 0; i < hash.length; i += 4) {
          val = ((val << 16) + parseInt(hash.substring(i, i+4), 16)) % mod;
        }
    
        return val === 0;
      }
    
      if (divisible(hash, 100)){
        this.setState({bustPoint:1})
      }else{

      var h = parseInt(hash.slice(0,52/4),16);
      var e = Math.pow(2,52);
      this.setState( prevState=> ({
        prevBustPoint: prevState.bustPoint,
        bustPoint:Math.floor((100 * e - h) / (e - h))/100
      }))
      console.log(this.state.bustPoint)
    }
  }

  decrease(){
    this.setState({timer:this.state.timer -.1})
  }

  
  render(){
  


    return(
      <div>
        {this.state.isBusted ? <div><h1 className="red">BUSTED AT {this.state.prevBustPoint}</h1> <p className="timer">TIME TILL NEXT GAME:{(this.state.timer).toFixed(2)}s</p></div>:<div><h1 className="mint">{(this.state.numIncrease).toFixed(2)}</h1><p></p></div>}
      </div>
    )
  }
}

  

export default NewGame
