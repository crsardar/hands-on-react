import React from "react";

import { connect } from "react-redux";

import { increaseCounter, decreaseCounter } from "./CountActions";

class Controls extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            this.props.increase();
          }}
        >
          Click to increase counter
        </button>
        <br />
        <br />
        <button
          onClick={(e) => {
            e.stopPropagation();
            this.props.decrease();
          }}
        >
          Click to Decrease counter
        </button>
      </div>
    );
  }
}

const mapStateToProps = (reduxStateVal, componetOwnProps) => {
  // Do nothing
};

const connector = connect(mapStateToProps, {
  increase: increaseCounter,
  decrease: decreaseCounter,
});
export default connector(Controls);
