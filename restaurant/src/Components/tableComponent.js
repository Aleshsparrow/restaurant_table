import React, { Component } from 'react'
const axios = require ('axios')

class Table extends Component {
render(){
        // console.log(this.state.result);
        return(
            <div>

<table className="table">
<thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">City</th>
      <th scope="col">State</th>
      <th scope="col">Phone</th>
      <th scope="col">Genre</th>
    </tr>
  </thead>
  <tbody>
      {this.props.result.map(col =>  <tr> 
        <th scope="row">{col.name}</th>
      <td>{col.city}</td>
      <td>{col.state}</td>
      <td>{col.telephone}</td>
      <td>{col.genre}</td>
    </tr>)}
  </tbody>
</table>
            </div>
        )
    }
}

export default Table