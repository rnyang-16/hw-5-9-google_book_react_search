import React from "react";
import DataAreaContext from "../../utils/DataAreaContext";

class BookCards extends React.Component {
  static contextType = DataAreaContext;
  createCards = () => {
    let cols = []

    // Outer loop to create parent
    for (let i = 0; i < this.context.data.length; i++) {
      let card = (
        <div className="card">
          <div className="card-header">
            <div className="row">
              <div className="col s6">
                <h4 className="card-title">{this.context.data[i].title}</h4>
              </div>
              <div className="col s6">
                <a href={this.context.data[i].link}
                className="btn m-1"><i>View</i></a>
                <a href={this.context.data[i].link}
                className="btn m-1"><i>Delete</i></a>
              </div>
            </div>
            <div className="row">
              <p className="category m-3">{this.context.data[i].authors}</p>
            </div>
          </div>
          <div className="card-body">
            
            <div className="row">
              <div className="col s8">
                <p className="category">{this.context.data[i].description}</p>
              </div>
              <div className="col s4">
                <img src={this.context.data[i].image} 
                className="img-fluid" alt="Responsive"/>
              </div>
            </div>
          </div>
        </div>
      )
      //Create the parent and add the children
      cols.push(card)
    }
    return cols
  }
  
  render() {
    return (
      <div className="row">
        {this.createCards()}
      </div>
    );
  }
}

export default BookCards;
