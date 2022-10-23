<template>
  <button class="btn fw-semi fs-lg">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
button {
  outline: none;

  svg {
    transition: all 0.5s ease;
  }
  &:hover svg {
    transform: translateX(-6px);
  }
}
</style>
