import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchBooks } from "../actions/books_actions";
import BookList from '../components/book_list';


class BooksIndex extends Component {

    componentWillMount() {
        this.props.fetchBooks();
    }

    render() {
        return (<BookList books={this.props.books} editMode={this.props.layout.editMode} />);
    }
}


function mapStateToProps(state) {
    return {
        books: state.books.all,
        layout: state.layout
    }
}

function mapDispatchToPorops(dispatch) {
    return bindActionCreators(
        {
            fetchBooks: fetchBooks
        }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToPorops)(BooksIndex);
