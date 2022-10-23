<template>
  <div class="sidenav-container">
    <div class="sidenav-backdrop" v-if="show" @click="toggleShow"></div>
    <transition name="slide-side">
      <div class="sidenav" v-if="show">
        <ul class="nav-list" @click="toggleShow">
          <li class="fs-lg mt-md">
            <NuxtLink to="/"> الرئيسيه </NuxtLink>
          </li>
          <li class="fs-lg mt-md">
            <NuxtLink to="/"> من نحن </NuxtLink>
          </li>
          <li class="fs-lg mt-md">
            <NuxtLink to="/shop"> تسوق الان </NuxtLink>
          </li>
          <li class="fs-lg mt-md">
            <NuxtLink to="/"> اتصل بنا </NuxtLink>
          </li>
          <li class="fs-lg mt-md">
            <NuxtLink to="/signup" class="header-login">تسجيل الدخول</NuxtLink>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>
<script>
import { useMenu } from "~/store/menu";

export default {
  setup() {
    const menuStore = useMenu();
    const show = computed(function () {
      return menuStore.showNav;
    });
    function toggleShow() {
      menuStore.toggleNav();
    }
    return { show, toggleShow };
  },
};
</script>
<style lang="scss" scoped>
.sidenav-container {
  height: 100%;
  width: 100%;
  .sidenav-backdrop {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: $z-backdrop;
    position: fixed;
    top: 0;
    left: 0;
  }
  .sidenav {
    height: 100%;
    width: rem(300px);
    background-color: $white;
    z-index: 10000;
    position: fixed;
    top: 0;
    left: 0;
    box-sizing: border-box;
    padding: rem(30px);
  }

  .slide-side-enter-active,
  .slide-side-leave-active {
    transition: all 0.3s ease-out;
  }
  .slide-side-enter,
  .slide-side-leave-to {
    transform: translateX(-100%);
  }
}
</style>
