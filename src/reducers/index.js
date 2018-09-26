import { combineReducers } from 'redux';
import booksReducer from './reducer_books';
import AuthorsReducer from './reducer_authors';
import CategoriesReducer from './reducer_categories';

const rootReducer = combineReducers({
  books: booksReducer,
  authors: AuthorsReducer,
  categories: CategoriesReducer,
});

export default rootReducer;
