//import { errorMessages } from "../constants/messages";
//import { Firebase, FirebaseRef } from "../lib/firebase";
import axios from "axios";
//import history from "../history";

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

    resetUser() {
      return {};
    },
  },

  /**
   * Effects/Actions
   */
  effects: (dispatch) => ({
    /**
     * Sign Up
     *
     * @param {obj} formData - data from form
     * @return {Promise}
     */
    signUp(formData) {
      //const { email, password, firstName, lastName } = formData;
      //   return new Promise(async (resolve, reject) => {
      //     // Validation rules
      //     if (!firstName)
      //       return reject({ message: errorMessages.missingFirstName });
      //     if (!lastName)
      //       return reject({ message: errorMessages.missingLastName });
      //     if (!email) return reject({ message: errorMessages.missingEmail });
      //     if (!password)
      //       return reject({ message: errorMessages.missingPassword });
      //     // Go to Firebase
      //     return Firebase.auth()
      //       .createUserWithEmailAndPassword(email, password)
      //       .then((res) => {
      //         // Send user details to Firebase database
      //         if (res && res.user.uid) {
      //           FirebaseRef.child(`users/${res.user.uid}`)
      //             .set({
      //               firstName,
      //               lastName,
      //               signedUp: Firebase.database.ServerValue.TIMESTAMP,
      //               lastLoggedIn: Firebase.database.ServerValue.TIMESTAMP,
      //             })
      //             .then(() => {
      //               this.login(formData);
      //               resolve(res);
      //             });
      //         }
      //       })
      //       .catch(reject);
      //   }).catch((err) => {
      //     throw err.message;
      //   });
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
      //   return new Promise(async (resolve, reject) => {
      //     if (localStorage.access_token) {
      //       return Axios.get(`${process.env.REACT_APP_API_URL}/user`, {
      //         headers: {
      //           Authorization: localStorage.access_token,
      //         },
      //       })
      //         .then((res) => {
      //           // set user data redux store
      //           if (res.data) {
      //             this.setAuthenticated(true);
      //             this.setUserDetails(res.data);
      //             history.push("/");
      //           }
      //           resolve(res.data);
      //         })
      //         .catch((err) => {
      //           console.log("err", err);
      //           this.setAuthenticated(false);
      //           reject();
      //         });
      //     }
      //   });
      // if (Firebase === null) return new Promise(resolve => resolve);
      // // Ensure token is up to date
      // return new Promise(resolve => {
      //   Firebase.auth().onAuthStateChanged(loggedIn => {
      //     if (loggedIn) {
      //       this.listenForMemberProfileUpdates(dispatch);
      //       return resolve();
      //     }
      //     return new Promise(() => resolve);
      //   });
      // });
    },

    /**
     * Login with Google
     *
     * @param {obj} data - data from google login
     * @return {Promise}
     */
    login(data) {
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
