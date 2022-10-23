<template>
  <section class="recommended-products py-5 mt-5">
    <h2 class="text-center">اشهر المنتجات</h2>
    <div class="container py-5 position-relative">
      <base-slide
        :items="products"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
      ></base-slide>
    </div>
  </section>
</template>

<script>
import BaseSlide from "~/components/UI/BaseSlide.vue";
export default {
  components: {
    BaseSlide,
  },
  async setup() {
    const { data } = await useAsyncData("recommended", function () {
      return $fetch(
        "https://davina.elsaed.aait-d.com/public/api/general/AllRecommendedProducts"
      );
    });
    const products = data.value.data;
    return { products };
  },
};
</script>
