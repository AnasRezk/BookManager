import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import {
  createBook,
  fetchSingleBook,
  initBook,
  updateBook
} from "../actions/books_actions";
import { setEditMode } from "../actions/layout_actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  renderInput,
  renderTextArea,
  renderSelect
} from "../components/core/ui_helpers";
import { normalizeInt } from "../utils/normalizeInt";
import { required } from "../utils/validations";
import { v4 } from "uuid";

class BookManage extends Component {
  componentWillMount() {
    this.props.initBook();
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    if (id) {
      this.props.fetchSingleBook(id);
      this.props.setEditMode(true);
    }
  }

  componentDidUpdate(prevProps) {
    const bookId = this.props.match.params.id;
    if (!bookId) {
      this.props.initBook();
    }
  }

  goBack = () => {
    this.props.history.goBack();
  };

  onFormSubmit = values => {
    if (this.props.layout.editMode) {
      this.props.updateBook(values).then(() => {
        this.props.history.push("/");
      });
    } else {
      values.id = v4();
      this.props.createBook(values).then(() => {
        this.props.initBook();
      });
    }
  };

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props; // No fields prop

    return (
      <div>
        <button onClick={this.goBack} className="btn btn-xs btn-default">
          Back
        </button>
        <h3>Manage Book</h3>
        <form onSubmit={handleSubmit(this.onFormSubmit)}>
          <div className="form-group">
            <label htmlFor="title">title</label>
            <Field
              name="title"
              component={renderInput}
              type="text"
              validate={[required]}
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Category</label>
            <Field
              name="category"
              placeholder="Select a Category..."
              component={field =>
                renderSelect(field, this.props.categories, "id", "name")
              }
              validate={[required]}
            />
          </div>

          <div className="form-group">
            <label htmlFor="author">Author</label>
            <Field
              name="author"
              placeholder="Select an Author..."
              component={field =>
                renderSelect(field, this.props.authors, "id", "name")
              }
              validate={[required]}
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <Field name="description" component={renderTextArea} type="text" />
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
              normalize={value => normalizeInt(value, null)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="publishYear">Publish Year</label>
            <Field
              name="publishYear"
              component={renderInput}
              placeholder="Publish Year"
              normalize={value => normalizeInt(value, 4)}
              type="text"
            />
          </div>

          <div className="form-group">
            <label htmlFor="image">Image Url</label>
            <Field name="image" component={renderInput} type="text" />
          </div>

          <button
            className="btn btn-primary"
            type="submit"
            disabled={pristine || submitting}
          >
            Submit
          </button>
          <button
            className="btn btn-danger"
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
          >
            Clear
          </button>
        </form>
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
      createBook: createBook,
      fetchSingleBook: fetchSingleBook,
      initBook: initBook,
      updateBook: updateBook,
      setEditMode: setEditMode
    },
    dispatch
  );
}

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
BookManage = reduxForm({
  form: "BookForm", // a unique identifier for this form
  enableReinitialize: true
})(BookManage);

// You have to connect() to any reducers that you wish to connect to yourself
BookManage = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookManage);

export default withRouter(BookManage);
