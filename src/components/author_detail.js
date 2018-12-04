import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loader from '../utils/loader';

export default class AuthorDetail extends Component {
    static propTypes = {
        editMode: PropTypes.bool.isRequired,
        author: PropTypes.object.isRequired
    }

    renderEditButton(id) {
        if(this.props.editMode) {
            return (
                <Link to={`/editauthor/${id}`}>
                    <button className="btn btn-primary btn-sm">
                        <i className="" />
            edit
                    </button>
                </Link>
            );
        }
        return null;
    }

    renderAuthor() {
        const { name, jobTitle, bio, id } = this.props.author;
        if(this.props.author.id) {
            return (
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        {this.renderEditButton(id)}
                        <h6 className="card-subtitle mb-2">{jobTitle}</h6>
                        <p className="card-text">{bio}</p>
                    </div>
                </div>
            );
        }
        return <Loader />;
    }

    render() {
        return <div>{this.renderAuthor()}</div>;
    }
}
