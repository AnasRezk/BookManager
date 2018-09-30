import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchSingleBook } from "../actions/books_actions";
import { fetchSingleAuthor } from "../actions/authors_actions";
import {
  fetchSingleCategory,
  initCategory
} from "../actions/categories_actions";
import { Link } from "react-router-dom";
import Loader from "../utils/loader";

class BookDetail extends Component {
  componentWillMount() {
    const id = this.props.match.params.id;
    this.props.fetchSingleBook(id);
    this.props.initCategory();
  }

  renderEditButton(id) {
    if (this.props.layout.editMode) {
      return (
        <Link to={`/editbook/${id}`}>
          <button className="btn btn-primary btn-sm">
            <i className="" />
            edit
          </button>
        </Link>
      );
    }
  }

  renderBook() {
    const {
      id,
      author,
      category,
      title,
      pagesNumber,
      publishYear,
      isbn,
      description
    } = this.props.book;

    if (this.props.book.id) {
      this.props.fetchSingleAuthor(author);
      this.props.fetchSingleCategory(category);
      return (
        <div className="card">
          <img
            src="../../assests/book-flat.png"
            width="120px"
            className="card-img-left"
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            {this.renderEditButton(id)}
            <h6 className="card-subtitle mb-2">
              <strong>By : </strong>
              {this.props.author.name}
            </h6>
            <h6 className="card-subtitle mb-2">
              <strong>Number of Pages : </strong>
              {pagesNumber}
            </h6>
            <h6 className="card-subtitle mb-2">
              <strong>Publish Year : </strong>
              {publishYear}
            </h6>
            <h6 className="card-subtitle mb-2">
              <strong>ISBN : </strong>
              {isbn}
            </h6>
            <h6 className="card-subtitle mb-2">
              <strong>Classification : </strong>
              {this.props.category.name ? this.props.category.name : ""}
            </h6>
            <p className="card-text">{description}.</p>
          </div>
        </div>
      );
    } else {
      return <Loader />;
    }
  }

  render() {
    return <div>{this.renderBook()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    book: state.books.book,
    author: state.authors.author,
    category: state.categories.category,
    layout: state.layout
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchSingleBook: fetchSingleBook,
      fetchSingleAuthor: fetchSingleAuthor,
      fetchSingleCategory: fetchSingleCategory,
      initCategory: initCategory
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookDetail);
