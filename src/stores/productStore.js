import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductStore = defineStore('product', () => {
  const products = ref([
    { id: 1, name: "Laptop", price: 15000000, stock: 5 },
    { id: 2, name: "Điện thoại", price: 8000000, stock: 0 },
    { id: 3, name: "Tai nghe", price: 500000, stock: 10 }
  ])

  const addProduct = (product) => {
    if (product.name && product.price > 0) {
      products.value.push({
        id: Date.now(),
        ...product
      })
    } else {
      alert("Điền đầy đủ tên sản phẩm và giá.")
    }
  }

  const removeProduct = (index) => {
    products.value.splice(index, 1)
  }

  const updateProduct = (updatedProduct) => {
    const index = products.value.findIndex(p => p.id === updatedProduct.id)
    if (index !== -1) {
      products.value[index] = { ...updatedProduct }
    }
  }

  return { products, addProduct, removeProduct, updateProduct }
})

