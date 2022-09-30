<template>
  <div>
    <div class="categories">
      <div class="wrapper">
        <h3 class="category-title">Categories</h3>

        <div class="categories-container">
          <div class="category">
            <img src="../assets/images/nikelogo.jpg" alt="" />
            <div class="category-body">
              <h4>Nike</h4>
            </div>
          </div>
          <div class="category">
            <img src="../assets/images/adidaslogo.png" alt="" />
            <div class="category-body">
              <h4>Adidas</h4>
            </div>
          </div>
          <div class="category">
            <img src="../assets/images/newbalancelogo.png" alt="" />
            <div class="category-body">
              <h4>New Balance</h4>
            </div>
          </div>
          <div class="category">
            <img src="../assets/images/asicslogo.png" alt="" />
            <div class="category-body">
              <h4>Asics</h4>
            </div>
          </div>
          <div class="category">
            <img src="../assets/images/converselogo.png" alt="" />
            <div class="category-body">
              <h4>Converse</h4>
            </div>
          </div>
          <div class="category">
            <img src="../assets/images/pumalogo.png" alt="" />
            <div class="category-body">
              <h4>Puma</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--Latest Product-->
    <div class="container">
      <div class="segment-1">
        <div class="segment-1-1">
          <h1>Discover</h1>
          <h4 class="text-2">Sneakers</h4>
        </div>
      </div>
      <div class="segment-2">
        <div class="segment-2-1">
          <h1>01</h1>
        </div>
        <div class="segment-2-2">
          <h3>Nike Air Max 97</h3>
          <h2>Silver Bullet</h2>
          <button>+</button>
        </div>
        <img src="../assets/images/airmax.png" alt="" class="nike-shoe" />
      </div>

      <div class="segment-3">
        <div class="segment-3-1">
          <h1>02</h1>
        </div>
        <div class="segment-3-2">
          <h3>Adidas Forum '84</h3>
          <h2>Barcelona</h2>
          <button>+</button>
        </div>
        <img
          src="../assets/images/adidasforum.png"
          alt=""
          class="adidas-shoe"
        />
      </div>
      <!-- <div class="segment-4"></div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Categories",

  data() {
    return {
      totalPrice: 0,
    };
  },
  methods: {
    getTotalPrice() {
      if (this.$store.state.card != "") {
        this.$store.state.card.forEach((item) => {
          this.totalPrice += item.price;
        });
      }
    },
    discardProduct(index) {
      let item = this.$store.state.card[index].price;
      this.totalPrice -= item;
      this.$store.state.card.splice(index, 1);
    },
  },
  created() {
    this.getTotalPrice();
  },
};
</script>

<style lang="scss" scoped>
/*Categories*/
.categories {
  background-color: rgb(255, 255, 255);
  width: 100%;
  padding-top: 20px;
}

.categories .wrapper {
  width: 50%;
  margin: auto;
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  flex-direction: column;
}

