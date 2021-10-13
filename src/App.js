import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';
import { MENUSELECTIONS} from './shared/menuselections';


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            menuselections: MENUSELECTIONS
        };
    }

    render() {
        return (
            <div className="App">
                <Navbar dark color="success">
                <div className="container">
                    <NavbarBrand href="/">SB Coffee & Bake</NavbarBrand>
                </div>
                </Navbar>
                <Menu menuselections={this.state.menuselections} />
            </div>
        );
    }
}

export default App;
