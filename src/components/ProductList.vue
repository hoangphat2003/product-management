<template>
    <h2>Danh sách sản phẩm</h2>
    <table border="1">
      <thead>
        <tr>
          <th>ID</th><th>Name</th><th>Price</th><th>Status</th><th>Edit</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td :style="{ color: product.stock > 0 ? 'black' : 'red' }">
            {{ product.stock > 0 ? 'Còn hàng' : 'Hết hàng' }}
          </td>
          <td><button @click="goDetail(product.id)">Xem chi tiết</button></td>
          <td><button @click="handleRemove(index)">Xóa</button></td>
        </tr>
      </tbody>
    </table>
</template>
  
<script setup>
import { useProductStore } from '../stores/productStore'
import { useRouter } from 'vue-router'
import { computed } from 'vue'
  
const store = useProductStore()
const products = computed(() => store.products)
const router = useRouter()

const handleRemove = (index) => {
  store.removeProduct(index)
}

const goDetail = id => {
  router.push(`/products/${id}`)
}

</script>

<style>
input, button {
  margin: 5px;
  padding: 5px;
}
button {
  cursor: pointer;
  background-color: red;
  color: white;
}
</style>
