import React, { Component } from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import MenuselectionInfo from './MenuselectionInfoComponent';
import { MENUSELECTIONS } from '../shared/menuselections';
import Header from './HeaderComponent';
import Footer from './FooterComponent';


class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menuselections: MENUSELECTIONS
        };
    }

    render() {

        const HomePage = () => {
            return (
                <Home />
            );
        };

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' render={() => <Menu menuselections={this.state.menuselections} />} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}
export default Main;