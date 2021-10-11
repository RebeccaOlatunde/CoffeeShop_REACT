import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/Menu';
import './App.css';

//Main page Navbar *Color and font style needs to be changed
class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar dark color="success">
                <div className="container">
                    <NavbarBrand href="/">SB Coffee & Bake Shop</NavbarBrand>
                </div>
                </Navbar>
                <Menu/>
            </div>
        );
    }
}

export default App;
