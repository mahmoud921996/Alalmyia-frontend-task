<template>
  <section class="partners py-5">
    <div class="container py-5">
      <div class="row align-items-center justify-content-center">
        <div
          class="col-4 col-md-1 mx-4 img-bx"
          v-for="item in partners"
          :key="item.id"
        >
          <img :src="item.image" class="partners-img w-100" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["partners"],
  setup() {},
};
</script>

<style lang="scss" scoped>
.img-bx {
  @include media-breakpoint-down(md) {
    margin-bottom: rem(30px);
  }
}
</style>
