export default {
  state: {}, // initial state

  /**
   * Reducers
   */
  reducers: {
    setCartDetails(state, payload) {
      return {
        ...state,
        ...payload,
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
     * Add to cart
     *
     * @param {obj} data - data
     * @return {Promise}
     */
    addToCart(data) {
      // Add to cart fuction here
    },
  }),
};
