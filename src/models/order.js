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

    setError(state, payload) {
      return {
        ...state,
        error: payload,
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
                this.setOrderItems(res.data);
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

    /**
     * POST orders
     */
    createOrder(data) {
      console.log(data);
      return new Promise(async (resolve, reject) => {
        this.setError(null);
        return axios
          .post(`${process.env.REACT_APP_API_URL}order`, data, {
            headers: {
              Authorization: localStorage.access_token,
            },
          })
          .then((res) => {
            //console.log(res);
            if (res.status === 201) {
              if (res.data.message) {
                notification["success"]({
                  message: res.data.message,
                });
              }
              this.getOrderItems();
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
              console.log(err.response);
              if (err.response.status === 422) {
                this.setError(err.response.data.message);
              }
            }
            reject(err);
          });
      });
    },

    clearOrders() {
      this.setOrderItems([]);
    },
  }),
};
