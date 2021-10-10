import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';

//Main page Navbar *Color and font style needs to be changed
class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">SB CoffeeShop</NavbarBrand>
                </div>
                </Navbar>
            </div>
        );
    }
}

export default App;
