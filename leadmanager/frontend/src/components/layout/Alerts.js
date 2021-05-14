import React, { Component } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    // 1. ERROR REDUCER
    if (error !== prevProps.error) {
      // 1.a Name Error
      if (error.msg.name) {
        alert.error(`Name: ${error.msg.name.join()}`);
      }
      // 1.b Email Error
      if (error.msg.email) {
        alert.error(`Email: ${error.msg.email.join()}`);
      }
      // 1.c Message Error
      if (error.msg.message) {
        alert.error(`Message: ${error.msg.message.join()}`);
      }
      // 1.d Login Error
      if (error.msg.non_field_errors) {
        alert.error(error.msg.non_field_errors.join());
      }
      // 1.d User already exist
      if (error.msg.username) {
        alert.error(error.msg.username.join());
      }
    }
    // 2. MESSAGE REDUCER
    if (message !== prevProps.message) {
      // Message delete Lead
      if (message.deleteLead) alert.success(message.deleteLead);
      // Message added lead
      if (message.addLead) alert.success(message.addLead);
      // Message password Not Match
      if (message.passwordNotMatch) alert.error(message.passwordNotMatch);
    }
  }
  render() {
    return <></>;
  }
}

const mapStateToProps = (state) => ({
  error: state.errors,
  message: state.messages,
});

export default connect(mapStateToProps)(withAlert()(Alerts));
