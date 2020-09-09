import axios from "axios";
import { notification } from "antd";

const firstLetterUC = (string) => {
  if (string) return string.charAt(0).toUpperCase() + string.slice(1);
};

export default {
  state: {}, // initial state

  /**
   * Reducers
   */
  reducers: {
    setUserDetails(state, payload) {
      return {
        ...state,
        ...payload,
      };
    },

    setAuthenticated(state, payload) {
      return {
        ...state,
        authenticated: payload,
      };
    },

    setError(state, payload) {
      return {
        ...state,
        error: payload,
      };
    },

    resetUser() {
      return {};
    },
  },

  /**
   * Effects/Actions
   */
  effects: (dispatch) => ({
    /**
     * Sign Up with Email
     *
     * @param {obj} formData - data from form
     * @return {Promise}
     */
    signupWithEmail(formData) {
      this.setError(null);
      return new Promise(async (resolve, reject) => {
        axios
          .post(`${process.env.REACT_APP_API_URL}users`, formData)
          .then((res) => {
            //console.log(res);
            if (res.data.token) {
              localStorage.setItem("access_token", res.data.token);
              this.setUserDetails(res.data.user);
              this.setAuthenticated(true);
              return resolve({ success: true });
            }
            resolve({ success: false });
          })
          .catch((err) => {
            if (err.response) {
              console.log("Error", err.response);
              if (err.response.status === 500) {
                notification["error"]({
                  message: "Signup Failed..!",
                  description: firstLetterUC(err.response.data.message),
                });
              } else {
                this.setError(firstLetterUC(err.response.data.message));
              }
              this.setAuthenticated(false);
            }
            reject(err);
          });
      });
    },

    /**
     * Get the current Member's Details
     *
     * @returns {Promise}
     */
    getMemberData() {
      return new Promise(async (resolve, reject) => {
        if (localStorage.access_token) {
          axios
            .get(`${process.env.REACT_APP_API_URL}users`, {
              headers: {
                Authorization: localStorage.access_token,
              },
            })
            .then((res) => {
              // console.log("res", res);
              // set user data redux store
              if (res.data) {
                this.setUserDetails(res.data.user);
                resolve({ success: true });
              }
              resolve({ success: false });
            })
            .catch((err) => {
              if (err.response) {
                console.log("Error", err.response);
                if (err.response.status === 500) {
                  notification["error"]({
                    message: "Signup Failed..!",
                    description: firstLetterUC(err.response.data.message),
                  });
                }
              }
              reject(err);
            });
        }
      });
    },

    /**
     * Login with Email
     *
     * @param {obj} formData - data from login form
     * @return {Promise}
     */
    loginWithEmail(formData) {
      return new Promise(async (resolve, reject) => {
        this.setError(null);
        //console.log(formData);
        axios
          .post(`${process.env.REACT_APP_API_URL}users/signin`, formData)
          .then((res) => {
            //console.log("res", res);
            if (res.data.token) {
              localStorage.setItem("access_token", res.data.token);
              this.getMemberData();
              this.setAuthenticated(true);
              return resolve({ success: true });
            }
            resolve({ success: false });
          })
          .catch((err) => {
            if (err.response) {
              console.log("Error", err.response);
              if (err.response.status === 500) {
                notification["error"]({
                  message: "Signup Failed..!",
                  description: firstLetterUC(err.response.data.message),
                });
              } else {
                this.setError(firstLetterUC(err.response.data.message));
              }
              this.setAuthenticated(false);
            }
            reject(err);
          });
      });
    },

    /**
     * Login with Google
     *
     * @param {obj} data - data from google login
     * @return {Promise}
     */
    loginWithGoogle(data) {
      return new Promise(async (resolve, reject) => {
        return axios
          .post(`${process.env.REACT_APP_API_URL}users/google/signin`, data)
          .then((res) => {
            console.log(res);
            if (res.data.token) {
              localStorage.setItem("access_token", res.data.token);
              this.getMemberData();
              this.setAuthenticated(true);
              return resolve({ success: true });
            }
            resolve({ success: false });
          })
          .catch((err) => {
            console.log(err);
            reject(err);
          });
      });
    },

    /**
     * Logout
     *
     * @returns {Promise}
     */
    logout() {
      return new Promise((resolve, reject) => {
        localStorage.removeItem("access_token");
        this.resetUser();
        this.setAuthenticated(false);
        resolve({ success: true });
      });
    },
  }),
};
