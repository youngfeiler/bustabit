import React from 'react';
import '/Users/stefanfeiler/Desktop/reactwebsite/my-app/src/CSS/BetBox.css'
import {InputGroup, FormControl, Button} from 'react-bootstrap'
import Table from './LobbyBox'



class BetBox extends React.Component{
constructor(){
  super()
  this.state={
    betInputValue:'',
    returnInputValue:''
  }
  this.updateBet=this.updateBet.bind(this)
}

 updateBet(event){
  this.setState({
    [event.target.name]: event.target.value
  })
}

  

  render(){
    let betValue=this.state.betInputValue;
    let returnValue=this.state.returnInputValue
  return(
    <div>
      <h1 className="place-bet-header">PLACE YOUR BET</h1>
    <InputGroup size="sm">
    <InputGroup.Prepend>
      <Button className="bet-inputs-button" variant="outline-secondary"> Bits </Button>
    </InputGroup.Prepend>
    <FormControl className="bet-inputs"
      placeholder="Bet Amount"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
      onChange={this.updateBet}
      name="betInputValue"
      type="number"
    />
    <InputGroup.Append>
      <Button className="bet-inputs-button" variant="outline-secondary">2x</Button>
      <Button className="bet-inputs-button" variant="outline-secondary">10x</Button>
    </InputGroup.Append>
  </InputGroup>
  <InputGroup size="sm">
  <InputGroup.Prepend>
      <Button className="bet-inputs-button" variant="outline-secondary">Return</Button>
    </InputGroup.Prepend>
  <FormControl className="bet-inputs"
  type="number"
    placeholder="Auto-Cash out"
    aria-label="Recipient's username"
    aria-describedby="basic-addon2"
    name="returnInputValue"
    onChange={this.updateBet}
  />
  <InputGroup.Append>
    <Button className="bet-inputs-button" variant="outline-secondary">2x</Button>
    <Button className="bet-inputs-button" variant="outline-secondary">3x</Button>
  </InputGroup.Append>
</InputGroup>
<Button className="place-bet-btn">
  PLACE BET
</Button>
  <p className="target-profit">Target Profit: {betValue * returnValue} bits</p>

  <p className="target-profit">Win Chance:</p>
  <Table />
</div>


  )
}
}


export default BetBox