import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BooksList extends Component {


    renderBooks() {
        if (this.props.books.length === 0) {
            return <div>loading....</div>
        }
        return this.props.books.map((book) => {
            if (book.title) {
                return (
                    <li key={book.id} className="list-group-item media">
                        <span className="media-left">
                            <img src="../../assests/book-flat.png" width="120px" className="media-object" />
                        </span>
                        <div className="media-body">
                            <Link to={`/book/${book.id}`}>
                                {book.title}
                            </Link>
                            <p className="mb-1">{book.description}</p>
                            <small>{book.categories}</small>
                        </div>
                    </li>
                );
            }
        });
    }

    render() {
        return (
            <div>
                {this.props.books.length}
                {this.renderBooks()}
            </div>

        );
    }
}

export default BooksList;
