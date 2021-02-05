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

                {/* <tr>
                    <th>Name</th>
                    <th>Res</th>
                    <th>zdfg</th>
                    <th>adg</th>
                </tr> */}
                {/* <tr>
                    {this.state.result.map(columns => <td>
                        {columns.name}
                    </td>)}
                </tr> */}
                {/* <h1>{this.yes()}</h1> */}
            </div>
        )
    }
}

export default Table