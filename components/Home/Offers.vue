<template>
  <section class="offers py-5 mt-5">
    <h2 class="text-center">افضل العروض</h2>
    <div class="container py-5 position-relative">
      <base-slide :items="items"></base-slide>
    </div>
  </section>
</template>

<script>
import BaseSlide from "~/components/UI/BaseSlide.vue";
export default {
  props: ["items"],
  components: {
    BaseSlide,
  },
};
</script>
