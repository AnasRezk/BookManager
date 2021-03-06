import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';
import Loader from '../utils/loader';

class BooksList extends Component {
    static propTypes = {
        editMode: PropTypes.bool.isRequired,
        pageCount: PropTypes.number.isRequired,
        loaded: PropTypes.bool.isRequired,
        books: PropTypes.array.isRequired,
        onPageClicked: PropTypes.func.isRequired
    };

    renderEditButton(book) {
        if(this.props.editMode) {
            return (
                <Link to={`/editbook/${book.id}`}>
                    <button className="btn btn-primary btn-sm">
                        <i className="" />
            edit
                    </button>
                </Link>
            );
        }
        return null;
    }

    renderPagenation() {
        if(this.props.pageCount > 1) {
            return (
                <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={<a href="">...</a>}
                breakClassName={'break-me'}
                pageCount={this.props.pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={this.handlePageClick}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active'}/>
            );
        }
        return null;
    }

    renderBooks() {
        if(!this.props.loaded) {
            return <Loader />;
        }
        if(this.props.loaded && this.props.books.length === 0) {
            return (
                <div className="alert alert-info" role="alert">
                    <strong>Heads up!</strong> There is no books.
                </div>
            );
        }

        return this.props.books.map(book => {
            if(book.title) {
                return (
                    <li key={book.id} className="list-group-item media">
                        <span className="media-left">
                            <img
                            src="../../assests/book-flat.png"
                            width="120px"
                            className="media-object"/>
                        </span>
                        <div className="media-body">
                            <Link to={`/book/${book.id}`}>{book.title}</Link>
                            {this.renderEditButton(book)}
                            <p>{book.description}</p>
                            <small>{book.categories}</small>
                        </div>
                    </li>
                );
            }
            return null;
        });
    }

  handlePageClick = data => {
      const pageNumber = data.selected + 1;
      this.props.onPageClicked(pageNumber);
  };

  render() {
      return (
          <div>
              {this.renderBooks()}
              {this.renderPagenation()}
          </div>
      );
  }
}

export default BooksList;
