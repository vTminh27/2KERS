<template>
  <div>
    <Header>
      <!-- Slots -->
      <!-- <h2 class="text-white">2kers Store</h2> -->

      <a href="#" class="logo">2kers Store</a>
    </Header>
    <Banner></Banner>


    <!-- Dynamic & Async Components -->
    <component :is="componentName" />
        <!-- Review -->
        <section class="blog" id="blog">
            <h1 class="heading">Review</h1>
            <div class="box-container">
                <div class="box">
                    <img src="../assets/images/pic1.png" alt="">
                    <h3>Jane</h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Eos sequi temporibus impedit corporis vero ab exercitationem 
                        dolore voluptatibus, nisi non.
                    </p>
                    <div class="stars">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa fa-star"></i>
                    </div>
                </div>
                <div class="box">
                    <img src="../assets/images/pic2.png" alt="">
                    <h3>Minh</h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Eos sequi temporibus impedit corporis vero ab exercitationem 
                        dolore voluptatibus, nisi non.
                    </p>
                    <div class="stars">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa fa-star-half-o"></i>
                    </div>
                </div>
                <div class="box">
                    <img src="../assets/images/pic3.png" alt="">
                    <h3>Jack</h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Eos sequi temporibus impedit corporis vero ab exercitationem 
                        dolore voluptatibus, nisi non.
                    </p>
                    <div class="stars">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star-o"></i>
                        <i class="fa fa fa-star-half-o"></i>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer>
            <div class="footerLeft">
                <div class="footerMenu">
                    <h1 class="fMenuTitle">About Us</h1>
                    <ul class="fList">
                        <li class="fListItem">Company</li>
                        <li class="fListItem">Contact</li>
                        <li class="fListItem">Careers</li>
                        <li class="fListItem">Affiliates</li>
                        <li class="fListItem">Stores</li>
                    </ul>
                </div>
                <div class="footerMenu">
                    <h1 class="fMenuTitle">Useful Links</h1>
                    <ul class="fList">
                        <li class="fListItem">Support</li>
                        <li class="fListItem">Refund</li>
                        <li class="fListItem">FAQ</li>
                        <li class="fListItem">Feedback</li>
                        <li class="fListItem">Stories</li>
                    </ul>
                </div>
                <div class="footerMenu">
                    <h1 class="fMenuTitle">Products</h1>
                    <ul class="fList">
                        <li class="fListItem">Air Jordan</li>
                        <li class="fListItem">New Balance</li>
                        <li class="fListItem">Adidas</li>
                        <li class="fListItem">Puma</li>
                        <li class="fListItem">Converse</li>
                    </ul>
                </div>
            </div>
            <div class="footerRight">
                <div class="footerRightMenu">
                    <h1 class="fMenuTitle">Subscribe to our newsletter</h1>
                    <div class="fMail">
                        <input type="text" placeholder="your@email.com" class="fInput">
                        <button class="fButton">Join!</button>
                    </div>
                </div>
                <div class="footerRightMenu">
                    <h1 class="fMenuTitle">Follow Us</h1>
                    <div class="fIcons">
                        <img src="../assets/images/facebook.png" alt="" class="fIcon">
                        <img src="../assets/images/twitter.png" alt="" class="fIcon">
                        <img src="../assets/images/instagram.png" alt="" class="fIcon">
                    </div>
                </div>
                <div class="footerRightMenu">
                    <span class="copyright">@Minh_Deakin. All rights reserved. 2022.</span>
                </div>
            </div>
        </footer>
    <!-- <Products /> -->
  </div>

</template>

<script>
import Header from '../components/Header.vue'
import Products from '../components/Products.vue'
import Banner from '../views/Banner.vue'
import Categories from '../views/Categories.vue'
export default {
  name: 'Home',
  data() {
    return {
      componentName: "categories"
    }
  },
  components: { Header, Products, Banner,Categories },

}
</script>
<style lang="scss" scoped>



.category-title {
  text-transform: uppercase;
  color: #000000;
  font-size: 40px;
}


/* Review */

.blog .box-container{
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
}
.blog .box-container .box{
    flex: 1 1 30rem;
    text-align: center;
    border: .1rem solid rgba(0, 0, 0, .1);
    border-radius: .5rem;
    background: #f9f9f9;
    padding: 2rem;
}
.blog .box-container .box img{
    border-radius: 50%;
    object-fit: cover;
    height: 15rem;
    width: 15rem;
    margin: 1rem 0;
    border: 4px solid #ddd;
}
.blog .box-container .box img:hover{
   transform: scale(1.2);
}
.blog .box-container .box h3{
    font-size: 2.5rem;
    color: #000;
}
.blog .box-container .box p{
    font-size: 1.6rem;
    color: #666;
    padding: 1rem 0;
}
.blog .box-container .box .stars i{
    color: orangered;
    font-size: 2rem;
}

.heading{
    text-align: center;
    text-transform: uppercase;
    font-size: 4rem;
    color: var(--black);
    padding: 70px;
}

/* Footer */

footer {
display: flex;
}

.footerLeft {
    flex: 2;
    display: flex;
    justify-content: space-between;
    padding: 50px;
}

.fMenuTitle {
    font-size: 30px;
    margin-bottom: 20px;
}

.fList {
    padding: 0;
    list-style: none;
}

.fListItem {
    margin-bottom: 15px;
    color: gray;
    cursor: pointer;
    font-size: 20px;
}

.footerRight {
    flex: 1;
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.fInput {
    padding: 5px;
}

.fButton {
    padding: 5px;
    background-color: black;
    color: white;
}

.fIcons{
    display: flex;
}

.fIcon{
    width: 20px;
    height: 20px;
    margin-right: 10px;
}

.copyright{
    font-weight: 300;
    font-size: 15px;
}

@media screen and (max-width:700px) {   
.segment-1{
  display: none;
}
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

    