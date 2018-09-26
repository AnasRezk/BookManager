import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchSingleBook } from "../actions/books_actions";
import { fetchSingleAuthor } from "../actions/authors_actions";
import { fetchSingleCategory } from "../actions/categories_actions";


class BookDetail extends Component {

    componentWillMount() {
        const id = this.props.match.params.id;
        this.props.fetchSingleBook(id);
    }

    renderBook() {
        if (this.props.book) {
            this.props.fetchSingleAuthor(this.props.book.author);
            this.props.fetchSingleCategory(this.props.book.category);
            return (
                <div className="card">
                    <img src="../../assests/book-flat.png" width="120px" className="card-img-left" />
                    <div className="card-body">
                        <h5 className="card-title">
                            {this.props.book.title}
                        </h5>
                        <h6 className="card-subtitle mb-2">
                            <strong>By : </strong>
                            {this.props.author.name}
                        </h6>
                        <h6 className="card-subtitle mb-2">
                            <strong>Number of Pages : </strong>
                            {this.props.book.pagesNumber}
                        </h6>
                        <h6 className="card-subtitle mb-2">
                            <strong>Publish Year : </strong>
                            {this.props.book.publishYear}
                        </h6>
                        <h6 className="card-subtitle mb-2">
                            <strong>ISBN : </strong>
                            {this.props.book.isbn}
                        </h6>
                        <h6 className="card-subtitle mb-2">
                            <strong>Classification : </strong>
                            {this.props.category.name}
                        </h6>
                        <p className="card-text">{this.props.book.description}.</p>
                    </div>
                </div>
            )
        } else {
            return <div>loading...</div>
        }
    }

    render() {
        return (
            <div>
                {this.renderBook()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.books.book,
        author: state.authors.author,
        category: state.categories.category
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            fetchSingleBook: fetchSingleBook,
            fetchSingleAuthor: fetchSingleAuthor,
            fetchSingleCategory: fetchSingleCategory
        },
        dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);