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
    setCartItems(state, payload) {
      return {
        ...state,
        items: payload,
      };
    },

    resetCart() {
      return {};
    },
  },

  /**
   * Effects/Actions
   */
  effects: (dispatch) => ({
    /**
     * POST to cart
     *
     * @param {obj} data - data
     * @return {Promise}
     */
    addToCart(data) {
      // Add to cart fuction here
      return new Promise(async (resolve, reject) => {
        return axios
          .post(`${process.env.REACT_APP_API_URL}cart`, data, {
            headers: {
              Authorization: localStorage.access_token,
            },
          })
          .then((res) => {
            //console.log("res", res);
            if (res.data) {
              resolve({ success: true });
              if (res.status === 201) {
                notification["success"]({
                  message: res.data.message,
                });
              }
              this.getCartItems();
            }
            resolve({ success: false });
          })
          .catch((err) => {
            console.log("err", err.response);
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
      });
    },

    /**
     * GET cart items
     */
    getCartItems() {
      return new Promise(async (resolve, reject) => {
        if (localStorage.access_token) {
          return axios
            .get(`${process.env.REACT_APP_API_URL}cart`, {
              headers: {
                Authorization: localStorage.access_token,
              },
            })
            .then((res) => {
              // console.log("res", res);
              if (res.data) {
                this.setCartItems(res.data.response);
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

    clearCart() {
      this.setCartItems([]);
    },
  }),
};
