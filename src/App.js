import React from 'react';
import Label from './Components/Label'
import './CSS/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import SideDrawer from './Components/SideDrawer/SideDrawer'
import Header from './Components/Header';
import BigBox from './Components/BigBox'


class App extends React.Component {
  constructor(){
    super()
    this.state={
    isLoggedIn:true,
    sideDrawerOpen:false
  }
  
  this.drawerToggleClickHndler=this.drawerToggleClickHndler.bind(this);
  this.backdropClickHandler=this.backdropClickHandler.bind(this);
  this.handleChange=this.handleChange.bind(this)
}

  drawerToggleClickHndler(){
    this.setState(prevState =>({
      sideDrawerOpen: ! prevState.sideDrawerOpen
    })
      )
  }

  backdropClickHandler(){
    this.setState({sideDrawerOpen: false})
  }

  handleChange(){
    this.setState(prevState =>({
      isLoggedIn: !prevState.isLoggedIn
    })
      )
  }

  render(){
    return (
    <div style ={{height: '100%', }}>
        <Header 
        drawerClickHandler={this.drawerToggleClickHndler}
        change={this.handleChange}
        logged={this.state.isLoggedIn}/>
        <SideDrawer show={this.state.sideDrawerOpen}/>
          <Label click={this.backdropClickHandler}/>
          <BigBox />
    </div>
  )
  }
}

export default App;
