import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import App from './containers/app';
import BooksIndex from './containers/books_index';

export default (
    <Switch>
        <Route exact path="/" component={BooksIndex} />
        <Route path="/anas" render={() => (<h1>Anas</h1>)} />
    </Switch>
);
