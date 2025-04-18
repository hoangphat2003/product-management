import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'

import ProductList from './components/ProductList.vue'
import ProductDetail from './components/ProductDetail.vue'
import ProductForm from './components/ProductForm.vue'
import ProductStatistics from './components/ProductStatistics.vue'

// Khai báo route cho các trang
const routes = [
    { path: '/', redirect: '/products'},
    { path: '/add', component: ProductForm},
    { path: '/products', component: ProductList},
    { path: '/products/:id', component: ProductDetail, props: true},
    { path: '/statistics', component: ProductStatistics}
]

// Tạo router
const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

app.mount('#app')
