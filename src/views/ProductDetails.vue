<template>
    <Header >
        <a href="#" class="logo">2kers Store</a>
    </Header>
    <div class="container-md mt-5">
        <div v-for="product in products" :key="product.id">
            <div v-if="product.id == $route.params.id">
                
                <ProductItem :product="product" @AddItem="addToCard"></ProductItem>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from '@vue/reactivity'
    import { mapState } from 'vuex'
import Header from '../components/Header.vue'
import ProductItem from './ProductItem.vue'
export default {
    name: 'ProductDetails',
    components: { Header, ProductItem },
    data() {
        return {

        }
    },
    created(){
        // debugger
        // console.log(1);
        // // console.log($route.params.id);
        // console.log(2);
    },
    methods: {
        formatRating(product) {
            return product.toFixed(1)
        },
        formatPrice(product) {
            return product.toFixed(2)
        },
        formatDescription(product) {
            return product.charAt(0).toUpperCase() + product.slice(1)
        },
        addToCard(product) {
            return this.$store.state.card.push(product)
        }
    },
    computed: {
        ...mapState({
            products: (state) => state.products
        })
    }
}
</script>

<style lang="scss" scoped>
    .logo {
    font-size: 2.5rem;
    color: #000000;
    text-decoration: none;
}
.row {
    .product-img {
        height: 60vh;
        padding: 0;
        margin: 0;

        img {
            height: 100%;
            width: 100%;
            transform: scale(0.75, 0.85);

            @media(max-width: 30rem) {
                transform: scale(0.9);
            }
        }
    }

    .quantity-input {
        width: 3rem;
    }
}
</style>