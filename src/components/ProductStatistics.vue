<template>
    <div>
      <h3>Tổng giá trị kho hàng: {{ totalStockValue }}</h3>
    </div>
</template>
  
<script setup>
import { useProductStore } from '../stores/productStore'
import { computed } from 'vue'

const store = useProductStore()
const totalStockValue = computed(() =>
    store.products.reduce((total, p) => total + p.price * p.stock, 0)
    )
</script>
  