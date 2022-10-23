<template>
  <div
    class="d-flex flex-column align-items-center justify-content-center log position-relative"
  >
    <div
      class="position-absolute h-100 w-100 d-flex flex-column align-items-center justify-content-center load"
      v-if="loading"
    >
      <BaseSpinner />
    </div>
    <div class="circle-top">
      <img src="~/public/images/freepik--floor--inject-42.png" />
    </div>
    <div class="mb-4 mb-sm-3">
      <NuxtLink to="/" class="header-logo">
        <Logo />
      </NuxtLink>
    </div>

    <p class="fs-lg text-capitalize mb-md-0 mb-sm-0">Welcome to davina</p>
    <p class="fs-lg text-capitalize">create an account</p>

    <form class="row mt-xs" @submit.prevent="signup">
      <div class="col-6">
        <input
          type="text"
          class="form-control pt-xs pb-xs mb-sm"
          placeholder="الاسم الاول"
          v-model="firstName"
        />
      </div>
      <div class="col-6">
        <input
          type="text"
          class="form-control pt-xs pb-xs mb-sm"
          placeholder="الاسم الاخير"
          v-model="lastName"
        />
      </div>
      <div class="col-12">
        <input
          type="email"
          class="form-control pt-xs pb-xs mb-sm"
          placeholder="البريد الالكتروني"
          v-model="email"
        />
      </div>
      <div class="col-3 d-flex justify-content-center align-items-center">
        <div class="pt-xs pb-xs mb-sm tel">
          <icon name="twemoji:flag-for-flag-saudi-arabia" class="fs-lg" />
          <span class="ps-sm">+966</span>
        </div>
      </div>
      <div class="col-9">
        <input
          type="tel"
          class="form-control pt-xs pb-xs mb-sm"
          placeholder="رفم الهاتف"
          v-model="phone"
        />
      </div>

      <div class="col-12">
        <input
          type="password"
          class="form-control pt-xs pb-xs mb-sm"
          placeholder="الرقم السري"
          v-model="password"
        />
      </div>

      <div class="col-12">
        <input
          type="password"
          class="form-control pt-xs pb-xs mb-sm"
          placeholder="تأكيد الرقم السري"
          v-model="passwordConfirmation"
        />
      </div>
      <p v-if="!loading && error" class="text-danger">{{ error }}</p>

      <Button>تسجيل </Button>
    </form>

    <div class="d-flex justify-content-between align-items-center gap-2">
      <button
        class="text-capitalize google rounded-pill d-flex justify-content-between align-items-center"
      >
        <Icon name="logos:google-icon" class="fs-lg" /><span
          >تسجيل الدخول جوجل</span
        >
      </button>

      <button
        class="text-capitalize facebook rounded-pill d-flex justify-content-between align-items-center"
      >
        <Icon name="bx:bxl-facebook" class="fs-lg" /><span
          >تسجيل الدخول فيسبوك</span
        >
      </button>
    </div>

    <p class="text-capitalize fs-md mt-sm">
      لديك حساب بالفعل؟
      <NuxtLink to="/auth/login" class="fw-black">تسجيل الدخول</NuxtLink>
    </p>

    <div class="padge d-none d-md-block">
      <img src="~/public/images/Login-amico.png" class="padge-img" />
    </div>
  </div>
</template>

<script>
import Button from "~/components/UI/Button.vue";
import { useAuth } from "~/store/auth";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import BaseSpinner from "~/components/UI/BaseSpinner.vue";

export default {
  components: {
    Button,
    BaseSpinner,
  },

  setup() {
    definePageMeta({
      middleware: "auth-redirect",
    });
    useHead({
      title: " حساب جديد",
    });
    const authStore = useAuth();
    const router = useRouter();
    const firstName = ref("");
    const lastName = ref("");
    const phone = ref("");
    const email = ref("");
    const password = ref("");
    const passwordConfirmation = ref("");
    const { error, loading } = storeToRefs(authStore);

    const fullName = computed(() => {
      return firstName.value + lastName.value;
    });

    const user = computed(() => {
      return {
        fullName: fullName.value,
        userName: firstName.value,
        phone: phone.value,
        email: email.value,
        password: password.value,
        passwordConfirmation: passwordConfirmation.value,
      };
    });

    async function signup() {
      await authStore.signup(user.value);
      if (!error.value) {
        router.push("/auth/verify");
      }
    }

    return {
      firstName,
      lastName,
      phone,
      email,
      password,
      passwordConfirmation,
      error,
      loading,
      signup,
    };
  },
};
</script>

<style lang="scss" scoped>
.log {
  height: 100vh;
  overflow: hidden;

  .header-logo {
    width: rem(140px);
    display: block;
    @include media-breakpoint-down(lg) {
      width: rem(80px);
    }
  }

  .forget {
    color: $danger;
  }
  form {
    max-width: 600px;
    text-align: center;
    @include media-breakpoint-down(md) {
      width: 80%;
    }
    input {
      border: 1px solid #e8eaef;

      &::placeholder {
        color: #949494;
      }
    }
  }

  .circle-top {
    position: fixed;
    top: -550px;
    right: -450px;
    z-index: -2;
  }
  .padge {
    position: fixed;
    bottom: 0;
    left: 0;
    &-img {
      width: 300px;
    }
  }

  .google {
    background-color: #fff;
    border: 1px solid #e8eaef;
    font-size: 0.9rem;
    padding: 1rem 1.2rem;
    gap: 0.5rem;
  }

  .facebook {
    background-color: #3c5998;
    border: 1px solid #e8eaef;
    font-size: 0.9rem;
    padding: 1rem 1.2rem;
    gap: 0.5rem;
    color: #fff;
  }

  .tel {
    background-color: #f8f9fc;
    border: 1px solid #e8eaef;
    display: flex;
    justify-content: space-around;
    padding-left: 16px;
    padding-right: 16px;
    border-radius: 10px;
    @include media-breakpoint-down(md) {
      padding-left: 0;
      padding-right: 0;
    }
  }
}
</style>
