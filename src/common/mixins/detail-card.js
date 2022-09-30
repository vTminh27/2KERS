var DetailMixins = {
 
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
    }
  }
  