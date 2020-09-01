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
    setUserLogin(state, payload) {
      const { uid, email, emailVerified } = payload;

      return {
        ...state,
        uid,
        email,
        emailVerified,
      };
    },

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
     * Listen for realtime updates on the current user
     */
    listenForMemberProfileUpdates() {
      //   const UID =
      //     FirebaseRef &&
      //     Firebase &&
      //     Firebase.auth() &&
      //     Firebase.auth().currentUser &&
      //     Firebase.auth().currentUser.uid
      //       ? Firebase.auth().currentUser.uid
      //       : null;
      //   if (!UID) return false;
      //   const ref = FirebaseRef.child(`users/${UID}`);
      //   return ref.on("value", (snapshot) => {
      //     const userData = snapshot.val() || [];
      //     this.setUserDetails(userData); // Send to reducer
      //   });
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
        if (data.accessToken) {
          localStorage.setItem("access_token", data.accessToken);
          this.setUserDetails(data);
          this.setAuthenticated(true);
          return resolve({ success: true });
        } else {
          return reject({ success: false });
        }
      });
    },

    /**
     * Reset Password
     *
     * @param {obj} formData - data from form
     * @return {Promise}
     */
    resetPassword(formData) {
      //   const { email } = formData;
      //   return new Promise(async (resolve, reject) => {
      //     // Validation rules
      //     if (!email) return reject({ message: errorMessages.missingEmail });
      //     // Go to Firebase
      //     return Firebase.auth()
      //       .sendPasswordResetEmail(email)
      //       .then(() => {
      //         this.resetUser();
      //         resolve();
      //       })
      //       .catch(reject);
      //   }).catch((err) => {
      //     throw err.message;
      //   });
    },

    /**
     * Update Profile
     *
     * @param {obj} formData - data from form
     * @return {Promise}
     */
    updateProfile(formData) {
      //   const {
      //     email,
      //     password,
      //     password2,
      //     firstName,
      //     lastName,
      //     changeEmail,
      //     changePassword,
      //   } = formData;
      //   return new Promise(async (resolve, reject) => {
      //     // Are they a user?
      //     const UID = await Firebase.auth().currentUser.uid;
      //     if (!UID) return reject({ message: errorMessages.memberNotAuthd });
      //     // Validation rules
      //     if (!firstName)
      //       return reject({ message: errorMessages.missingFirstName });
      //     if (!lastName)
      //       return reject({ message: errorMessages.missingLastName });
      //     if (changeEmail) {
      //       if (!email) return reject({ message: errorMessages.missingEmail });
      //     }
      //     if (changePassword) {
      //       if (!password)
      //         return reject({ message: errorMessages.missingPassword });
      //       if (!password2)
      //         return reject({ message: errorMessages.missingPassword });
      //       if (password !== password2)
      //         return reject({ message: errorMessages.passwordsDontMatch });
      //     }
      //     // Go to Firebase
      //     return FirebaseRef.child(`users/${UID}`)
      //       .update({ firstName, lastName })
      //       .then(async () => {
      //         // Update Email address
      //         if (changeEmail) {
      //           await Firebase.auth()
      //             .currentUser.updateEmail(email)
      //             .catch(reject);
      //         }
      //         // Change the Password
      //         if (changePassword) {
      //           await Firebase.auth()
      //             .currentUser.updatePassword(password)
      //             .catch(reject);
      //         }
      //         return resolve();
      //       })
      //       .catch(reject);
      //   }).catch((err) => {
      //     throw err.message;
      //   });
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
