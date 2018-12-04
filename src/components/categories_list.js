import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loader from '../utils/loader';

class CategoriesList extends Component {
    static propTypes = {
        categories: PropTypes.array.isRequired,
        selectedCategoryId: PropTypes.object
    };

    renderCategories() {
        if(this.props.categories.length === 0) {
            return <Loader />;
        }
        return this.props.categories.map(category => {
            if(category.name) {
                return (
                    <li key={category.id} className="list-group-item">
                        <Link to={`/category/${category.id}`}>
                            {category.name} {this.props.selectedCategoryId}
                        </Link>
                    </li>
                );
            }
            return null;
        });
    }

    render() {
        return (
            <ul className="list-group">
                <li className="list-group-item li__head">Categories</li>
                {this.renderCategories()}
            </ul>
        );
    }
}

export default CategoriesList;
