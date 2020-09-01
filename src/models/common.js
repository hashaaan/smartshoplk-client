import axios from "axios";
import { notification } from "antd";

const API_URL = "http://localhost:8000/api/";

const openNotification = (type) => {
  notification[type]({
    message: "Successful!",
    description: "Logout Successful!",
  });
};

const firstLetterUC = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default {
  // initial state
  state: {
    smartphones: [],
  },

  /**
   * Reducers
   */
  reducers: {
    setSmartphones(state, payload) {
      return {
        ...state,
        smartphones: payload,
      };
    },

    setError(state, payload) {
      return {
        ...state,
        error: payload,
      };
    },

    resetCommon() {
      return {};
    },
  },

  /**
   * Effects/Actions
   */
  effects: (dispatch) => ({
    /**
     * Get the current Member's Details
     *
     * @returns {Promise}
     */
    getSmartphones() {
      return new Promise(async (resolve, reject) => {
        if (localStorage.access_token) {
          return axios
            .get(`${API_URL}smartphones`)
            .then((res) => {
              //console.log("res", res);
              if (res.data) {
                this.setSmartphones(res.data);
                resolve({ success: true });
              }
              resolve({ success: false });
            })
            .catch((err) => {
              if (err.response) {
                console.log("Error", err.response);
              }
              reject(err);
            });
        }
      });
    },
  }),
};
