import React from "react";
import DataAreaContext from "../../utils/DataAreaContext";

class SavedBookCards extends React.Component {
  static contextType = DataAreaContext;
  createCards = () => {
    let cols = []

    // Outer loop to create parent
    for (let i = 0; i < this.context.books.length; i++) {
      let card = (
        <div className="card" key={i}>
          <div className="card-header">
            <div className="row">
              <div className="col s6">
                <h4 className="card-title">{this.context.books[i].title}</h4>
              </div>
              <div className="col s6">
                <a href={this.context.books[i].link} target="_blank"
                className="btn m-1"><i>View</i></a>
                <a href="#"
                className="btn m-1" onClick={() => this.context.deleteBook(this.context.books[i]._id)}><i>Delete</i></a>
              </div>
            </div>
            <div className="row">
              <p className="category m-3">{this.context.books[i].authors}</p>
            </div>
          </div>
          <div className="card-body">
            
            <div className="row">
              <div className="col s8">
                <p className="category">{this.context.books[i].description}</p>
              </div>
              <div className="col s4">
                <img src={this.context.books[i].image} 
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

export default SavedBookCards;
