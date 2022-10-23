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
    <div class="mb-4">
      <NuxtLink to="/" class="header-logo">
        <Logo />
      </NuxtLink>
    </div>

    <h3 class="fw-black">تسجيل الدخول الي حسابك</h3>
    <form @submit.prevent="signIn">
      <input
        class="form-control max-md pt-xs pb-xs mt-2xl mb-lg"
        type="text"
        placeholder="البريد الالكتروني او الهاتف"
        v-model="email"
      />

      <input
        class="form-control max-md pt-xs pb-xs mb-lg"
        type="password"
        placeholder="الرقم السري"
        v-model="password"
      />

      <p v-if="!loading && error" class="text-danger">{{ error }}</p>
      <Button>دخول</Button>
      <div class="mb-lg">
        <NuxtLink
          to="/auth/forgetPassword"
          class="text-capitalize forget mb-lg"
        >
          نسيت الرقم السري؟
        </NuxtLink>
      </div>
    </form>

    <div class="d-flex justify-content-between align-items-center gap-3">
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
          >تسجيل الدحول فيسبوك</span
        >
      </button>
    </div>

    <p class="text-capitalize fs-md mt-lg">
      ليس لديك حساب ؟
      <NuxtLink to="/auth/register" class="fw-black">تسجيل</NuxtLink>
    </p>

    <div class="padge">
      <img src="~/public/images/Login-amico.png" class="padge-img" />
    </div>
  </div>
</template>

<script>
import Button from "~/components/UI/Button.vue";
import BaseSpinner from "~/components/UI/BaseSpinner.vue";
import { useAuth } from "~/store/auth";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";

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
      title: " تسجيل الدخول",
    });
    const authStore = useAuth();
    const { error, loading } = storeToRefs(authStore);
    const email = ref("");
    const password = ref("");
    const router = useRouter();
    const payload = computed(() => {
      return {
        email: email.value,
        password: password.value,
      };
    });

    async function signIn() {
      await authStore.signin(payload.value);
      if (!error.value) {
        
        router.push("/");
      }
    }

    return {
      email,
      error,
      loading,
      password,
      signIn,
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
  form {
    width: 70%;
    text-align: center;
  }
  .forget {
    color: $danger;
    cursor: pointer;
  }

  input {
    border: 1px solid #e8eaef;
    margin-left: auto;
    margin-right: auto;
    @include media-breakpoint-down(md) {
      margin-top: 1.5rem;
    }

    &::placeholder {
      color: #949494;
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
}
</style>
