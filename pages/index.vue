<template>
  <div>
    <TheHeader />
    <Cart />
    <div class="main">
      <Banner :banner="banner" />
      <About />
      <Offers :items="topItems" />
      <Categories :categories="categories" />
      <BestSelling :bestSelling="bestSelling" :catg="catg" />
      <Options />
      <AllRecommendedProducts />
      <Reviews :reviews="testimonials" />
      <Partners :partners="partners" />
      <NewsLetter />
      <TheFooter />
    </div>
  </div>
</template>

<script>
import TheHeader from "~/components/Layout/TheHeader";
import Banner from "~/components/Home/Banner.vue";
import About from "~/components/Home/About";
import Offers from "~/components/Home/Offers";
import Categories from "~/components/Home/Categories";
import BestSelling from "~/components/Home/BestSelling";
import Options from "~/components/Home/Options.vue";
import AllRecommendedProducts from "~/components/Home/AllRecommendedProducts.vue";
import Reviews from "~/components/Home/Reviews.vue";
import Partners from "~/components/Home/Partners.vue";
import NewsLetter from "~/components/Home/NewsLetter";
import TheFooter from "~/components/Layout/TheFooter.vue";
import Cart from "~/components/Home/Cart.vue";
export default {
  components: {
    TheHeader,
    Banner,
    About,
    Offers,
    Categories,
    BestSelling,
    Options,
    AllRecommendedProducts,
    Reviews,
    Partners,
    NewsLetter,
    TheFooter,
    Cart,
  },
  async setup() {
    useHead({
      title: "الصفحه الرئيسيه",
    });
    const { data } = await useAsyncData("products", () => {
      return $fetch("https://davina.elsaed.aait-d.com/public/api/general/home");
    });
    const banner = data.value.data[0].large_banners[0].image;
    const topItems = data.value.data[0].top_rated;
    const categories = data.value.data[0].galleries.slice(0, 2);
    const bestSelling = data.value.data[0].best_selling;
    const catg = data.value.data[0].categories_no_image;
    const testimonials = data.value.data[0].our_client_say;
    const partners = data.value.data[0].partners;
    return {
      banner,
      topItems,
      categories,
      bestSelling,
      catg,
      testimonials,
      partners,
    };
  },
};
</script>

<style lang="scss" scoped>
.main {
  padding-top: 100px;
  height: calc(100vh - 100px);
}
</style>
