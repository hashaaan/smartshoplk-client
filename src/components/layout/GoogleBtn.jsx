import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { GoogleLogin } from "react-google-login";

const CLIENT_ID = "710824792703-lh7q8iob2k9n192kokfdh5k2lnqlephn";

class GoogleBtn extends Component {
  login = (response) => {
    const { memberLogin } = this.props;

    if (response.accessToken) {
      memberLogin(response)
        .then((res) => {
          console.log("res", res);
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
  };

  handleLoginFailure = (response) => {
    alert("Failed to log in");
  };

  render() {
    return (
      <div>
        <GoogleLogin
          clientId={CLIENT_ID}
          onSuccess={this.login}
          onFailure={this.handleLoginFailure}
          scope={"profile email openid"}
          cookiePolicy={"single_host_origin"}
          responseType="code,token"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  member: state.member || {},
  authenticated: state.member.authenticated,
});

const mapDispatchToProps = (dispatch) => ({
  memberLogin: dispatch.member.login,
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(GoogleBtn)
);
