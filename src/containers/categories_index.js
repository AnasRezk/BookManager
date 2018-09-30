import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  fetchSingleCategory,
  initCategory
} from "../actions/categories_actions";
import { fetchCategoryBooks, initAllBook } from "../actions/books_actions";
import BookList from "../components/book_list";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class CategoriesIndex extends Component {
  getId() {
    return this.props.match.params.id;
  }

  componentWillMount() {
    this.props.fetchCategoryBooks(this.getId(), 1, this.props.perPage);
    this.props.fetchSingleCategory(this.getId());
  }

  componentDidUpdate(prevProps) {
    const prevId = prevProps.match.params.id;
    const nextId = this.getId();
    if (nextId !== prevId) {
      this.props.initAllBook();
      this.props.initCategory();
      this.props.fetchCategoryBooks(nextId, 1, this.props.perPage);
      this.props.fetchSingleCategory(nextId);
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
      this.props.fetchCategoryBooks(this.getId(), offset, this.props.perPage);
    };

    const { id, name } = this.props.category;
    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-body">
            <strong>{name}</strong>
          </div>
        </div>
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
      initAllBook: initAllBook,
      initCategory: initCategory
    },
    dispatch
  );
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToPorops
  )(CategoriesIndex)
);
