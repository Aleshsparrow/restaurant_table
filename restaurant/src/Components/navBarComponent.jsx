import React, { Component } from 'react';

class NavBar extends Component {

   

    render() { 
        return ( 
            <div>
                <nav onFilter={this.props.handleFilter} class="navbar navbar-expand-lg navbar-light bg-light">
  {/* <div class="container-fluid"> */}
    <a class="navbar-brand" href="#">Restaurants</a>     
      
    {/* </div> */}
</nav>
            </div>
         );
    }
}
 
export default NavBar;