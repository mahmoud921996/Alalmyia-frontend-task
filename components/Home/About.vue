<template>
  <section class="mt-5 pt-5">
    <div class="container-fluid row px-0">
      <div class="col-md-8">
        <div class="about">
          <h2 class="fs-3xl">من نحن</h2>
          <p class="fs-sm fw-medium py-3">
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
            النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد
            من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
          </p>

          <base-button>
            اعرف المزيد
            <Icon name="ph:arrow-left" />
          </base-button>
          <img
            src="~/public/images/d3271e6cbe2a90956c15116f04d28bcc.png"
            class="about-img"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import BaseButton from "~/components/UI/BaseButton.vue";
export default {
  components: {
    BaseButton,
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
.about {
  background-color: #edf0f3;
  border: 1px solid transparent;
  border-radius: 10px;
  padding: 5rem 7rem;
  position: relative;
  @include media-breakpoint-down(md) {
    padding: 2rem;
    width: 100%;
  }
  button {
    svg {
      transition: all 0.5s ease;
    }
    &:hover svg {
      transform: translateX(-6px);
    }
  }
  &-img {
    width: 350px;
    position: absolute;
    top: 50%;
    left: -240px;
    transform: translateY(-50%);
    @include media-breakpoint-down(md) {
      display: none;
    }
  }
}
</style>
