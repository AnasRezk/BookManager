import React, { Component } from "react";
import { Link } from "react-router-dom";
import Loader from "../utils/loader";

class AuthorsList extends Component {
  renderAuthors() {
    if (this.props.authors.length === 0) {
      return <Loader />;
    }
    return this.props.authors.map(author => {
      if (author.name) {
        return (
          <li key={author.id} className="list-group-item">
            <Link to={`/author/${author.id}`}>{author.name}</Link>
          </li>
        );
      }
    });
  }

  render() {
    return (
      <ul className="list-group">
        <li className="list-group-item li__head">Authors</li>
        {this.renderAuthors()}
      </ul>
    );
  }
}

export default AuthorsList;
