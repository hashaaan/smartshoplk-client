import axios from "axios";
import { notification } from "antd";

export default {
  state: {
    items: [],
    error: null,
  }, // initial state

  /**
   * Reducers
   */
  reducers: {
    setOrderItems(state, payload) {
      return {
        ...state,
        items: payload,
      };
    },

    resetOrder() {
      return {};
    },
  },

  /**
   * Effects/Actions
   */
  effects: (dispatch) => ({
    /**
     * GET order items
     */
    getOrderItems() {
      return new Promise(async (resolve, reject) => {
        if (localStorage.access_token) {
          return axios
            .get(`${process.env.REACT_APP_API_URL}order`, {
              headers: {
                Authorization: localStorage.access_token,
              },
            })
            .then((res) => {
              console.log("res", res);
              if (res.data) {
                //this.setOrderItems(res.data.response);
                resolve({ success: true });
              }
              resolve({ success: false });
            })
            .catch((err) => {
              if (err.message === "Network Error") {
                notification["error"]({
                  message: err.message,
                  description: "Try again later ...",
                });
              }
              if (err.response) {
                console.log("Error", err.response);
                if (err.response.status === 401) {
                  notification["error"]({
                    message: "Somthing went wrong !",
                    description: "Try again later ...",
                  });
                }
              }
              reject(err);
            });
        }
      });
    },

    clearOrders() {
      this.setOrderItems([]);
    },
  }),
};
