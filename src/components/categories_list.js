import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CategoriesList extends Component {

    renderCategories() {
        if (this.props.categories.length === 0) {
            return <div>loading....</div>
        }
        return this.props.categories.map((category) => {
            if (category.name) {
                return (
                    <li key={category.id} className="list-group-item">
                        <Link to={`/details/${category.id}`}>
                            {category.name}
                        </Link>
                    </li>
                );
            }
        });
    }

    render() {
        return (
            <div>
                <h5>Categories</h5>
                {this.renderCategories()}
            </div>

        );
    }
}

export default CategoriesList;
