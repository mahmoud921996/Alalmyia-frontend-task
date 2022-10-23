<template>
  <section class="py-5">
    <div class="container py-5">
      <div class="row">
        <div class="col-md-6 mb-3 mb-md-0">
          <h2 class="fs-2xl">اشترك في نشرتنا الاسبوعيه</h2>
        </div>
        <div class="col-md-6">
          <form>
            <div class="form-btn">
              <input type="text" placeholder="بريدك الالكتروني" class="p-3" />
              <button class="btn">اشترك</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  background-color: #f8f9fc;
  padding: 0;
  .form-btn {
    border-radius: 20px;
    width: 100%;
    input {
      width: 80%;
      background-color: $white;
      border: none;
      outline: none;
    }
    button {
      background-color: #e9e9e9;
      width: 20%;
      padding: 15px;
      border-radius: 30px;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
}
</style>
