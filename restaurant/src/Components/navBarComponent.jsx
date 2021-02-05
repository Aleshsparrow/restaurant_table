import React, { Component } from 'react';

class NavBar extends Component {
    render() { 
        return ( 
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Restaurants</a>     
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
</nav>
            </div>
         );
    }
}
 
export default NavBar;