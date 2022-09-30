import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProductDetails from '../views/ProductDetails.vue'
import Products from '../components/Products.vue'
import CardDetails from '../views/CardDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product/:id',
    name: 'ProductDetails',
    component: ProductDetails
  },
  
  {
    path: '/listProduct',
    name: 'Products',
    component: Products
  },
  {
    path: '/cardDetails',
    name: 'CardDetails',
    component: CardDetails
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
