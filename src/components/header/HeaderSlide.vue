<template>
    <nav>
        <button @click="go('/add')">Thêm sản phẩm</button>
        <button @click="go('/products')">Danh sách sản phẩm</button>
        <button @click="go('/statistics')">Thống kê</button>
    </nav>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const go = path => router.push(path) // Hàm chuyển trang
</script>

<style scoped>
nav {
  display: flex;
  gap: 10px;
  background: #eee;
  padding: 10px;
}
button {
  padding: 5px 10px;
}
</style>