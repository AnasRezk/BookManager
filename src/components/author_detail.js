import React, { Component } from "react";

export default class AuthorDetail extends Component {
  renderAuthor() {
    if (this.props.author) {
      return (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{this.props.author.name}</h5>
            <h6 className="card-subtitle mb-2">{this.props.author.jobTitle}</h6>
            <p className="card-text">{this.props.author.bio}.</p>
          </div>
        </div>
      );
    } else {
      return <div>loading...</div>;
    }
  }

  render() {
    return <div>{this.renderAuthor()}</div>;
  }
}
