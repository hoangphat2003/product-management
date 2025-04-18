<template>
  <div>
    <h2>Thêm sản phẩm</h2>
    <form @submit.prevent="handleAdd">
      <label for="product-name">Tên sản phẩm:</label>
      <input v-model="product.name" required />

      <label for="product-price">Giá:</label>
      <input v-model.number="product.price" type="number" required />

      <label for="product-stock">Số lượng:</label>
      <input v-model.number="product.stock" type="number" />

      <button type="submit">Thêm sản phẩm</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useProductStore } from '../stores/productStore'

const store = useProductStore()
const product = ref({ name: "", price: 0, stock: 0 })

const handleAdd = () => {
  store.addProduct({ ...product.value })
  product.value = { name: "", price: 0, stock: 0 }
}
</script>
