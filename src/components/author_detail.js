import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class AuthorDetail extends Component {

  renderEditButton(id) {
    if (this.props.editMode) {
      return (
        <Link to={`/editauthor/${id}`}>
          <button className="btn btn-primary btn-sm"><i className=""></i>edit</button>
        </Link>
      );
    }
  }

  renderAuthor() {
    const { name, jobTitle, bio, id } = this.props.author;
    if (this.props.author) {
      return (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            {this.renderEditButton(id)}
            <h6 className="card-subtitle mb-2">{jobTitle}</h6>
            <p className="card-text">{bio}</p>
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
