import React from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';

import BooksIndex from './containers/books_index';
import AuthorIndex from './containers/author_index';
import CategoriesIndex from './containers/categories_index';
import BookDetail from './components/book_detail';
import BookManage from './components/book_manage';

export default (
    <Switch>
        <Route exact path="/" component={BooksIndex} />
        <Route path="/anas" render={() => (<h1>Anas</h1>)} />
        <Route path={`/book/:id`} component={BookDetail} />
        <Route path={`/newbook`} component={BookManage} />
        <Route path={`/editbook/:id`} component={BookManage} />
        <Route path={`/author/:id`} component={AuthorIndex} />
        <Route path={`/category/:id`} component={CategoriesIndex} />
    </Switch>
);
