import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class Header extends Component {

    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand">
                            Book Listing
                        </Link>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <Link to="/anas">
                                <button className="btn btn-primary">New Book</button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/managePost">
                                <button className="btn btn-primary">New Auther</button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/managePost">
                                <button className="btn btn-primary">New Category</button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/managePost">
                                <button className="btn btn-danger">Edit Mode</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

