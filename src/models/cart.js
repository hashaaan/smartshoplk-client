import axios from "axios";
import { notification } from "antd";

export default {
  state: {
    items: [],
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
    },

    /**
     * GET cart items
     */
    async getCartItems() {
      return new Promise(async (resolve, reject) => {
        if (localStorage.access_token) {
          await axios
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
  }),
};
