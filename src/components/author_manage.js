import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import {
    createAuthor,
    fetchSingleAuthor,
    initAuthor,
    updateAuthor
} from '../actions/authors_actions';
import { setEditMode } from '../actions/layout_actions';
import { renderInput, renderTextArea } from '../components/core/ui_helpers';
import { required } from '../utils/validations';

const validate = values => {
    const errors = {};
    if(!values.name) {
        errors.name = 'Required';
    }
    return errors;
};

class AuthorManage extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
        layout: PropTypes.object.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        pristine: PropTypes.bool.isRequired,
        reset: PropTypes.func.isRequired,
        submitting: PropTypes.bool.isRequired,
        fetchSingleAuthor: PropTypes.func.isRequired,
        initAuthor: PropTypes.func.isRequired,
        setEditMode: PropTypes.func.isRequired,
        updateAuthor: PropTypes.func.isRequired,
        createAuthor: PropTypes.func.isRequired
    }
    componentDidMount() {
        this.props.initAuthor();

        const { id } = this.props.match.params;
        if(id) {
            this.props.fetchSingleAuthor(id);
            this.props.setEditMode(true);
        }
    }

    componentDidUpdate() {
        const authorId = this.props.match.params.id;
        if(!authorId) {
            this.props.initAuthor();
        }
    }

  goBack = () => {
      this.props.history.goBack();
  };

  onFormSubmit = values => {
      if(this.props.layout.editMode) {
          this.props.updateAuthor(values).then(() => {
              this.props.history.push('/');
          });
      } else {
          values.id = v4();
          this.props.createAuthor(values).then(() => {
              this.props.initAuthor();
          });
      }
  };

  render() {
      const { handleSubmit, pristine, reset, submitting } = this.props;

      return (
          <div className="panel panel-info">
              <div className="panel-heading">Manage Author</div>
              <div className="panel-body">
                  <form onSubmit={handleSubmit(this.onFormSubmit)}>
                      <div className="form-group">
                          <label htmlFor="name">Name</label>
                          <Field
                          name="name"
                          component={renderInput}
                          type="text"
                          validate={[required]}/>
                      </div>

                      <div className="form-group">
                          <label htmlFor="jobTitle">Job Title</label>
                          <Field
                          name="jobTitle"
                          component={renderInput}
                          type="text"
                          validate={[required]}/>
                      </div>

                      <div className="form-group">
                          <label htmlFor="bio">Bio</label>
                          <Field name="bio" component={renderTextArea} type="text" />
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
        initialValues: state.authors.author,
        layout: state.layout
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            createAuthor,
            fetchSingleAuthor,
            initAuthor,
            updateAuthor,
            setEditMode
        },
        dispatch
    );
}

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
AuthorManage = reduxForm({
    form: 'AuthorForm',
    validate,
    enableReinitialize: true
})(AuthorManage);

// You have to connect() to any reducers that you wish to connect to yourself
AuthorManage = connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthorManage);

export default withRouter(AuthorManage);