.categories .wrapper .categories-container {
  display: flex;
  gap: 55px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.categories .wrapper .categories-container .category {
  width: 160px;
  height: 160px;
  position: relative;
  overflow: hidden;
  border-radius: 100%;
  transition: 0.5s ease-out;
}

.categories .wrapper .categories-container .category:hover {
  cursor: pointer;
}

.categories .wrapper .categories-container .category:hover img {
  transform: scale(1.2);
  transition: 0.5s ease-in;
}

.categories .wrapper .categories-container .category::before {
  content: "";
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #33333357;
  position: absolute;
  z-index: 1;
}

.categories .wrapper .categories-container .category img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.categories .wrapper .categories-container .category .category-body {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  text-align: center;
  color: #fff;
  z-index: 2;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.categories .wrapper .categories-container .category .category-body h4 {
  font-size: 30px;
}
/* Latest Product*/
.container {
  width: 100%;
  height: 665px;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  z-index: 5;
  position: inherit;
  flex-wrap: wrap;
}

.segment-1 {
  height: 550px;
  width: 220px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  overflow: hidden;
}

.segment-2 {
  background: linear-gradient(45deg, #004d4d, #00b3b3);
  height: 550px;
  width: 280px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow: 8px 8px 12px #ddd;
  position: relative;
}

.segment-3 {
  background: linear-gradient(45deg, #ff3333, #ff8080);
  height: 475px;
  width: 280px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow: 8px 8px 12px #ddd;
  position: relative;
}

.segment-4 {
  overflow: hidden;
  height: 475px;
  width: 220px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow: 8px 8px 12px #ddd;
}

/** SEGMENT 1**/

.segment-1-1 {
  width: 100%;
  height: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container .segment-1-1 h1 {
  transform: rotate(270deg);
  font-family: sans-serif;
}

.container .segment-1-1 h4 {
  transform: rotate(270deg);
  font-family: sans-serif;
}

.segment-1-1 h1 {
  font-size: 50px;
}

.segment-1-1 h4 {
  color: #ccc;
  margin-left: -90px;
  font-size: 30px;
}

/** SEGMENT 2**/

.segment-2-1 {
  width: 100%;
  height: 65%;
  padding: 0 25px;
}

.segment-2-1 h1 {
  font-size: 60px;
  color: #fff;
}

.segment-2-2 {
  width: 100%;
  height: 30%;
  padding: 25px;
}

.segment-2-2 button {
  text-decoration: none;
  color: #000;
  background-color: #fff;
  padding: 8px 28px;
  margin-top: 30px;
  border: none;
  border-radius: 20px;
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;
}

.container .segment-2-2 h3 {
  color: #fff;
  font-size: 30px;
}

.container .segment-2-2 h2 {
  color: #ffcccc;
  font-size: 20px;
}

.nike-shoe {
  width: 380px;
  position: absolute;
  top: 25%;
  left: -30%;
  z-index: 10;
  transform: rotate(-30deg);
}

/** SEGMENT 3**/

.segment-3-1 {
  width: 100%;
  height: 70%;
  padding: 0 25px;
}

.segment-3-1 h1 {
  font-size: 60px;
  color: #fff;
}

.segment-3-2 {
  width: 100%;
  height: 25%;
  padding: 25px;
}

.segment-3-2 button {
  text-decoration: none;
  color: #000;
  background-color: #fff;
  padding: 8px 28px;
  margin-top: 5px;
  border: none;
  border-radius: 20px;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
}

.container .segment-3-2 h3 {
  color: #fff;
  font-size: 20px;
  margin-top: -10px;
}

.container .segment-3-2 h2 {
  color: #ffcccc;
  font-size: 20px;
}

.adidas-shoe {
  width: 380px;
  position: absolute;
  top: 15%;
  left: -30%;
  z-index: 10;
  transform: rotate(-30deg);
}
@media (max-width: 645px) {
    .container{
      flex-flow: column;
      align-items: center;
      height: auto;
    }
    .segment-2{
      margin-bottom: 16px;
    }
}
@media (max-width: 994px) {
  .container {
    .segment-3-2{
        padding-top: 0px;
    }
    .segment-3-2 h3{
        font-size: 16px;
    }
    .adidas-shoe{
        top: 20%;
    }
    .segment-2-2 h3{
        font-size: 16px !important;
    }
    .segment-2-2{
        padding-bottom: 10px ;
        padding-top: 0px;
        height: 26%;
        button{
          margin-top: 0px;
        }
    }
    .segment-2-1 h1 {
      font-size: 44px;
    }
    .nike-shoe {
      top: 17%;
    }
    .segment-3 {
      height: 350px;
      width: 180px;
      img {
        width: 250px;
      }
    }
    .segment-2 {
      height: 380px;
      width: 180px;
      img {
        width: 250px;
      }
    }
    .segment-1 {
      height: 350px;
      width: 120px;
      h1 {
        font-size: 30px !important;
      }
      .text-2 {
        font-size: 25px !important;
      }
    }
  }
}

</style>