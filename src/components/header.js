import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export class Header extends Component {
    static propTypes = {
        editMode: PropTypes.bool.isRequired,
        onEditButtonClicked: PropTypes.func.isRequired
    }

    render() {
        const headerStyle = this.props.editMode ?
            { backgroundColor: '#923838', borderColor: '#923838' } :
            {};
        const editBtntext = this.props.editMode ? 'exit edit mode' : 'Edit Mode';
        const editBtnClass = this.props.editMode ?
            'btn btn-success' :
            'btn btn-danger';

        return (
            <nav className="navbar navbar-inverse" style={headerStyle}>
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand">
              Book Listing
                        </Link>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <Link to="/newbook">
                                <button className="btn btn-primary">New Book</button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/newauthor">
                                <button className="btn btn-primary">New Author</button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/newcategory">
                                <button className="btn btn-primary">New Category</button>
                            </Link>
                        </li>
                        <li className="nav-btn">
                            <a>
                                <button
                                onClick={() => this.onButtonClicked()}
                                className={editBtnClass}>
                                    {editBtntext}
                                </button>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }

  onButtonClicked = () => {
      this.props.onEditButtonClicked();
  };
}
