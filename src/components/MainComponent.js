import React, { Component } from 'react';
import Menu from './MenuComponent';
import MenuselectionInfo from './MenuselectionInfoComponent';
import { MENUSELECTIONS } from '../shared/menuselections';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

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
                <Header />
                <Menu menuselections={this.state.menuselections} onClick={menuselectionId => this.onMenuselectionSelect(menuselectionId)} />
                <MenuselectionInfo menuselection={this.state.menuselections.filter(menuselection => menuselection.id === this.state.selectedMenuselection)[0]} />
                <Footer />
            </div>
        );
    }
}

export default Main;