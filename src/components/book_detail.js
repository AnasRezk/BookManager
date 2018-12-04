import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchSingleBook } from '../actions/books_actions';
import { fetchSingleAuthor } from '../actions/authors_actions';
import {
    fetchSingleCategory,
    initCategory
} from '../actions/categories_actions';
import Loader from '../utils/loader';

class BookDetail extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        layout: PropTypes.object.isRequired,
        category: PropTypes.object.isRequired,
        author: PropTypes.object.isRequired,
        book: PropTypes.object.isRequired,
        fetchSingleBook: PropTypes.func.isRequired,
        initCategory: PropTypes.func.isRequired,
        fetchSingleAuthor: PropTypes.func.isRequired,
        fetchSingleCategory: PropTypes.func.isRequired
    };

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchSingleBook(id);
        this.props.initCategory();
    }

    renderEditButton(id) {
        if(this.props.layout.editMode) {
            return (
                <Link to={`/editbook/${id}`}>
                    <button className="btn btn-primary btn-sm">
                        <i className="" />
            edit
                    </button>
                </Link>
            );
        }
        return null;
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

        if(this.props.book.id) {
            this.props.fetchSingleAuthor(author);
            this.props.fetchSingleCategory(category);
            return (
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <strong>Book Card</strong>
                    </div>
                    <div className="panel-body">
                        <div className="card">
                            <img
                            src="../../assests/book-flat.png"
                            width="120px"
                            className="card-img-left"/>
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
                                    {this.props.category.name ? this.props.category.name : ''}
                                </h6>
                                <p className="card-text">{description}.</p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        return <Loader />;
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
            fetchSingleBook,
            fetchSingleAuthor,
            fetchSingleCategory,
            initCategory
        },
        dispatch
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BookDetail);
