import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { createBook, fetchSingleBook, initBook, updateBook } from "../actions/books_actions";
import { setEditMode } from "../actions/layout_actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { renderInput, renderTextArea } from '../components/core/ui_helpers'

const validate = values => {
    const errors = {};
    if (!values.title) {
        errors.title = 'Required'
    }
    return errors
};

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

    onFormSubmit = (values) => {
        if (this.props.layout.editMode) {
            this.props.updateBook(values).then(() => {
                this.props.history.push('/');
            });
        } else {
            this.props.createBook(values).then(() => {
                this.props.initBook();
            });
        }
    };

    render() {

        const { handleSubmit, pristine, reset, submitting } = this.props;      // No fields prop

        return (
            <div>
                <button onClick={this.goBack} className="btn btn-xs btn-default">Back</button>
                <h3>Manage Book</h3>
                <form onSubmit={handleSubmit(this.onFormSubmit)}>

                    <div className="form-group">
                        <label htmlFor="title">title</label>
                        <Field
                            name="title"
                            component={renderInput}
                            type="text" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <Field name="category" component="select" className="form-control">
                            <option value="">Select a author...</option>
                            {this.props.categories.map(category => (
                                <option value={category.id} key={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </Field>
                    </div>

                    <div className="form-group">
                        <label htmlFor="author">Author</label>
                        <Field name="author" component="select" className="form-control">
                            <option value="">Select a category...</option>
                            {this.props.authors.map(author => (
                                <option value={author.id} key={author.id}>
                                    {author.name}
                                </option>
                            ))}
                        </Field>
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">content</label>
                        <Field
                            name="description"
                            component={renderTextArea}
                            type="text" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="isbn">ISBN</label>
                        <Field
                            name="isbn"
                            component={renderInput}
                            type="text" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="pagesNumber">No. of Pages</label>
                        <Field
                            name="pagesNumber"
                            component={renderInput}
                            type="text" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="publishYear">Publish Year</label>
                        <Field
                            name="publishYear"
                            component={renderInput}
                            type="text" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="image">Image Url</label>
                        <Field
                            name="image"
                            component={renderInput}
                            type="text" />
                    </div>

                    <button className="btn btn-primary" type="submit"
                        disabled={pristine || submitting}>
                        Submit
                    </button>
                    <button className="btn btn-danger" type="button" disabled={pristine || submitting} onClick={reset}>
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
    return bindActionCreators({
        createBook: createBook,
        fetchSingleBook: fetchSingleBook,
        initBook: initBook,
        updateBook: updateBook,
        setEditMode: setEditMode
    }, dispatch);
}


// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
BookManage = reduxForm({
    form: 'BookForm', // a unique identifier for this form
    validate,
    enableReinitialize: true
})(BookManage);

// You have to connect() to any reducers that you wish to connect to yourself
BookManage = connect(
    mapStateToProps,
    mapDispatchToProps
)(BookManage);

export default withRouter(BookManage);

