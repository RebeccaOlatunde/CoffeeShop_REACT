import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';


class Menu extends Component {

    render() {
        const menu = this.props.menuselections.map(menuselection => {
            return (
                <div key={menuselection.id} className="col-md-5 m-1">
                <Card onClick={() => this.props.onClick(menuselection.id)}>        
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
            </div>
        );
    }
}
export default Menu;