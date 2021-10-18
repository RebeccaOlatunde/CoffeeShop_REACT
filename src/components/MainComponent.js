import React, { Component } from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { MENUSELECTIONS } from '../shared/menuselections';
import { BESTSELLERS } from '../shared/bestsellers';
import { PROMOTIONS } from '../shared/promotions';
import { COMMENTS} from '../shared/comments';


class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menuselections: MENUSELECTIONS,
            comments: COMMENTS,
            bestsellers: BESTSELLERS,
            promotions: PROMOTIONS
        };
    }

    render() {

        const HomePage = () => {
            return (
                <Home 
                    menuselection={this.state.menuselections.filter(menuselection => menuselection.featured)[0]}
                    promotion={this.state.promotions.filter(promotion => promotion.featured)[0]}
                    bestseller={this.state.bestsellers.filter(bestseller => bestseller.featured)[0]}
                />
            );
        };

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' render={() => <Menu menuselections={this.state.menuselections} />} />
                    <Route exact path='/aboutus' render={() => <About bestsellers={this.state.bestsellers} /> } />
                    <Route exact path='/contactus' component={Contact} />
                    <Route exact path='/aboutus' component={About} />

                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}
export default Main;