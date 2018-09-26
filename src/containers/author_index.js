import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchAuthorBooks } from "../actions/books_actions";
import { fetchSingleAuthor } from "../actions/authors_actions";
import BookList from "../components/book_list";
import AuthorDetail from "../components/author_detail";
import { withRouter } from "react-router-dom";

class AuthorIndex extends Component {
  componentWillMount() {
    const authorId = this.props.match.params.id;
    this.props.fetchAuthorBooks(authorId);
    this.props.fetchSingleAuthor(authorId);
  }

  componentDidUpdate(prevProps) {
    const authorId = this.props.match.params.id;
    if (authorId !== prevProps.author.id) {
      this.props.fetchAuthorBooks(authorId);
      this.props.fetchSingleAuthor(authorId);
    }
  }

  render() {
    return (
      <div>
        Author
        <AuthorDetail author={this.props.author} />
        <BookList books={this.props.books} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books.all,
    author: state.authors.author
  };
}

function mapDispatchToPorops(dispatch) {
  return bindActionCreators(
    {
      fetchAuthorBooks: fetchAuthorBooks,
      fetchSingleAuthor: fetchSingleAuthor
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
