import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import routes from '../routes';

import { Header } from '../components/header';
import AuthorsList from '../components/authors_list';
import CategoriesList from '../components/categories_list';
import { fetchAuthors } from '../actions/authors_actions';
import { fetchCategories } from '../actions/categories_actions';
import { setEditMode } from '../actions/layout_actions';

class App extends Component {
    static propTypes = {
        layout: PropTypes.object.isRequired,
        categoryLoaded: PropTypes.bool,
        categories: PropTypes.array.isRequired,
        authorLoaded: PropTypes.bool.isRequired,
        authors: PropTypes.array.isRequired,
        fetchCategories: PropTypes.func.isRequired,
        fetchAuthors: PropTypes.func.isRequired,
        setEditMode: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.fetchCategories();
        this.props.fetchAuthors();
    }

    render() {
        const detectEditChange = () => {
            this.props.layout.editMode ?
                this.props.setEditMode(false) :
                this.props.setEditMode(true);
        };

        return (
            <Router>
                <div>
                    <Header
                    onEditButtonClicked={detectEditChange}
                    editMode={this.props.layout.editMode} />

                    <div className="row">
                        <div className="col-md-3">
                            <CategoriesList
                            loaded={this.props.categoryLoaded}
                            categories={this.props.categories} />
                            <AuthorsList
                            loaded={this.props.authorLoaded}
                            authors={this.props.authors} />
                        </div>
                        <div className="col-md-9">{routes}</div>
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
        authorLoaded: state.authors.loaded,
        categoryLoaded: state.categories.loaded,
        layout: state.layout
    };
}

function mapDispatchToPorops(dispatch) {
    return bindActionCreators(
        {
            fetchCategories,
            fetchAuthors,
            setEditMode
        },
        dispatch
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToPorops
)(App);
