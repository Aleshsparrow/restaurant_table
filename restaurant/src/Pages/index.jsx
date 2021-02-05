import React, { Component } from 'react';
import Table from './../Components/tableComponent'
import NavBar from './../Components/navBarComponent'

class Main extends Component {
    state = {
        isLoaded: false,
        result: []
    }
    componentDidMount (){
      fetch("https://code-challenge.spectrumtoolbox.com/api/restaurants", {
            headers: {
                Authorization: 'Api-Key q3MNxtfep8Gt'
            }
        })
  .then(response => response.json())
  .then((data) => 
        this.setState({
            isLoaded: true,
            result: data
        })
  );
    }

    handleFilter = (event) => {
        event.preventDefault()
        var inputFilter = document.getElementById("input-filter").value
        console.log("clicked", 
        inputFilter
        );
        const oldResult = this.state.result
        const newResult = oldResult.filter(c => c.state == inputFilter)
        this.setState({
            result: newResult
        })

    }
    

    handleSort = (result) => {
        const results = this.state.result.sort()
        console.log("sort clicked", results);
        // for (let i = 0; i < result.length; i++) {
        //     console.log(result[i].name.sort());            
        // }

        // const result = this.state.result.sort(function (a,b){
        //     return a > b
        // })
        // console.log(result.sort());
        // this.setState({
        //     result
        // })
    }

    render() { 
        return ( 
            <div>
                <NavBar>
                </NavBar>
            <div className="container">
            <form class="d-flex">
        <input id="input-filter" class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button onClick={this.handleFilter} class="btn btn-outline-success" type="submit">Search</button>
      </form>
            <button onClick={() => this.handleSort(this.state.result)} className="btn-secondary btn-sm">Sort Alphabetically</button>
                <Table result={this.state.result}/>
            </div>
         </div>);
    }
}
 
export default Main;