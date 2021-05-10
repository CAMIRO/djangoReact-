import React, { Component } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error, alert } = this.props;
    if (error !== prevProps.error) {
      // Name Error
      if (error.msg.name) {
        alert.error(`Name: ${error.msg.name.join()}`);
      }
      // Email Error
      if (error.msg.email) {
        alert.error(`Email: ${error.msg.email.join()}`);
      }
      // Message Error
      if (error.msg.message) {
        alert.error(`Message: ${error.msg.message.join()}`);
      }
    }
  }
  render() {
    return <></>;
  }
}

const mapStateToProps = (state) => ({
  error: state.errors,
});

export default connect(mapStateToProps)(withAlert()(Alerts));