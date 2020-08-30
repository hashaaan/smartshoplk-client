import React, { Component } from "react";
//import { loginUser } from "../actions/userActions";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import NavBar from "../components/layout/NavBar";
import GoogleBtn from "../components/layout/GoogleBtn";

class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: {},
    loading: false,
  };

  componentDidMount() {
    const { authenticated } = this.props;
    if (authenticated) {
      this.redirect();
    }
  }

  componentWillReceiveProps(nextProps) {
    const { authenticated } = nextProps;
    if (authenticated) {
      this.redirect();
    }
  }

  validateForm = () => {
    let errObj = {};

    if (!this.state.email) {
      errObj.email = "Email address is required!";
    }
    if (!this.state.password) {
      errObj.password = "Password is required!";
    }

    this.setState({ errors: errObj });
    return errObj;
  };

  redirect = () => {
    const { history } = this.props;
    history.push("/");
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { loginUser } = this.props;

    let errObj = this.validateForm();
    if (!Object.keys(errObj).length > 0) {
      const formData = {
        email: this.state.email,
        password: this.state.password,
      };
      this.setState({ loading: true });
      //loginUser(formData, this.redirect);
    } else {
      console.log(errObj);
    }
  };

  render() {
    const { isFetching, error } = this.props;
    return (
      <>
        <NavBar />
        <div className="container">
          <div className="text-center" data-gr-c-s-loaded="true">
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

              <h1 className="h3 mb-3 font-weight-normal">Login</h1>
              <div
                style={{ color: "red", fontSize: "12px", marginBottom: "10px" }}
              >
                {error}
              </div>
              <label htmlFor="inputEmail" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                id="inputEmail"
                className="form-control"
                placeholder="Email address"
                required=""
                autoFocus=""
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
                required=""
                onChange={(e) => this.setState({ password: e.target.value })}
              />
              <br />
              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> Remember me
                </label>
              </div>
              <button
                className="btn btn-lg btn-primary btn-block"
                type="submit"
              >
                {isFetching ? "Loading..." : "LOGIN"}
              </button>
              <br />
              <GoogleBtn />
              <p className="mt-5 mb-3 text-muted">© 2020</p>
            </form>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  authenticated: state.member.authenticated,
});

const mapDispatchToProps = (dispatch) => ({});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
