import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import MenuselectionInfo from './MenuselectionInfoComponent';
import { MENUSELECTIONS } from '../shared/menuselections';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuselections: MENUSELECTIONS,
            selectedMenuselection: null
        };
    } 

    onMenuselectionSelect(menuselectionId) {
        this.setState({selectedMenuselection: menuselectionId});
    }

    render() {
        return (
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">SB Coffee & Bake</NavbarBrand>
                    </div>
                </Navbar>
                <Menu menuselections={this.state.menuselections} 
                onClick={menuselectionId => this.onMenuselectionSelect(menuselectionId)}/>
                <MenuselectionInfo menuselection={this.state.menuselections.filter(menuselection => menuselection.id === this.state.selectedMenuselection)[0]} />
            </div>
        );
    };
}

export default Main;