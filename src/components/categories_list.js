import React, { Component } from "react";
import { Link } from "react-router-dom";
import Loader from "../utils/loader";

class CategoriesList extends Component {
  renderCategories() {
    if (this.props.categories.length === 0) {
      return <Loader />;
    }
    return this.props.categories.map(category => {
      if (category.name) {
        return (
          <li key={category.id} className="list-group-item">
            <Link to={`/category/${category.id}`}>{category.name}</Link>
          </li>
        );
      }
    });
  }

  render() {
    return (
      <div>
        <h5>Categories</h5>
        {this.renderCategories()}
      </div>
    );
  }
}

export default CategoriesList;
