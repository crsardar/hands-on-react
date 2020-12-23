import React from "react";

import { connect } from "react-redux";

class Counter extends React.Component {
  render() {
    return (
      <div>
        <div>{`Count = ${this.props.count}`}</div>
      </div>
    );
  }
}

const mapStateToProps = (redusStateVal, componetOwnVal) => {
  return { count: redusStateVal.counterVal.count };
};
export default connect(mapStateToProps)(Counter);
