import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { createAuthor, fetchSingleAuthor, initAuthor, updateAuthor } from "../actions/authors_actions";
import { setEditMode } from "../actions/layout_actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { renderInput, renderTextArea } from '../components/core/ui_helpers'

const validate = values => {
    const errors = {};
    if (!values.name) {
        errors.name = 'Required'
    }
    return errors
};

class AuthorManage extends Component {

    componentWillMount() {
        this.props.initAuthor();
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        if (id) {
            this.props.fetchSingleAuthor(id);
            this.props.setEditMode(true);
        }
    }

    componentDidUpdate(prevProps) {
        const authorId = this.props.match.params.id;
        if (!authorId) {
            this.props.initAuthor();
        }
    }

    goBack = () => {
        this.props.history.goBack();
    };

    onFormSubmit = (values) => {
        if (this.props.layout.editMode) {
            this.props.updateAuthor(values).then(() => {
                this.props.history.push('/');
            });
        } else {
            this.props.createAuthor(values).then(() => {
                this.props.initAuthor();
            });
        }
    };

    render() {

        const { handleSubmit, pristine, reset, submitting } = this.props;      // No fields prop

        return (
            <div>
                <button onClick={this.goBack} className="btn btn-xs btn-default">Back</button>
                <h3>Manage Author</h3>
                <form onSubmit={handleSubmit(this.onFormSubmit)}>

                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <Field
                            name="name"
                            component={renderInput}
                            type="text" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="jobTitle">Job Title</label>
                        <Field
                            name="jobTitle"
                            component={renderInput}
                            type="text" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="bio">Bio</label>
                        <Field
                            name="bio"
                            component={renderTextArea}
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
        initialValues: state.authors.author,
        layout: state.layout
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        createAuthor: createAuthor,
        fetchSingleAuthor: fetchSingleAuthor,
        initAuthor: initAuthor,
        updateAuthor: updateAuthor,
        setEditMode: setEditMode
    }, dispatch);
}


// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
AuthorManage = reduxForm({
    form: 'AuthorForm', // a unique identifier for this form
    validate,
    enableReinitialize: true
})(AuthorManage);

// You have to connect() to any reducers that you wish to connect to yourself
AuthorManage = connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthorManage);

export default withRouter(AuthorManage);

