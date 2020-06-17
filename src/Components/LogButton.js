import React from 'react';
import { Button } from 'react-bootstrap'
import '/Users/stefanfeiler/Desktop/reactwebsite/my-app/src/CSS/LogButton.css'

function logButton(props){
  let logValue;
  let acctStatus;
  if (props.test){
    logValue='Log Out'
    acctStatus='My Account'
  } else{
    logValue='Create Account/Log In'
    acctStatus=null
  }
  return(
    <div>
    <a className="acct-labels" href="/">{acctStatus}</a>
    <Button style={{backgroundColor:"rgb(0,225,195)", borderStyle:'none', color:'#43455C'}} onClick={props.value}>{logValue}</Button>
    
    </div>
  )
}

export default logButton