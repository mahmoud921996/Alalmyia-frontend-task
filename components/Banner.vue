<template>
  <section class="banner">
    <div class="container">
      <div class="row">
        <div class="col-md-10">Banner</div>
        <div class="col-md-1 offset-md-1">Icons</div>
      </div>
    </div>
  </section>
</template>
<script setup>

</script>
<style lang="scss" scoped>
section {
  margin-top: $header-height;
  background-color: red;
  @include media-breakpoint-down(lg) {
    margin-top: $header-height-md;
  }
}
</style>
