<template>
  <header class="py-3">
    <div
      id="menu-bar"
      class="fas fa-bars"
      @click="clickMenu"
      ref="menubar"
    ></div>
    <router-link to="/" class="logo">
      <slot>
        <!-- <a href="#">2kers</a> -->
      </slot>
    </router-link>

    <nav class="navbar" ref="navbar">
      <!-- <a href="#home">Home</a> -->
      <router-link to="/">
        <a href="#"> Home </a>
      </router-link>
      <a href="#home">Category</a>
      <router-link to="/listProduct">
        <a href="#"> Products </a>
      </router-link>
      <!-- <a href="#home">Products</a> -->
      <a href="#home">Review</a>
    </nav>

    <div class="icons">
      <a href="#" class="fas fa-heart"></a>
      <!-- <a href="#" class="fas fa-shopping-cart"></a> -->
      <router-link
        to="/cardDetails"
        class="text-decoration-none"
        style="display: inline-block"
      >
        <div><i class="fas fa-shopping-cart mx-1"></i> {{ card.length }}</div>
      </router-link>
      <a href="#" class="fas fa-user"></a>
    </div>

    <!-- <div class="container-md d-flex justify-content-between align-items-center">


            <div id="menu-bar" class="fas fa-bars"></div>

            <slot>

            </slot>
            <nav class="navbar">
                <router-link to="/">
                    <a href="#">

                        Home
                    </a>
                </router-link>
                <a href="#home">Category</a>
                <a href="#home">Products</a>
                <a href="#home">Review</a>
            </nav> -->
    <!-- State Transitions animationShow -->
    <!-- <div class="icons" :class="{ 'shake': animationShow }">
                <router-link to="/cardDetails" class="text-decoration-none" style="display: inline-block;">
                    <h2 class="cursor">
                        <i class="fas fa-shopping-cart mx-1"></i>
                        {{card.length}}
                    </h2>
                </router-link>
            </div>


        </div> -->
  </header>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Header",
  data() {
    return {
      animationShow: false,
      countItem: 0,
    };
  },
  watch: {
    lengItem(value) {
      this.animationShow = true;
      setTimeout(() => {
        this.animationShow = false;
      }, 500);
    },
  },
  methods: {
    clickMenu() {
      // console.log(this.$refs.menubar);
      this.$refs.menubar.classList.toggle("fa-times");
      this.$refs.navbar.classList.toggle("active");
    },
  },
  computed: {
    ...mapState({
      card: (state) => state.card,
    }),
    lengItem() {
      return this.card.length;
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  // font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  // margin: 0;
  // padding: 0;
  transition: all 0.2s linear;
  // text-decoration: none;
}
.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}

@media (max-width: 991px) {
  html {
    font-size: 55%;
  }

  header {
    padding: 2rem;
  }
}

header {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: #fff;
  padding: 2rem 9%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
}

header .navbar a {
  font-size: 1.5rem;
  color: #000000;
  margin: 0 1rem;
  text-decoration: none;
}

header .navbar a:hover {
  color: #ff9f1a;
  text-decoration: none;
}

header .icons a {
  font-size: 2.5rem;
  color: #000000;
  text-decoration: none;
  margin-left: 1.5rem;
}

header .icons a:hover {
  color: #ff9f1a;
  text-decoration: none;
}

#menu-bar {
  font-size: 22px;
  padding: 0.5rem 1.5rem;
  border: 0.1rem solid #000000;
  color: #000000;
  border-radius: 0.3rem;
  cursor: pointer;
  display: none;
}
header {
  h2 {
    text-shadow: -1px 3px 2px rgba(0, 0, 0, 0.3);
    &.cursor {
      cursor: pointer;
    }
  }
}

header .logo {
  font-size: 22px;
  color: var(--black);
  text-decoration: none;
  font-weight: 700;
  a {
    color: black;
    text-decoration: none;
  }
}

header .navbar a {
  font-size: 19px;
  color: var(--black);
  margin: 0 1rem;
}

header .navbar a:hover {
  color: var(--orange);
}

header .icons a {
  font-size: 19px;
  color: var(--black);
  margin-left: 1.5rem;
}

header .icons a:hover {
  color: var(--orange);
}

@media (max-width: 868px) {
  #menu-bar {
    display: block;
    font-size: 22px;
    padding: 0.5rem 1.5rem;
    border: 0.1rem solid #000000;
    color: #000000;
    border-radius: 0.3rem;
    cursor: pointer;
  }

  header .navbar {
    display: flex;
    flex-flow: column;
    align-items: normal;
    position: absolute;
    top: 100%;
    left: -120%;
    width: 100%;
    background: #eee;
    border-top: 0.1rem solid rgba(0, 0, 0, 0.1);
  }

  header .navbar.active {
    left: 0;
  }

  header .navbar a {
    font-size: 17px;
    background: #fff;
    border: 0.1rem solid var(--black);
    border-radius: 0.5rem;
    padding: 16px;
    margin: 8px;
    display: block;
    text-align: center;
  }
}

@media screen and (max-width: 700px) {
  nav {
    padding: 20px;
  }

  .navBottom {
    flex-wrap: wrap;
  }

  .menuItem {
    margin: 20px;
    font-weight: 700;
    font-size: 20px;
  }

  .slider {
    clip-path: none;
  }

  .sliderImg {
    width: 90%;
  }

  .sliderBg {
    width: 100%;
    height: 100%;
  }

  .sliderTitle {
    display: none;
  }

  .sliderPrice {
    top: unset;
    bottom: 40px;
    left: 0;
    background-color: lightgrey;
  }

  .buyButton {
    right: 30px;
    top: 50px;
  }

  footer {
    flex-direction: column;
    align-items: center;
  }

  .footerLeft {
    padding: 20px;
    width: 90%;
  }

  .footerRight {
    padding: 20px;
    width: 90%;
    align-items: center;
    background-color: whitesmoke;
  }

  .fIcon {
    margin: 2px 12px;
  }

  .fMenuTitle {
    margin-top: 10px;
  }
}
// header {

//     h2 {
//         text-shadow: -1px 3px 2px rgba(0, 0, 0, 0.3);

//         &.cursor {
//             cursor: pointer;
//         }
//     }
// }
</style>