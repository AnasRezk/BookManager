import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import {
    createCategory,
    fetchSingleCategory,
    initCategory,
    updateCategory
} from '../actions/categories_actions';
import { setEditMode } from '../actions/layout_actions';
import { renderInput } from './core/ui_helpers';
import { required } from '../utils/validations';

class CategoryManage extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
        layout: PropTypes.object.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        pristine: PropTypes.bool.isRequired,
        reset: PropTypes.func.isRequired,
        submitting: PropTypes.bool.isRequired,
        initCategory: PropTypes.func.isRequired,
        fetchSingleCategory: PropTypes.func.isRequired,
        updateCategory: PropTypes.func.isRequired,
        createCategory: PropTypes.func.isRequired,
        setEditMode: PropTypes.func.isRequired
    }


    componentDidMount() {
        this.props.initCategory();

        const { id } = this.props.match.params;
        if(id) {
            this.props.fetchSingleCategory(id);
            this.props.setEditMode(true);
        }
    }

    componentDidUpdate() {
        const categoryId = this.props.match.params.id;
        if(!categoryId) {
            this.props.initCategory();
        }
    }

  goBack = () => {
      this.props.history.goBack();
  };

  onFormSubmit = values => {
      if(this.props.layout.editMode) {
          this.props.updateCategory(values).then(() => {
              this.props.history.push('/');
          });
      } else {
          values.id = v4();
          this.props.createCategory(values).then(() => {
              this.props.initCategory();
          });
      }
  };

  render() {
      const { handleSubmit, pristine, reset, submitting } = this.props;

      return (
          <div className="panel panel-info">
              <div className="panel-heading">Category Manage</div>
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
        initialValues: state.categories.category,
        layout: state.layout
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            createCategory,
            fetchSingleCategory,
            initCategory,
            updateCategory,
            setEditMode
        },
        dispatch
    );
}

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
CategoryManage = reduxForm({
    form: 'CategoryForm',
    enableReinitialize: true
})(CategoryManage);

// You have to connect() to any reducers that you wish to connect to yourself
CategoryManage = connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryManage);

export default withRouter(CategoryManage);
