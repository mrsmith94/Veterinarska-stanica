<template>
  <q-layout class="bg-image" v-cloak>
    <q-page-container>
      <q-page class="flex flex-center">
        <q-card class="bg-transparent no-border no-shadow">
          <div
            class="row items-center full-width justify-center q-col-gutter-lg"
          >
            <q-img
              :src="'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'"
              spinner-color="white"
              style="height: 440px; max-width: 350px"
            />
          </div>
          <div class="row full-width">
            <div class="col-lg-12 col-md-12 cl-sm-12 col-xs-12">
              <div>
                <div class="text-h3 text-center text-white">
                  Vetrinarska stanica
                </div>
                <div class="text-h6 text-center text-white">
                  Ova stranica je jos uvijek u izradi
                </div>
              </div>
            </div>
          </div>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
</script>
<style>
.bg-image {
  background-image: linear-gradient(135deg, #7028e4 0%, #e5b2ca 100%);
}
[v-cloak] {
  display: none !important;
}
</style>
