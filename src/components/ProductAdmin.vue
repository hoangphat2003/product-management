<template>
  <div>
    <HeaderSlide />

    <!--Khi người dùng điều hướng sang một route khác, 
    thành phần liên kết với route đó sẽ được hiển thị trong thẻ router-view.-->
    <router-view></router-view>
  </div>
</template>

<script setup>
import HeaderSlide from './header/HeaderSlide.vue'
</script>
