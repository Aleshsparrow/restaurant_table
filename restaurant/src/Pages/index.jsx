import React, { Component } from 'react';
import Table from './../Components/tableComponent'

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
    render() { 
        return ( 
            <div className="container">

                <Table result={this.state.result}/>
            </div>
         );
    }
}
 
export default Main;