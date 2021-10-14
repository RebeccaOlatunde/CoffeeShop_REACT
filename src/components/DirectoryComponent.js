// import React, { Component } from 'react';
// import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

// class Directory extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             menuselections: [
//                 {
//                     id: 0,
//                     name: 'Donut',
//                     image: 'assets/images/Donut1.PNG',
//                     description: "Soft donut",
//                 },
//                 {
//                     id: 1,
//                     name:'Croissant ',
//                     image: 'assets/images/Croissant1.PNG',
//                     description: "Buttery Goodness",
//                 },
//                 {
//                     id: 2,
//                     name:'Decaf Coffee',
//                     image: 'assets/images/coffee1.jpg',
//                     description: "Smooth coffee",
//                 },
//                 {
//                     id: 3,
//                     name:'Latte',
//                     image: 'assets/images/latte1.jpg',
//                     description: "Best Latte in town.",
//                 },
//                 {
//                     id: 4,
//                     name:'Bagel',
//                     image: 'assets/images/Bagel1.PNG',
//                     description: "Freshly Baked Daily.",
//                 },
//                 {
//                     id: 5,
//                     name:'Breakfast Sandwich',
//                     image: 'assets/images/BreakfastSandwich1.PNG',
//                     description: "Tasty, cheesy, Meaty Goodness.",   
//                 }
//             ],
//         };
//     }

//     render() {
//         const directory = this.state.menuselections.map(menuselections => {
//             return (
//                 <div className="col">
//                     <img src={menuselections.image} alt={menuselections.name} />
//                     <h2>{menuselections.name}</h2>
//                     <p>{menuselections.description}</p>
//                 </div>
//             );
//         });

//         return (
//             <div className="container">
//                 <div className="row">
//                     {directory}
//                 </div>
//             </div>
//         );
//     }
// }

// export default Directory;