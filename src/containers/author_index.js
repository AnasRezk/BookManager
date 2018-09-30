import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchAuthorBooks, initBook } from "../actions/books_actions";
import { fetchSingleAuthor } from "../actions/authors_actions";
import BookList from "../components/book_list";
import AuthorDetail from "../components/author_detail";
import { withRouter } from "react-router-dom";

class AuthorIndex extends Component {
  getId() {
    return this.props.match.params.id;
  }

  componentWillMount() {
    this.props.fetchAuthorBooks(this.getId(), 1, this.props.perPage);
    this.props.fetchSingleAuthor(this.getId());
  }

  componentDidUpdate(prevProps) {
    if (this.getId() !== prevProps.author.id) {
      this.props.initBook();
      this.props.fetchAuthorBooks(this.getId(), 1, this.props.perPage);
      this.props.fetchSingleAuthor(this.getId());
    }
  }

  render() {
    const detectPageClicked = offset => {
      this.props.fetchBooks(this.getId(), offset, this.props.perPage);
    };

    return (
      <div>
        Author
        <AuthorDetail
          author={this.props.author}
          editMode={this.props.layout.editMode}
        />
        <BookList
          onPageClicked={detectPageClicked}
          books={this.props.books}
          perPage={this.props.perPage}
          pageCount={this.props.pageCount}
          loaded={this.props.loaded}
          editMode={this.props.layout.editMode}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books.all,
    author: state.authors.author,
    perPage: state.books.perPage,
    pageCount: state.books.pageCount,
    loaded: state.books.loaded,
    layout: state.layout
  };
}

function mapDispatchToPorops(dispatch) {
  return bindActionCreators(
    {
      fetchAuthorBooks: fetchAuthorBooks,
      fetchSingleAuthor: fetchSingleAuthor,
      initBook: initBook
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
