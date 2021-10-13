import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedMenuselection: null
        };
    }  
    onMenuselectionSelect(menuselection) {
        this.setState({selectedMenuselection: menuselection});
    }

    renderSelectedMenuselection(menuselection) {
        if (menuselection) {
            return (
                <Card>
                    <CardImg top src={menuselection.image} alt={menuselection.name} />
                    <CardBody>
                        <CardTitle>{menuselection.name}</CardTitle>
                        <CardText>{menuselection.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        return <div />;
    }

    render() {
        const menu = this.props.menuselections.map(menuselection => {
            return (
                <div key={menuselection.id} className="col-md-5 m-1">
                    <Card onClick={() => this.onMenuselectionSelect(menuselection)}>
                        <CardImg width="100%" src={menuselection.image} alt={menuselection.name} />
                        <CardImgOverlay>
                            <CardTitle>{menuselection.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    <div className="col-md-5 m-1">
                        {this.renderSelectedMenuselection(this.state.selectedMenuselection)}
                    </div>
                </div>
            </div>
        );
    }
}


export default Menu;
