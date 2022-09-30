<template>
  <Header>
    <a href="#" class="logo">2kers Store</a>
  </Header>
  <div class="container-md my-5">
    <!-- Enter/Leave & List Transitions -->

    <div v-if="$store.state.card.length == 0">
      <div class="alert alert-danger shadow-sm" role="alert">
        <i class="fas fa-exclamation-triangle mx-1"></i>
        Your shopping card is empty.
      </div>
      <div class="d-inline-block mt-5">
        <router-link to="/" class="text-decoration-none">
          <a href="#" class="btn btn-warning d-flex align-items-center">
            <i class="fas fa-arrow-left mx-1"></i>
            Back to Main Page
          </a>
        </router-link>
      </div>
    </div>
    <div v-else>
      <div class="table-responsive">
        <table class="table table-striped table-bordered table-hover table-light shadow-sm">
          <thead>
            <tr class="text-center">
              <th scope="col">#</th>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Category</th>
              <th scope="col">Price</th>
              <th scope="col">Rating</th>
              <th></th>
            </tr>
          </thead>
          <transition name="fade">
            <tbody>
              <tr v-for="(product,index) in $store.state.card" :key="index" class="text-center">
                <td>{{index + 1}}</td>
                <td>
                  <img :src="product.image" :alt="product.title" class="img-fluid">
                </td>
                <td>{{product.title}}</td>
                <td class="text-capitalize">{{product.category}}</td>
                <td>
                  <i class="fas fa-dollar-sign"></i>
                  {{(product.price).toFixed(2)}}
                </td>
                <td>
                  <span class="rating shadow-sm" :class="{
                      highRating: product.rating <= 5,
                      avgRating: product.rating < 4,
                      lowRating: product.rating < 3,
                  }">
                    {{product.rating.toFixed(2)}}
                  </span>
                </td>

                <td>
                  <button class="btn btn-danger" @click="discardProduct(index)">
                    <i class="fas fa-trash-alt"></i>
                  </button>
                </td>
              </tr>


            </tbody>
          </transition>

        </table>
      </div>
      <div class="d-flex flex-sm-row flex-column align-items-center justify-content-between mt-5">
        <div class="d-inline-block">
          <router-link to="/listProduct" class="text-decoration-none">
            <a href="#" class="btn btn-warning d-flex align-items-center">
              <i class="fas fa-arrow-left mx-1"></i>
              Back to Main Page
            </a>
          </router-link>
        </div>
        <div class="d-flex align-items-center mt-sm-0 mt-4">
          <p class="mx-2 fs-5">Total Price: </p>
          <p class="fs-3">
            <i class="fas fa-dollar-sign mx-0"></i>
            {{totalPrice.toFixed(2)}}
          </p>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import Header from '../components/Header.vue'
export default {
  name: 'CardDetails',
  components: { Header },
  data() {
    return {
      totalPrice: 0
    }
  },
  methods: {
    getTotalPrice() {
      if (this.$store.state.card != '') {
        this.$store.state.card.forEach(item => {
          this.totalPrice += item.price
        })
      }
    },
    discardProduct(index) {
      let item = this.$store.state.card[index].price
      this.totalPrice -= item
      this.$store.state.card.splice(index, 1)
    }
  },
  created() {
    this.getTotalPrice()
  }
}
</script>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.logo {
  font-size: 2.5rem;
  color: #000000;
  text-decoration: none;
}

table {
  tbody {
    tr {
      td {
        height: 6rem;
        width: 2rem;

        img {
          width: 60%;
          height: 100%;
        }
      }
    }
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>