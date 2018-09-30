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
            <Link to={`/category/${category.id}`}>
              {category.name} {this.props.selectedCategoryId}
            </Link>
          </li>
        );
      }
    });
  }

  render() {
    return (
      <ul className="list-group">
        <li className="list-group-item li__head">Categories</li>
        {this.renderCategories()}
      </ul>
    );
  }
}

export default CategoriesList;
