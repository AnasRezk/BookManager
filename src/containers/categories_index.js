import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchSingleCategory } from "../actions/categories_actions";
import { fetchCategoryBooks, initBook } from "../actions/books_actions";
import BookList from "../components/book_list";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class AuthorIndex extends Component {
  categoryId = null;
  componentWillMount() {
    this.categoryId = this.props.match.params.id;
    this.props.fetchCategoryBooks(this.categoryId, 1, this.props.perPage);
    this.props.fetchSingleCategory(this.categoryId);
  }

  componentDidUpdate(prevProps) {
    this.categoryId = this.props.match.params.id;
    if (this.categoryId !== prevProps.category.id) {
      this.props.initBook();
      this.props.fetchCategoryBooks(this.categoryId, 1, this.props.perPage);
      this.props.fetchSingleCategory(this.categoryId);
    }
  }

  renderEditButton(id) {
    if (this.props.layout.editMode) {
      return (
        <Link to={`/editcategory/${id}`}>
          <button className="btn btn-primary btn-sm">
            <i className="" />
            edit
          </button>
        </Link>
      );
    }
  }

  render() {
    const detectPageClicked = offset => {
      this.props.fetchCategoryBooks(
        this.categoryId,
        offset,
        this.props.perPage
      );
    };

    const { id, name } = this.props.category;
    return (
      <div>
        <h2>{name}</h2>
        {this.renderEditButton(id)}
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
    category: state.categories.category,
    perPage: state.books.perPage,
    pageCount: state.books.pageCount,
    loaded: state.books.loaded,
    layout: state.layout
  };
}

function mapDispatchToPorops(dispatch) {
  return bindActionCreators(
    {
      fetchCategoryBooks: fetchCategoryBooks,
      fetchSingleCategory: fetchSingleCategory,
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
