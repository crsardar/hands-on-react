import React from "react";

import { reduxForm, reset, Field } from "redux-form";

import { connect } from "react-redux";

import { actionStremCreate } from "../../actions/StreamsActions";

class StreamCreate extends React.Component {
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
    this.props.createStrem(formValues);

    /*
    This will call - onSubmitFail()
    throw Error("Just a testing");
    */
    return "SUCCEED";
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button
          className="ui button primary"
          type="submit"
          disabled={this.props.pristine || this.props.submitting}
        >
          Submit
        </button>
        <button
          className="ui button primary"
          onClick={this.props.reset}
          disabled={this.props.pristine || this.props.submitting}
        >
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
};

const onSubmitFail = () => {
  console.log("onSubmitFail");
};

const createdReduxForm = reduxForm({
  form: "FormStreamCreate",
  validate: validateForm,
  onSubmitSuccess,
  onSubmitFail,
})(StreamCreate);

export default connect(null, { createStrem: actionStremCreate })(
  createdReduxForm
);

/*
Redux-Form only need this, above is a combination of React-Redux and Redux-Form

export default reduxForm({
  form: "FormStreamCreate",
  validate: validateForm,
  onSubmitSuccess,
  onSubmitFail,
})(StreamCreate);
*/
