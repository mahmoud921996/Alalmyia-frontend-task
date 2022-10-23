<template>
  <div>
    <header class="header px-2">
      <div class="header-container container">
        <NuxtLink to="/" class="header-logo">
          <Logo />
        </NuxtLink>
        <nav class="header-list">
          <ul class="d-flex justify-content-center align-items-center">
            <li class="fs-md">
              <NuxtLink to="/"> الرئيسيه </NuxtLink>
            </li>
            <li class="fs-md me-5">
              <NuxtLink to="/"> من نحن </NuxtLink>
            </li>
            <li class="fs-md me-5">
              <NuxtLink to="/shop"> تسوق الان </NuxtLink>
            </li>
            <li class="fs-md me-5">
              <NuxtLink to="/"> اتصل بنا </NuxtLink>
            </li>
          </ul>
        </nav>
        <div class="icons d-flex">
          <NuxtLink
            to="/auth"
            class="header-login me-5 pointer"
            v-if="!isAuthenticated"
            >تسجيل الدخول</NuxtLink
          >
          <NuxtLink class="header-login me-5 pointer" v-else @click="logout"
            >تسجيل الخروج</NuxtLink
          >
          <ul class="d-flex align-items-center">
            <li class="me-3 pointer">
              <Icon name="ri:search-line" class="fs-md" />
            </li>
            <li class="me-3 pointer">
              <Icon name="bi:cart" class="fs-md" @click="toggleCartMenu" />
            </li>
            <li class="me-3 pointer">
              <Icon name="bi:heart" class="fs-md" />
            </li>
            <li class="me-3 pointer" @click="() => router.push('/auth/login')">
              <Icon name="bi:person" class="fs-md" />
            </li>
            <li class="me-3 pointer header-menu">
              <Icon name="charm:menu-hamburger" @click="toggleShow" />
            </li>
          </ul>
        </div>
      </div>
    </header>
    <SideNav />
  </div>
</template>
<script>
import SideNav from "~/components/Layout/SideNav.vue";
import { useMenu } from "~/store/menu";
import { useRouter } from "vue-router";
import { useAuth } from "~/store/auth";
export default {
  components: { SideNav },
  setup() {
    const menuStore = useMenu();
    function toggleShow() {
      menuStore.toggleNav();
    }
    function toggleCartMenu() {
      menuStore.toggleCart();
    }
    const router = useRouter();
    const authStore = useAuth();
    const isAuthenticated = computed(function () {
      return authStore.isAuthenticated;
    });

    function logout() {
      authStore.logout();
    }
    return { toggleShow, toggleCartMenu, router, isAuthenticated, logout };
  },
};
</script>
<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: $z-header;
  background-color: $white;
  &-container {
    height: $header-height;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: height 0.3s ease;
    @include media-breakpoint-down(lg) {
      height: $header-height-md;
    }
  }
  &-logo {
    width: rem(140px);
    display: block;
    @include media-breakpoint-down(lg) {
      width: rem(100px);
    }
  }
  &-login {
    background-color: #f8f9fc;
    padding: rem(10px);
    border-radius: rem(34px);
    @include media-breakpoint-down(lg) {
      display: none;
    }
  }
  &-menu {
    display: none;
    @include media-breakpoint-down(lg) {
      display: block;
    }
  }
  &-list {
    @include media-breakpoint-down(lg) {
      display: none;
    }
  }
}
</style>
