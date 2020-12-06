import React from "react";

import { reduxForm, reset, Field } from "redux-form";

var onSucceed;
var onFailed;

class Stream extends React.Component {
  renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };
  /* "{...input}" neams - map all matching Key-Values */

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);

    /*
    This will call - onSubmitFail()
    throw Error("Just a testing");
    */
    return "SUCCEED";
  };

  render() {
    onSucceed = this.props.onSucceed;
    onFailed = this.props.onFailed;

    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field
          name="title"
          component={this.renderInput}
          label={this.props.label1}
        />
        <Field
          name="description"
          component={this.renderInput}
          label={this.props.label2}
        />
        <button className="ui button primary" type="submit">
          Submit
        </button>
        <button className="ui button primary" onClick={this.props.reset}>
          Reset Values
        </button>
      </form>
    );
  }
}

const validateForm = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must enter a title";
  }

  if (!formValues.description) {
    errors.description = "You must enter a description";
  }

  return errors;
};

const onSubmitSuccess = (result, dispatch) => {
  dispatch(reset("FormStreamCreate"));
  if (onSucceed) {
    onSucceed();
  }
};

const onSubmitFail = (error, dispatch) => {
  if (onFailed) {
    onFailed();
  }
};

export default reduxForm({
  form: "FormStreamCreate",
  enableReinitialize: true,
  validate: validateForm,
  onSubmitSuccess,
  onSubmitFail,
})(Stream);
