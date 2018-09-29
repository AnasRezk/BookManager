import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import {
  createCategory,
  fetchSingleCategory,
  initCategory,
  updateCategory
} from "../actions/categories_actions";
import { setEditMode } from "../actions/layout_actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { renderInput } from "./core/ui_helpers";
import { required } from "../utils/validations";

class CategoryManage extends Component {
  componentWillMount() {
    this.props.initCategory();
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    if (id) {
      this.props.fetchSingleCategory(id);
      this.props.setEditMode(true);
    }
  }

  componentDidUpdate(prevProps) {
    const categoryId = this.props.match.params.id;
    if (!categoryId) {
      this.props.initCategory();
    }
  }

  goBack = () => {
    this.props.history.goBack();
  };

  onFormSubmit = values => {
    if (this.props.layout.editMode) {
      this.props.updateCategory(values).then(() => {
        this.props.history.push("/");
      });
    } else {
      this.props.createCategory(values).then(() => {
        this.props.initCategory();
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
        <h3>Manage Category</h3>
        <form onSubmit={handleSubmit(this.onFormSubmit)}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <Field
              name="name"
              component={renderInput}
              type="text"
              validate={[required]}
            />
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
    initialValues: state.categories.category,
    layout: state.layout
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      createCategory: createCategory,
      fetchSingleCategory: fetchSingleCategory,
      initCategory: initCategory,
      updateCategory: updateCategory,
      setEditMode: setEditMode
    },
    dispatch
  );
}

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
CategoryManage = reduxForm({
  form: "CategoryForm", // a unique identifier for this form
  enableReinitialize: true
})(CategoryManage);

// You have to connect() to any reducers that you wish to connect to yourself
CategoryManage = connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryManage);

export default withRouter(CategoryManage);
