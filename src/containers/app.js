import React, { Component } from 'react';
import routes from '../routes';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Header } from '../components/header';
import AuthorsList from '../components/authors_list';
import CategoriesList from '../components/categories_list';
import { fetchAuthors } from "../actions/authors_actions";
import { fetchCategories } from "../actions/categories_actions";

class App extends Component {

  componentWillMount() {
    this.props.fetchCategories();
    this.props.fetchAuthors();
  }

  render() {
    return (
      <Router>
        <div>
          <Header />

          <div className="row">
            <div className="col-md-3">
              <CategoriesList categories={this.props.categories} />
              <AuthorsList authors={this.props.authors} />
            </div>
            <div className="col-md-9">
              {routes}
            </div>
          </div>

        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories.all,
    authors: state.authors.all,
  }
}

function mapDispatchToPorops(dispatch) {
  return bindActionCreators({ fetchCategories: fetchCategories, fetchAuthors: fetchAuthors }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToPorops)(App);
