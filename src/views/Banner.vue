<template>
  <div class="old-banner">
    <div class="feature">
      <div class="navBottom">
        <h3 class="menuItem" @click="scrollItem(0)">AIR JORDAN 1</h3>
        <h3 class="menuItem" @click="scrollItem(1)">NEW BALANCE</h3>
        <h3 class="menuItem" @click="scrollItem(2)">ADIDAS ULTRABOOST</h3>
        <h3 class="menuItem" @click="scrollItem(3)">PUMA</h3>
        <h3 class="menuItem" @click="scrollItem(4)">CONVERSE</h3>
      </div>
    </div>
    <div class="slider">
      <div class="sliderWrapper" ref="sliderWrapper">
        <div class="sliderItem">
          <img src="../assets/images/airjordan.png" alt="" class="sliderImg" />
          <div class="sliderBg"></div>
          <h1 class="sliderTitle">
            AIR JORDAN 1<br />
            NEW<br />
            SEASON
          </h1>
          <h2 class="sliderPrice">$200</h2>
          <a href="#product">
            <button class="buyButton">BUY NOW!</button>
          </a>
        </div>
        <div class="sliderItem">
          <img src="../assets/images/newbalance.png" alt="" class="sliderImg" />
          <div class="sliderBg"></div>
          <h1 class="sliderTitle">
            <br />> NEW BALANCE<br />
            NEW<br />
            SEASON
          </h1>
          <h2 class="sliderPrice">$149</h2>
          <a href="#product">
            <button class="buyButton">BUY NOW!</button>
          </a>
        </div>
        <div class="sliderItem">
          <img src="../assets/images/adidas.png" alt="" class="sliderImg" />
          <div class="sliderBg"></div>
          <h1 class="sliderTitle">
            ADIDAS<br />
            NEW<br />
            SEASON
          </h1>
          <h2 class="sliderPrice">$109</h2>
          <a href="#product">
            <button class="buyButton">BUY NOW!</button>
          </a>
        </div>
        <div class="sliderItem">
          <img src="../assets/images/puma.png" alt="" class="sliderImg" />
          <div class="sliderBg"></div>
          <h1 class="sliderTitle">
            PUMA<br />
            NEW<br />
            SEASON
          </h1>
          <h2 class="sliderPrice">$129</h2>
          <a href="#product">
            <button class="buyButton">BUY NOW!</button>
          </a>
        </div>
        <div class="sliderItem">
          <img src="../assets/images/converse.png" alt="" class="sliderImg" />
          <div class="sliderBg"></div>
          <h1 class="sliderTitle">
            Converse<br />
            NEW<br />
            SEASON
          </h1>
          <h2 class="sliderPrice">$99</h2>
          <a href="#product">
            <button class="buyButton">BUY NOW!</button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    scrollItem(index) {
      this.$refs.sliderWrapper.style.transform = `translateX(${
        -100 * index
      }vw)`;
    },
  },
};
</script>
<style lang="scss" scoped>
.old-banner {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
  transition: all 0.2s linear;
  text-decoration: none;
}
/*Significant shoes*/
.slider {
  background: url("https://images.unsplash.com/photo-1604147495798-57beb5d6af73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80");
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);
  overflow: hidden;
}

.sliderWrapper {
  display: flex;
  width: 500vw;
  transition: all 1.5s ease-in-out;
}

.sliderItem {
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.sliderBg {
  width: 750px;
  height: 750px;
  border-radius: 50%;
  position: absolute;
}

.sliderImg {
  z-index: 10000;
}

.sliderTitle {
  position: absolute;
  top: 10%;
  right: 10%;
  font-size: 50px;
  font-weight: 900;
  text-align: center;
  color: white;
  z-index: 1;
}

.sliderPrice {
  position: absolute;
  top: 10%;
  left: 10%;
  font-size: 60px;
  font-weight: 300;
  text-align: center;
  color: white;
  border: 1px solid gray;
  z-index: 1;
}

.buyButton {
  position: absolute;
  top: 50%;
  right: 10%;
  font-size: 30px;
  font-weight: 900;
  color: white;
  border: 1px solid gray;
  background-color: black;
  z-index: 1;
  cursor: pointer;
}

.buyButton:hover {
  background-color: white;
  color: black;
}

.sliderItem:nth-child(1) .sliderBg {
  background-color: #0e6306;
}
.sliderItem:nth-child(2) .sliderBg {
  background-color: rgb(189, 189, 189);
}
.sliderItem:nth-child(3) .sliderBg {
  background-color: rgb(182, 142, 147);
}
.sliderItem:nth-child(4) .sliderBg {
  background-color: rgb(98, 118, 167);
}
.sliderItem:nth-child(5) .sliderBg {
  background-color: rgb(124, 115, 80);
}

.sliderItem:nth-child(1) .sliderPrice {
  color: #369e62;
}
.sliderItem:nth-child(2) .sliderPrice {
  color: white;
}
.sliderItem:nth-child(3) .sliderPrice {
  color: teal;
}
.sliderItem:nth-child(4) .sliderPrice {
  color: cornflowerblue;
}
.sliderItem:nth-child(5) .sliderPrice {
  color: cornsilk;
}
/*Category*/
.feature {
  background-color: #111;
  color: white;
  padding-top: 30px;
  padding-bottom: 30px;
}

.navBottom {
  display: flex;
  align-items: center;
  justify-content: center;
}

.menuItem {
  font-size: 20px;
  margin-right: 100px;
  cursor: pointer;
  color: lightgray;
  font-weight: 400;
  width: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}



@media screen and (max-width:1200px) {   

    nav{
        padding: 20px;
    }

    .navBottom{
        flex-wrap: wrap;
    }

    .menuItem{
      margin: 20px;
      font-weight: 700;
      font-size: 20px;
    }
  
    .slider{
      clip-path: none;
    }
  
    .sliderImg{
      width: 90%;
    }
  
    .sliderBg{
      width: 100%;
      height: 100%;
    }
  
    .sliderTitle{
      display: none;
    }
  
    .sliderPrice{
      top: unset;
      bottom: 40px;
      left: 0;
      background-color: lightgrey;
    }
  
    .buyButton{
      right: 30px;
      top: 50px;
    }
  
    footer{
      flex-direction: column;
      align-items: center;
    }
  
    .footerLeft{
      padding: 20px;
      width: 90%;
    }
  
    .footerRight{
      padding: 20px;
      width: 90%;
      align-items: center;
      background-color: whitesmoke;
    }

    .fIcon{
        margin: 2px 12px;
    }

    .fMenuTitle{
        margin-top: 10px;
    }
}
</style>
