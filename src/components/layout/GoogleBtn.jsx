import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { GoogleLogin } from "react-google-login";

const CLIENT_ID = "710824792703-lh7q8iob2k9n192kokfdh5k2lnqlephn";

class GoogleBtn extends Component {
  login = (response) => {
    const { loginWithGoogle, getCartItems } = this.props;

    if (response && response.profileObj) {
      let userObj = {
        username: response.profileObj.name,
        password: "",
        email: response.profileObj.email,
      };

      if (response.accessToken) {
        loginWithGoogle(userObj)
          .then((res) => {
            if (res.success) {
              getCartItems();
            }
          })
          .catch((err) => {
            console.log("err", err);
          });
      }
    }
  };

  handleLoginFailure = (response) => {
    console.log("Failed to signin with google");
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
          isSignedIn={false}
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
  loginWithGoogle: dispatch.member.loginWithGoogle,
  getCartItems: dispatch.cart.getCartItems,
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(GoogleBtn)
);
