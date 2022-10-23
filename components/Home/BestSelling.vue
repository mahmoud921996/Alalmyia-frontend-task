<template>
  <section class="best-selling py-5 mt-5">
    <h2 class="text-center">الافضل مبيعا</h2>
    <div class="container py-3">
      <ul class="nav d-flex">
        <li class="nav-item me-3xl fs-md">
          <NuxtLink
            class="nav-link active"
            aria-current="page"
            to="#"
            @click="updateFilter('الكل')"
          >
            الكل
          </NuxtLink>
        </li>
        <li class="nav-item me-3 me-md-5 fs-md" v-for="c in catg" :key="c.id">
          <NuxtLink
            class="nav-link active"
            aria-current="page"
            to="#"
            @click="updateFilter(c.name)"
          >
            {{ c.name }}
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div class="container py-3 position-relative">
      <base-slide :items="filteredItems"></base-slide>
    </div>
  </section>
</template>

<script>
import { computed, isRef, ref } from "vue";
import BaseSlide from "~/components/UI/BaseSlide.vue";
export default {
  props: ["bestSelling"],
  components: {
    BaseSlide,
  },
  async setup(props) {
    const { data } = await useAsyncData("categories", () => {
      return $fetch(
        "https://davina.elsaed.aait-d.com/public/api/general/all-categories"
      );
    });
    const catg = data.value.data;
    let selectedCatg = ref("الكل");

    const updateFilter = (val) => {
      selectedCatg.value = val;
    };
    const products = toRef(props, "bestSelling");

    const filteredItems = computed(function () {
      return products.value.filter((item) => {
        if (selectedCatg.value === "الكل") {
          return products.value;
        } else {
          return item.category_name.includes(selectedCatg.value);
        }
      });
    });

    return { catg, filteredItems, updateFilter };
  },
};
</script>
