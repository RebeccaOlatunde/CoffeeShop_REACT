import React, { Component } from 'react';

class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {
            selections: [
                {
                    id: 0,
                    name: 'Donuts',
                    image: 'assets/images/donut1.png',
                    elevation: 1233,
                    description: "Donuts, soft on the inside, slightly crunchy exterior."
                },
                {
                  id: 1,
                  name: 'Croissant',
                  image: 'assets/images/croissant1.png',
                  elevation: 877,
                  description: "Buttery and Crusty exterior Croissant."
                },
                {
                    id: 2,
                    name: 'Decaf Coffee',
                    image: 'assets/images/coffee1.jpg',
                    elevation: 2901,
                    description: "Smooth, Dark Coffee"
                },
                {
                    id: 3,
                    name: 'Latte',
                    image: 'assets/images/latte1.jpg',
                    elevation: 42,
                    description: "Rated, Best Latte in the Metro Area."
                }
            ],
        };
    }
    render() {
        const menu = this.state.selections.map(selection=> {
            return (
                <div className="col">
                    <img src={selection.image} alt={selection.name} />
                    <h2>{selection.name}</h2>
                    <p>{selection.description}</p>
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
