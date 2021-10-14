import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class MenuselectionInfo extends Component {
  renderMenuselection(menuselection) {
    return (
      <div className="col-md-5 col-m1 ">
        <Card>
          <CardImg top src={menuselection.image} alt={menuselection.name} />
          <CardBody>
            <CardTitle>{menuselection.name}</CardTitle>
            <CardText>{menuselection.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }

  renderComments(comments){
      if(comments){
          return <div class = 'col-md-5 col-m1'>
             <h4>Comments</h4>
              {comments.map(comment => {
                  return(<div key = {comment.id}>
                      <p>{comment.text}
                      <br/> 
                      {comment.author}
                      {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                       </p>
                  </div>)    
               })}
          </div>
        }
    }
    render() {
      if (this.props.menuselection) {
          return (
              <div className="container">
                  <div className="row">
                      {this.renderMenuselection(this.props.menuselection)}
                      {this.renderComments(this.props.menuselection.comments)}
                  </div>
              </div>
          );
      }
      return <div />;
  }
}
 export default MenuselectionInfo;