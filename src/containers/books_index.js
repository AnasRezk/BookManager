import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchBooks } from "../actions/books_actions";
import BookList from "../components/book_list";

class BooksIndex extends Component {
  componentWillMount() {
    this.props.fetchBooks(1, this.props.perPage);
  }

  render() {
    const detectPageClicked = offset => {
      this.props.fetchBooks(offset, this.props.perPage);
    };

    return (
      <BookList
        onPageClicked={detectPageClicked}
        books={this.props.books}
        perPage={this.props.perPage}
        pageCount={this.props.pageCount}
        loaded={this.props.loaded}
        editMode={this.props.layout.editMode}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books.all,
    perPage: state.books.perPage,
    pageCount: state.books.pageCount,
    loaded: state.books.loaded,
    layout: state.layout
  };
}

function mapDispatchToPorops(dispatch) {
  return bindActionCreators(
    {
      fetchBooks: fetchBooks
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToPorops
)(BooksIndex);
