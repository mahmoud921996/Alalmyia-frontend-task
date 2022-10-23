<template>
  <footer class="py-5 footer">
    <div class="container">
      <div class="row">
        <div class="col-md-5 offset-md-2 col-lg-3 offset-lg-1">
          <h4 class="text-center">للمساعده والمعلومات</h4>
          <div
            class="list d-flex justify-content-around justify-content-md-between align-items-center py-2"
          >
            <ul>
              <li class="mt-4 fw-semi">
                <NuxtLink to="#"> المساعده </NuxtLink>
              </li>
              <li class="mt-4 fw-semi">
                <NuxtLink to="#"> التعليمات </NuxtLink>
              </li>
              <li class="mt-4 fw-semi">
                <NuxtLink to="#"> الشحن </NuxtLink>
              </li>
              <li class="mt-4 fw-semi">
                <NuxtLink to="#"> متابعه الطلب </NuxtLink>
              </li>
              <li class="mt-4 fw-semi">
                <NuxtLink to="#"> ارجاع المنتج </NuxtLink>
              </li>
            </ul>
            <ul>
              <li class="mt-4 fw-semi">
                <NuxtLink to="#"> الضريبه المضافه </NuxtLink>
              </li>
              <li class="mt-4 fw-semi">
                <NuxtLink to="#"> سياسه الخصوصيه </NuxtLink>
              </li>
              <li class="mt-4 fw-semi">
                <NuxtLink to="#"> تعليمات الاستخدام </NuxtLink>
              </li>
              <li class="mt-4 fw-semi">
                <NuxtLink to="#"> تعليمات البيع </NuxtLink>
              </li>
              <li class="mt-4 fw-semi">
                <NuxtLink to="#"> الشروط والاحكام </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-5 my-4 my-md-0 col-lg-4 offset-lg-1 text-center">
          <img src="~/public/images/logo2.png" />
          <p class="mt-4 fs-xs">
            هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية
            تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى
            النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما، عليك أن تتحقق أولاً
            أن ليس هناك أي كلمات أو عبارات محرجة أو غير لائقة مخبأة في هذا النص.
          </p>
          <div>
            <h6>example@example.com</h6>
            <p>3596546321</p>
          </div>
          <div
            class="shipping d-flex align-items-center justify-content-center"
          >
            <div class="mx-1">
              الشحن الي
              <span>
                <Icon name="twemoji:flag-for-flag-egypt" class="mx-1" />
              </span>
              <span>
                <Icon name="material-symbols:arrow-drop-down" />
              </span>
            </div>
            <div class="mx-1">
              العمله
              <span>
                <Icon name="twemoji:flag-for-flag-egypt" class="mx-1" />
              </span>
              <span>
                <Icon name="material-symbols:arrow-drop-down" />
              </span>
            </div>
            <div class="">
              اللغه
              <span>
                <Icon name="twemoji:flag-for-flag-egypt" class="mx-1" />
              </span>
              <span>
                <Icon name="material-symbols:arrow-drop-down" />
              </span>
            </div>
          </div>
        </div>
        <div
          class="d-flex flex-column align-items-center justify-content-center col-md-8 col-lg-3 py-4 py-lg-0"
        >
          <h3>حمل التطبيق الخاص بنا</h3>
          <div class="d-flex py-3">
            <img src="~/public/images/mobile.png" class="footer-logo" />
            <div class="text me-2">
              <p
                class="d-flex align-items-center justify-content-center h-75 fs-md"
              >
                احصل علي عروضنا فقط من التطبيق
              </p>
              <div class="d-flex align-items-center">
                <img src="~/public/images/appstore.png" class="footer-img" />
                <img src="~/public/images/google-play.png" class="footer-img" />
              </div>
            </div>
          </div>
          <img
            src="~/public/images/payments.png"
            style="object-fit: cover"
            class="d-none d-md-block w-100 mt-3"
          />
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background-color: $primary;
  color: $white;
  li:hover a {
    color: $white;
    opacity: 0.9;
  }
  &-logo {
    object-fit: cover;
    width: 40%;
  }
  &-img {
    max-width: 45%;
    object-fit: cover;
  }
}
</style>
