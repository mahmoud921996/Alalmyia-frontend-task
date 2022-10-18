<template>
  <div>
    <TheHeader />
    <Banner />
  </div>
</template>

<script>
export default {
  async setup() {
    const { data } = await useAsyncData("home", () =>
      $fetch("https://davina.elsaed.aait-d.com/public/api/general/home")
    );
    console.log(data.value.data);
  },
};
</script>
