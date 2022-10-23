<template>
  <div class="cart-container">
    <div class="cart-backdrop" v-if="show" @click="closeCart"></div>
    <div class="cart py-4" v-show="show">
      <Icon
        name="material-symbols:close"
        class="cart-close"
        @click="closeCart"
      />
      <h2 class="text-center fs-3xl fw-black">عربة التسوق</h2>
      <p class="mt-4 text-center">
        <span class="fw-black">{{ cartStore.totalAmount }}</span>
        منتج في العربة
      </p>

      <ul class="mt-5">
        <div class="container">
          <li v-for="cartItem in cart" :key="cartItem.id" class="mb-4">
            <div class="row d-flex align-items-center justify-content-center">
              <div class="col-md-6 offset-md-1">
                <div
                  class="cart-content d-flex align-items-center justify-content-evenly"
                >
                  <div class="cart-content-img">
                    <img :src="cartItem.image" />
                  </div>
                  <div class="text">
                    <h3 class="fw-black max-sm">{{ cartItem.name }}</h3>
                    <p>{{ cartItem.category }}</p>
                    <h6 class="text-success fw-black fs-md">
                      ${{ cartItem.price }}
                    </h6>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div
                  class="cart-icons d-flex justify-content-between align-items-center"
                >
                  <div
                    class="cart-quantity d-flex align-items-center justify-content-between px-3 pointer mt-4 mt-md-0 mx-auto mx-md-0"
                  >
                    <span
                      class="fs-2xl"
                      @click="toggleAmount('inc', cartItem.id)"
                      >+</span
                    >
                    <span class="fs-2xl">{{ cartItem.amount }}</span>
                    <span
                      class="fs-2xl"
                      @click="toggleAmount('dec', cartItem.id)"
                      >-</span
                    >
                  </div>
                </div>
              </div>
              <div
                class="d-flex align-items-center justify-content-center mt-4 mt-md-0 col-md-1"
              >
                <Icon
                  name="fluent:delete-28-regular"
                  class="fs-xl pointer"
                  @click="removeItem(cartItem.id)"
                />
              </div>
            </div>
          </li>
        </div>
      </ul>
      <div class="mt-5" v-if="cartStore.totalAmount > 0">
        <form>
          <div
            class="form-Inp d-flex justify-content-center align-items-center"
          >
            <input
              type="text"
              class="w-75 p-3"
              placeholder="ادخل كوبون الخصم"
            />
            <button class="btn">ارسال</button>
          </div>
        </form>
        <div class="mt-5 px-3">
          <div class="d-flex align-items-center justify-content-center">
            <h4 class="text">المبلغ الاجمالي</h4>
            <div class="line"></div>
            <span class="ms-2 fw-medium">${{ cartStore.total }}</span>
          </div>
        </div>
        <div class="mt-5 px-3">
          <div class="d-flex align-items-center justify-content-center">
            <h4 class="text">الخصم</h4>
            <div class="line"></div>
            <span class="ms-2 fw-medium">$0</span>
          </div>
        </div>
        <div class="mt-5 px-3">
          <div class="d-flex align-items-center justify-content-center">
            <h4 class="text">الشحن</h4>
            <div class="line"></div>
            <span class="ms-2 fw-medium">$0</span>
          </div>
        </div>
        <div class="mt-5 px-3">
          <div class="d-flex align-items-center justify-content-center">
            <h4 class="text">الاجمالي</h4>
            <div class="line"></div>
            <span class="ms-2 fw-medium">${{ cartStore.total }}</span>
          </div>
        </div>
        <button
          class="cart-btn btn bg-primary text-white mt-4 py-3 px-5 rounded-pill text-center"
        >
          Checkout
        </button>
      </div>
      <div v-else>
        <h5 class="text-center">عربة تسوق shop الخاصة بك فارغة</h5>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useCart } from "~/store/cart";
import { useMenu } from "~/store/menu";

export default {
  setup() {
    const cartStore = useCart();
    const cart = computed(function () {
      return cartStore.cart;
    });
    const menuStore = useMenu();
    const show = computed(function () {
      return menuStore.showCart;
    });

    function closeCart() {
      menuStore.toggleCart();
    }
    function removeItem(id) {
      cartStore.removeItem(id);
    }

    // toggle Amount
    function toggleAmount(value, id) {
      cartStore.toggleAmount({ value, id });
    }
    return { cart, show, closeCart, removeItem, toggleAmount, cartStore };
  },
};
</script>

<style lang="scss" scoped>
.cart-container {
  width: 100%;
  height: 100%;
}

.cart-backdrop {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: $z-backdrop;
  position: fixed;
  top: 0;
  left: 0;
}
.cart {
  background-color: $white;
  height: 100%;
  width: 80%;
  position: fixed;
  overflow-y: auto;
  overflow-x: hidden;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10000;
  transition: all 0.3s ease;
  color: #000;

  &-close {
    position: absolute;
    top: 20px;
    left: 20px;
    background-color: #e9e9e9;
    width: 30px;
    height: 30px;
    padding: 5px;
    cursor: pointer;
    border-radius: 50%;
  }
  &-content-img {
    max-width: 100px;
    img {
      width: 100%;
      object-fit: cover;
      border-radius: 18px;
    }
  }
  &-quantity {
    background-color: #e9e9e9;
    border-radius: 30px;
    width: rem(200px);
    user-select: none;
  }
  .form-Inp {
    border-radius: 25px;
    border: 1px solid $info;
    max-width: 80%;
    margin: auto;
    input {
      border: none;
      outline: none;
    }
  }
  &-btn {
    width: 280px;
    margin: auto;
    display: block;
  }
  .text {
    width: rem(150px);
    margin-right: rem(20px);
  }
}
</style>
