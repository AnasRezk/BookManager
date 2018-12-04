import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import {
    createBook,
    fetchSingleBook,
    initBook,
    updateBook
} from '../actions/books_actions';
import { setEditMode } from '../actions/layout_actions';
import {
    renderInput,
    renderTextArea,
    renderSelect
} from '../components/core/ui_helpers';
import { normalizeInt } from '../utils/normalizeInt';
import { required } from '../utils/validations';

class BookManage extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
        authors: PropTypes.array.isRequired,
        categories: PropTypes.array.isRequired,
        layout: PropTypes.object.isRequired,
        initBook: PropTypes.func.isRequired,
        fetchSingleBook: PropTypes.func.isRequired,
        updateBook: PropTypes.func.isRequired,
        createBook: PropTypes.func.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        pristine: PropTypes.bool.isRequired,
        reset: PropTypes.func.isRequired,
        submitting: PropTypes.bool.isRequired,
        setEditMode: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.initBook();
        const { id } = this.props.match.params;
        if(id) {
            this.props.fetchSingleBook(id);
            this.props.setEditMode(true);
        }
    }

    componentDidUpdate() {
        const bookId = this.props.match.params.id;
        if(!bookId) {
            this.props.initBook();
        }
    }

  goBack = () => {
      this.props.history.goBack();
  };

  onFormSubmit = values => {
      if(this.props.layout.editMode) {
          this.props.updateBook(values).then(() => {
              this.props.history.push('/');
          });
      } else {
          values.id = v4();
          this.props.createBook(values).then(() => {
              this.props.initBook();
          });
      }
  };

  render() {
      const { handleSubmit, pristine, reset, submitting } = this.props;

      return (
          <div className="panel panel-info">
              <div className="panel-heading">Manage Book</div>
              <div className="panel-body">
                  <form onSubmit={handleSubmit(this.onFormSubmit)}>
                      <div className="form-group">
                          <label htmlFor="title">title</label>
                          <Field
                          name="title"
                          component={renderInput}
                          type="text"
                          validate={[required]}/>
                      </div>

                      <div className="form-group">
                          <label htmlFor="category">Category</label>
                          <Field
                          name="category"
                          placeholder="Select a Category..."
                          component={field =>
                              renderSelect(field, this.props.categories, 'id', 'name')
                          }
                          validate={[required]}/>
                      </div>

                      <div className="form-group">
                          <label htmlFor="author">Author</label>
                          <Field
                          name="author"
                          placeholder="Select an Author..."
                          component={field =>
                              renderSelect(field, this.props.authors, 'id', 'name')
                          }
                          validate={[required]}/>
                      </div>

                      <div className="form-group">
                          <label htmlFor="description">Description</label>
                          <Field
                          name="description"
                          component={renderTextArea}
                          type="text"/>
                      </div>

                      <div className="form-group">
                          <label htmlFor="isbn">ISBN</label>
                          <Field name="isbn" component={renderInput} type="text" />
                      </div>

                      <div className="form-group">
                          <label htmlFor="pagesNumber">No. of Pages</label>
                          <Field
                          validate={[required]}
                          name="pagesNumber"
                          component={renderInput}
                          type="text"
                          placeholder="No. of Pages"
                          normalize={value => normalizeInt(value, null)}/>
                      </div>

                      <div className="form-group">
                          <label htmlFor="publishYear">Publish Year</label>
                          <Field
                          name="publishYear"
                          component={renderInput}
                          placeholder="Publish Year"
                          normalize={value => normalizeInt(value, 4)}
                          type="text"/>
                      </div>

                      <div className="form-group">
                          <label htmlFor="image">Image Url</label>
                          <Field name="image" component={renderInput} type="text" />
                      </div>

                      <div className="pull-right">
                          <button
                          className="btn btn-danger"
                          type="button"
                          disabled={pristine || submitting}
                          onClick={reset}>
                Clear
                          </button>

                          <button
                          className="btn btn-primary ml10"
                          type="submit"
                          disabled={pristine || submitting}>
                Submit
                          </button>
                      </div>
                  </form>
              </div>
          </div>
      );
  }
}

function mapStateToProps(state) {
    return {
        initialValues: state.books.book,
        categories: state.categories.all,
        authors: state.authors.all,
        layout: state.layout
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            createBook,
            fetchSingleBook,
            initBook,
            updateBook,
            setEditMode
        },
        dispatch
    );
}

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
BookManage = reduxForm({
    form: 'BookForm',
    enableReinitialize: true
})(BookManage);

// You have to connect() to any reducers that you wish to connect to yourself
BookManage = connect(
    mapStateToProps,
    mapDispatchToProps
)(BookManage);

export default withRouter(BookManage);
