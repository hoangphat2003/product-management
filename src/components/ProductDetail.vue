<template>
    <div v-if="product">
      <h2>Chỉnh sửa sản phẩm</h2>
      <form @submit.prevent="saveProduct">
        <label for="name">Tên sản phẩm:</label>
        <input id="name" v-model="editableProduct.name" required />
  
        <label for="price">Giá:</label>
        <input id="price" v-model.number="editableProduct.price" type="number" required />
  
        <label for="stock">Số lượng kho:</label>
        <input id="stock" v-model.number="editableProduct.stock" type="number" required />
  
        <button type="submit">Lưu</button>
        <button @click.prevent="goBack">Quay lại danh sách</button>
      </form>
    </div>
  
    <div v-else>
      <p>Sản phẩm không tồn tại!</p>
      <button @click="goBack">Quay lại danh sách</button>
    </div>
</template>
  
<script setup>
import { useRoute, useRouter } from 'vue-router'
import { ref, computed } from 'vue'
import { useProductStore } from '../stores/productStore'

const route = useRoute()
const router = useRouter()
const store = useProductStore()
  
// Tìm sản phẩm theo ID
const product = computed(() => 
    store.products.find(p => p.id === Number(route.params.id))
)
  
// Clone sản phẩm ra để chỉnh sửa
const editableProduct = ref(product.value ? { ...product.value } : null)
  
// Hàm lưu dữ liệu
const saveProduct = () => {
    if (!editableProduct.value) return;
  
    store.updateProduct(editableProduct.value)
    alert('Đã lưu thay đổi!')
    router.push('/products')
    }
  
const goBack = () => router.push('/products')
</script>
  
<style scoped>
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 300px;
  }
  input {
    padding: 5px;
  }
  button {
    padding: 5px 10px;
    margin-top: 10px;
  }
</style>
  