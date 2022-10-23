<template>
  <section class="reviews mt-5 pt-5">
    <h3 class="text-center">اراء العملاء</h3>
    <div class="container py-5 position-relative">
      <Swiper
        :modules="modules"
        :slides-per-view="1"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :autoplay="{
          delay: 3500,
          disableOnInteraction: false,
        }"
      >
        <Swiper-Slide v-for="item in reviews" :key="item.id">
          <div class="row justify-content-center">
            <div class="col-md-9">
              <p class="fs-md position-relative py-4">
                <Icon name="fa-solid:quote-left" class="left-icon" />
                <span> {{ item.description }}</span>
                <Icon name="fa-solid:quote-right" class="right-icon" />
              </p>
              <div class="review-text">
                <div class="img-bx">
                  <img :src="item.image" class="w-100" />
                </div>
                <p class="text-center fs-sm fw-semi">{{ item.name }}</p>
              </div>
            </div>
          </div>
        </Swiper-Slide>
      </Swiper>
    </div>
  </section>
</template>

<script>
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
export default {
  props: ["reviews"],
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = () => {
      console.log("swiping");
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Autoplay],
    };
  },
};
</script>

<style lang="scss" scoped>
.reviews {
  background-color: #f8f9fc;

  .left-icon {
    position: absolute;
    left: -6px;
    top: 0;
    @include media-breakpoint-down(md) {
      left: 7px;
    }
  }
  .right-icon {
    position: absolute;
    right: -20px;
    bottom: -5px;
    @include media-breakpoint-down(md) {
      right: 8px;
    }
  }
  .img-bx {
    width: rem(60px);
    margin: 1rem auto;
    img {
      object-fit: cover;
      border-radius: 50%;
    }
  }
}
</style>
