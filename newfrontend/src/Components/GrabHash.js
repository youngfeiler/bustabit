import React from 'react';

class GrabHash extends React.Component{
  constructor(props){
    super()
    this.state={
      isLoading:true,
      items:[]
    }
    this.fetchData=this.fetchData.bind(this)
  }

  componentDidMount(){
    this.fetchData();
  }

  fetchData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
      this.setState({
        isLoaded:true,
        items:json,
      })
      })
    }
  


  render(){
    var numbers = [1 , 2 , 3 , 54]
    var lastPerson = numbers.pop();
  return(
    <div>
      <ul>
          <li>
            name:{lastPerson}
          </li>

      </ul>
    </div>
  )
  }
}

export default GrabHash