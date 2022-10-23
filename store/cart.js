import { defineStore, skipHydrate } from "pinia";
import { useLocalStorage } from "@vueuse/core";

export const useCart = defineStore("cart", {
  state() {
    return {
      cart: useLocalStorage("cart", []),
      total_amount: 0,
      total_price: 0,
    };
  },
  getters: {
    totalAmount() {
      const total = this.cart.reduce(
        (acc, cartItem) => acc + cartItem.amount,
        0
      );
      this.total_amount = total;
      return this.total_amount;
    },
    total() {
      const totalPrice = this.cart.reduce(
        (acc, cartItem) => acc + cartItem.amount * cartItem.price,
        0
      );
      this.total_price = totalPrice;
      return this.total_price;
    },
  },
  actions: {
    addCart({ id, product, amount }) {
      const tempItem = this.cart.find((item) => item.id === id);
      if (tempItem) {
        const tempCart = this.cart.map((cartItem) => {
          if (cartItem.id === id) {
            let newAmount = cartItem.amount + amount;
            return { ...cartItem, amount: newAmount };
          } else {
            return cartItem;
          }
          this.cart = tempCart;
        });
      } else {
        const newItem = {
          id: id,
          name: product.name,
          price: product.price,
          category: product.category_name,
          image: product.main_image,
          amount: amount,
        };
        this.cart.push(newItem);
      }
    },
    removeItem(id) {
      const tempCart = this.cart.filter((item) => item.id !== id);
      this.cart = tempCart;
    },
    toggleAmount({ id, value }) {
      const tempCart = this.cart.map((item) => {
        if (item.id === id) {
          if (value === "inc") {
            let newAmount = item.amount + 1;
            return { ...item, amount: newAmount };
          }
          if (value === "dec") {
            let newAmount = item.amount - 1;
            if (newAmount < 1) {
              newAmount = 1;
            }
            return { ...item, amount: newAmount };
          }
        }
        return item;
      });
      this.cart = tempCart;
    },
  },
  hydrate(state, initialState) {
    // in this case we can completely ignore the initial state since we
    // want to read the value from the browser
    state.cart = useLocalStorage("cart", []);
  },
});
