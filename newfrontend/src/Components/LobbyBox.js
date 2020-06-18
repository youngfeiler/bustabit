import React from 'react';
import "../CSS/Table.css"



class Table extends React.Component {
  constructor(props) {
     super(props)
     this.state = {
        students: [
           { id: 1, name: 'StagenPlays', bet: 450 },
           { id: 2, name: 'HudsonJafarious', bet: 1900, },
           { id: 3, name: 'Micah', bet: 160, },
           { id: 4, name: 'Otheruser', bet: 250, }
        ]
     }
  }

  

  renderTableHeader() {
     let header = Object.keys(this.state.students[0])
     return header.map((key, name,bet) => {
        return <th class="tablehead" key={name,bet}>{key.toUpperCase()}</th>
     })
  }



  renderTableData() {
   this.state.students.sort((a,b) =>(a.bet>b.bet)?-1:1)
     return this.state.students.map((student) => {
        const { id, name, bet } = student 
        return (
           <tr class="mint"key={id}>
             <td>{id}</td>
              <td>{name}</td>
              <td>{bet}</td>
           </tr>
        )
     })
  }

  render() {
     return (
        <div>
           <h1 id='title' class="header">Round's Bets:</h1>
           <table id='students' className="center test">
              <tbody>
                 <tr>{this.renderTableHeader()}</tr>
                 {this.renderTableData()}
              </tbody>
           </table>
        </div>
     )
  }
}





export default Table