import axios from 'axios'
import { createStore } from 'vuex'
import products from '../data/products'
export default createStore({
  state: {
    products: [],
    card: []
  },
  mutations: {
    getProducts(state, products){
      state.products = products
    }
  },
  actions: {
    getProductsAction({commit}){
      // axios('https://fakestoreapi.com/products').then(res => {
      //   commit('getProducts', res.data)
      // })
       commit('getProducts', products);
    }
  },
  modules: {
  }
})
