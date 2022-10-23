<template>
  <section class="category">
    <div class="container-fluid px-0 overflow-hidden">
      <div class="row">
        <div
          class="mb-1 mb-md-0 col-md-6"
          v-for="catg in categories"
          :key="catg.id"
        >
          <div class="img-bx w-100">
            <img :src="catg.image" class="w-100" :title="catg.title" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["categories"],
  setup() {},
};
</script>
<style lang="scss" scoped>
.img-bx {
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.2);
  }
}
</style>
