import { defineStore } from "pinia";
export const useMenu = defineStore("menu", {
  state() {
    return {
      showNav: false,
      showCart: false,
    };
  },

  actions: {
    toggleNav() {
      this.showNav = !this.showNav;
    },
    toggleCart() {
      this.showCart = !this.showCart;
    },
  },
});
