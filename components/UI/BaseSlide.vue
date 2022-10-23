<template>
  <div class="">
    <Swiper
      :modules="modules"
      navigation
      :slidesPerView="1"
      :spaceBetween="10"
      v-bind="$attrs"
      @swiper="onSwiper"
      :breakpoints="{
        '640': {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        '768': {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        '1024': {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      }"
    >
      <Swiper-Slide v-for="item in items" :key="item.id">
        <div class="card">
          <img
            :src="item.main_image"
            class="card-img-top w-100"
            :alt="item.name"
          />
          <div
            class="card-body d-flex flex-column justify-content-between px-3"
            style="height: 10rem"
          >
            <div>
              <h6 class="card-title pt-3 text-wrap" style="width: 8rem">
                {{ item.name }}
              </h6>
              <p class="card-text">
                {{ item.category_name }}
              </p>
            </div>
            <div class="d-flex justify-content-between align-items-center p-2">
              <span class="fw-medium">${{ item.price }}</span>
              <div class="d-flex align-items-center">
                <Icon name="ph:heart" class="pointer fs-sm ms-2"></Icon>
                <Icon
                  name="bi:cart-plus-fill"
                  class="pointer fs-sm"
                  @click="addTocart(item)"
                />
              </div>
            </div>
          </div>
        </div>
      </Swiper-Slide>
    </Swiper>

    <base-button class="m-auto d-block mt-4 fw-normal">
      شاهد المزيد
      <Icon name="ph:arrow-left" />
    </base-button>
  </div>
</template>

<script>
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import BaseButton from "~/components/UI/BaseButton.vue";
import { useCart } from "~/store/cart";
import { useMenu } from "~/store/menu";

export default {
  components: {
    Swiper,
    SwiperSlide,
    BaseButton,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    auto: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const onSwiper = () => {
      console.log("swiping");
    };

    const cartStore = useCart();
    const menuStore = useMenu();
    function addTocart(cartItem) {
      cartStore.addCart({ id: cartItem.id, product: cartItem, amount: 1 });
      menuStore.toggleCart();
    }
    return {
      onSwiper,

      modules: [Navigation, Autoplay],
      addTocart,
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
  border: 1px solid #ddd;
  &:hover {
    box-shadow: 2px 4px 5px rgba(48, 48, 48, 0.2);
  }
}
button {
  svg {
    transition: all 0.5s ease;
  }
  &:hover svg {
    transform: translateX(-6px);
  }
}
.swiper-button-prev-unique {
  position: absolute;
  top: 50%;
  left: -12px;
  z-index: 100;
  font-size: 20px;
  transform: translateY(-50%);
}
.swiper-button-next-unique {
  position: absolute;
  top: 50%;
  right: -12px;
  z-index: 100;
  font-size: 20px;
  transform: translateY(-50%);
}
</style>
