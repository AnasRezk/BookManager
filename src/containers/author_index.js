import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchAuthorBooks, initAllBook } from '../actions/books_actions';
import { fetchSingleAuthor, initAuthor } from '../actions/authors_actions';
import BookList from '../components/book_list';
import AuthorDetail from '../components/author_detail';

class AuthorIndex extends Component {
    static propTypes = {
        fetchBooks: PropTypes.func,
        match: PropTypes.object,
        fetchAuthorBooks: PropTypes.func.isRequired,
        fetchSingleAuthor: PropTypes.func.isRequired,
        initAllBook: PropTypes.func.isRequired,
        initAuthor: PropTypes.func.isRequired,
        perPage: PropTypes.number,
        pageCount: PropTypes.number,
        layout: PropTypes.object,
        books: PropTypes.array,
        author: PropTypes.object,
        loaded: PropTypes.bool
    }

    getId() {
        return this.props.match.params.id;
    }

    componentDidMount() {
        this.props.fetchAuthorBooks(this.getId(), 1, this.props.perPage);
        this.props.fetchSingleAuthor(this.getId());
    }

    componentDidUpdate(prevProps) {
        const prevId = prevProps.match.params.id;
        const nextId = this.getId();
        if(nextId !== prevId) {
            this.props.initAllBook();
            this.props.initAuthor();
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
                editMode={this.props.layout.editMode}/>
                <BookList
                onPageClicked={detectPageClicked}
                books={this.props.books}
                perPage={this.props.perPage}
                pageCount={this.props.pageCount}
                loaded={this.props.loaded}
                editMode={this.props.layout.editMode}/>
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
            fetchAuthorBooks,
            fetchSingleAuthor,
            initAllBook,
            initAuthor
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
