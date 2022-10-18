<template>
  <header class="header">
    <div class="header-container container">
      <NuxtLink to="/" class="header-logo">
        <Logo />
      </NuxtLink>
      <nav>
        <ul class="d-flex justify-content-center align-items-center">
          <li class="fs-md me-5">
            <NuxtLink to="/"> Home </NuxtLink>
          </li>
          <li class="fs-md me-5">
            <NuxtLink to="/"> About Us </NuxtLink>
          </li>
          <li class="fs-md me-5">
            <NuxtLink to="/shop"> shop </NuxtLink>
          </li>
          <li class="fs-md me-5">
            <NuxtLink to="/"> Contact Us </NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="icons d-flex">
        <NuxtLink to="/signup" class="header-login me-5">Sign Up</NuxtLink>
        <ul class="d-flex align-items-center">
          <li class="me-3 pointer">
            <Icon name="bi:search" />
          </li>
          <li class="me-3 pointer">
            <Icon name="bi:cart" />
          </li>
          <li class="me-3 pointer">
            <Icon name="bi:heart" />
          </li>
          <li class="me-3 pointer">
            <Icon name="bi:person" />
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: $zindex-fixed;

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
      width: rem(80px);
    }
  }
  &-login {
    background-color: #f8f9fc;
    padding: 10px;
    border-radius: 34px;
  }
}
</style>
