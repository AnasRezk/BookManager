import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import booksReducer from './reducer_books';
import AuthorsReducer from './reducer_authors';
import CategoriesReducer from './reducer_categories';
import LayoutReducer from './reducer_layout';

const rootReducer = combineReducers({
  books: booksReducer,
  authors: AuthorsReducer,
  categories: CategoriesReducer,
  form: formReducer,
  layout: LayoutReducer
});

export default rootReducer;
