import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchSingleCategory } from "../actions/categories_actions";
import { fetchCategoryBooks } from "../actions/books_actions";
import BookList from "../components/book_list";
import { withRouter } from "react-router-dom";

class AuthorIndex extends Component {
  componentWillMount() {
    const categoryId = this.props.match.params.id;
    this.props.fetchCategoryBooks(categoryId);
    this.props.fetchSingleCategory(categoryId);
  }

  componentDidUpdate(prevProps) {
    const categoryId = this.props.match.params.id;
    if (categoryId !== prevProps.category.id) {
      this.props.fetchCategoryBooks(categoryId);
      this.props.fetchSingleCategory(categoryId);
    }
  }

  render() {
    return (
      <div>
        <h2>{this.props.category.name}</h2>
        <BookList books={this.props.books} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books.all,
    category: state.categories.category
  };
}

function mapDispatchToPorops(dispatch) {
  return bindActionCreators(
    {
      fetchCategoryBooks: fetchCategoryBooks,
      fetchSingleCategory: fetchSingleCategory
    },
    dispatch
  );
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToPorops
  )(AuthorIndex)
);
