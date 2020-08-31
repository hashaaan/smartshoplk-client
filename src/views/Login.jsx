import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { Fade } from "react-awesome-reveal";
import NavBar from "../components/layout/NavBar";
import GoogleBtn from "../components/layout/GoogleBtn";

class Login extends Component {
  state = {
    email: "",
    password: "",
    loading: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { loginUser } = this.props;

    const formData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.setState({ loading: true });
    loginUser(formData)
      .then((res) => {
        if (res.success) {
          this.setState({ loading: false });
        }
      })
      .catch((err) => {
        if (err) {
          this.setState({ loading: false });
        }
      });
  };

  render() {
    const { error } = this.props;
    const { loading } = this.state;
    return (
      <>
        <NavBar />
        <div className="container">
          <div className="text-center" data-gr-c-s-loaded="true">
            <Fade>
              <form
                className="form-signin"
                style={{ marginTop: "40px" }}
                onSubmit={this.handleSubmit}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="72"
                  height="72"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="d-block mx-auto mb-4"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="14.31" y1="8" x2="20.05" y2="17.94"></line>
                  <line x1="9.69" y1="8" x2="21.17" y2="8"></line>
                  <line x1="7.38" y1="12" x2="13.12" y2="2.06"></line>
                  <line x1="9.69" y1="16" x2="3.95" y2="6.06"></line>
                  <line x1="14.31" y1="16" x2="2.83" y2="16"></line>
                  <line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>
                </svg>

                <h1 className="h3 mb-3 font-weight-normal">Login with Email</h1>
                <div
                  style={{
                    color: "red",
                    fontSize: "12px",
                    marginBottom: "10px",
                  }}
                >
                  {error && error}
                </div>
                <label htmlFor="inputEmail" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  id="inputEmail"
                  className="form-control"
                  placeholder="Email address"
                  autoFocus={true}
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
                <br />
                <label htmlFor="inputPassword" className="sr-only">
                  Password
                </label>
                <input
                  type="password"
                  id="inputPassword"
                  className="form-control"
                  placeholder="Password"
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
                <br />
                <div className="checkbox mb-3">
                  <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                  </label>
                </div>
                <button className="btn btn-primary btn-block" type="submit">
                  {loading ? "Loading..." : "LOGIN"}
                </button>
                <br />
                <GoogleBtn />
                <br />
                <div className="mt-2">
                  Don't have an account? <Link to="/signup">Sign Up</Link>
                </div>
                <p className="mt-5 mb-3 text-muted">smartshop.lk © 2020</p>
              </form>
            </Fade>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  authenticated: state.member.authenticated,
  error: state.member.error,
});

const mapDispatchToProps = (dispatch) => ({
  loginUser: dispatch.member.loginWithEmail,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
