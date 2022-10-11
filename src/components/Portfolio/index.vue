<template>
  <div id="portfolio">
    <div class="title">
        <div class="title-decoration"></div>
        <h2>Portfolio</h2>
    </div>
    <transition name="showup" appear>
        <div>
            
            <!-- Swiper@5.4.5--vue-awesome-swiper@4.1.1-------------------->
            <div class="app-container">
                <swiper :options="swiperOption" id="mySwiper">

                    <!-- 輪播圖分頁 -->
                    <swiper-slide class="swiper_slide_item slide">
                        <img class="img" src="/Portfolio/ProductSearch.PNG" alt="e-commercial website">
                        <div class="description">
                            <h2><span>{{ $t("e-commercial")}}</span></h2>
                            <div class="intro">
                                <p class="text"><span class="intro-title">{{ $t("tech-intro")}}</span> 串接第三方API (Instagram)、前端頁面呈現 (Vue)、串接/撰寫後端伺服器API (Express)、資料庫增刪查改CRUD (註冊/登入系統、會員訂單查詢、購物車功能、下訂單功能)</p>
                                <ul class="list">
                                    <li><span class="intro-title">{{ $t("front-end")}}</span> Vue.js + VueX + VueRouter + SCSS + Axios + Mock.js..等</li>
                                    <li><span class="intro-title">{{ $t("back-end")}}</span> Node.js + Express + Mongoose</li>
                                    <li><span class="intro-title">{{ $t("database")}}</span> MongoDB</li>
                                    <li><span class="intro-title">{{ $t("version-control")}}</span> Git + Github</li>
                                </ul>
                            </div>
                        </div>
                        <p class="btn-container"><a class="btn" href="https://github.com/ruanpin/e-commercial" target="_blank"><i class="fa-brands fa-github" style="margin-right:0.5rem"></i>{{ $t("go-github")}}</a></p>
                        <p class="btn-container"><a class="btn" @click="goPortfolioShow">{{ $t("go-intro")}}</a></p>
                    </swiper-slide>
                    <swiper-slide class="swiper_slide_item slide">
                        <img class="img" src="/Portfolio/personal_website.PNG" alt="personal website">
                        <div class="description">
                            <h2><span>{{ $t("personal") }}</span></h2>
                            <div class="intro">
                                <p class="text"><span class="intro-title">{{ $t("tech-intro")}}</span> 前端頁面呈現 (Vue.js) + 多語言切換 (i18n)</p>
                                <ul class="list">
                                    <li><span class="intro-title">{{ $t("front-end")}}</span> Vue.js + VueX + VueRouter + i18n</li>
                                    <li><span class="intro-title">{{ $t("version-control")}}</span> Git + Github</li>
                                </ul>
                            </div>
                        </div>
                        <p class="btn-container"><a class="btn" href="https://github.com/ruanpin/ruanpin.github.io" target="_blank"><i class="fa-brands fa-github" style="margin-right:0.5rem"></i>{{ $t("go-github")}}</a></p>
                    </swiper-slide>
                    <!-- <swiper-slide class="swiper_slide_item">
                        Slide 3
                    </swiper-slide> -->

                    <!-- 下方動態小圓點 -->
                    <div class="swiper-pagination" slot="pagination"></div>
                    <!-- 控制左右按鈕 -->
                    <div class="swiper-button-prev swiper-btn" slot="button-prev"></div> 
                    <div class="swiper-button-next swiper-btn" slot="button-next"></div>
                </swiper>
            </div>
        </div> 
    </transition>
  </div>
</template>

<script>
    export default {
        name:'Portfolio',
        data(){
            return {
                //控制是否出現
                isshow:false,
                // 設定Swiper選項---------------------------------
                swiperOption: {
                    //分頁器選項
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true,
                        type: 'bullets', 
                        dynamicBullets: true,  //可隱藏其他的分頁器圓點(type為bullets時)
                        // renderBullet(index, className) {       // 自訂樣式
                        //     return `<span class="${className} swiper-pagination-bullet-custom">${index + 1}</span>`
                        // },
                    },
                    direction: 'horizontal', // 方向:水平或垂直
                    navigation: {   //左右按鈕
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev' 
                    },
                    //播放選項
                    loop: true, 
                    speed: 1000, // 切換時速度
                    autoplay: {
                        delay: 5000, // 每頁停留多久
                        disableOnInteraction: true, // 使用者操作後，會不會停止自動撥放功能
                        stopOnLastSlide: true, // true:當轉到最後一頁便不會再轉動(loop:true時無效)
                    },
                    // on: {
                    // slideChangeTransitionEnd: function () {
                    //     console.log(this.activeIndex); //Console.log目前位置
                    // },
                    // },
                },
            }
        },
        watch:{
            '$store.state.itemNumber'(newValue, oldValue){
                if (this.isshow) return
                this.isshow = this.$store.state.itemNumber>=1
            }
        },
        methods:{
            goPortfolioShow(){
                this.$router.push({
                    name:'PortfolioShow'
                })
            }
        }
    }
</script>

<style scoped>
    #portfolio {
        width: 100%;
        /* background-color: skyblue; */
        height: 1180px;
        margin : 33px auto;
    }

    .title h2{
        font-size: 1.8em;
        margin-bottom: 36px;
        color:rgb(95, 72, 33);
        font-weight: 700;
    }

    .slide {
        width: 90%;
    }
    .img {
        width: 90%;
        display: block;
        margin:auto;
    }



    .description {
        font-size:1.3rem;
        line-height: 1.8rem;  
        margin-top:1.5rem;  
        display:flex;
        flex-direction: column;
        
    }
    .description h2 {
        text-align: center;
    }
    .description h2 span, span{
        font-weight: 700;
        font-size:1.45rem;
        padding : 0.2em 0.8em;
        background-color: rgb(77,95,44);
        border-radius: 1em;
        color:#fff;
    }
    .intro-title {
        font-weight: 700;
        background-color: rgb(164, 173, 143);
        color:black;
        font-size:1.3rem;
    }

    .description .intro .text {
        margin: 1.4rem 0;
        line-height: 2.5rem;
    }

    .description .intro .list li{
        margin: 0.3rem 0;        
        line-height: 2.5rem;
    }

    .btn-container {
        text-align: center;
        margin:1.4rem 0;
        margin-bottom:2.5rem;
        cursor:pointer;
    }

    .btn {
        background-color: rgb(101,122,141);
        padding : 0.5rem 1rem;
        color :#fff;
        font-size:1.4rem;
        font-weight: 700;
        border-radius: 1.5rem;;
    }
/* -----------------------------小圓球 */
    .title {
        position:relative;
    }

    .title-decoration {
        position: absolute;
        width:4em;
        height: 4em;
        left:80%;
        top:-50%;
        border-radius: 50%;
        background-color: rgb(87, 128, 11);
        opacity: 0.3;
        animation: titleDec 10s infinite;
    }


    @keyframes titleDec {
        45%,55%{
            transform: translateX(-50%);
        }
        100% {
            transform: translateX(0%);
        }
    }

    @-webkit-keyframes titleDec {
        45%,55%{
            transform: translateX(-50%)
        }
        100% {
            transform: translateX(0%)
        }
    }

    /* -----------------------------小圓球 */

    @keyframes showUp {
        from {
            transform: translateY(5%);
            opacity: 0;
        }
        to {
            transform: translateY(0%);
            opacity: 1;
        }
    }

    .showup-enter-active {
        animation: showUp 1s;
    }

    /* Swiper----------------- */


    #mySwiper{
        width: 80%;
        height: 1100px;
        background-color: aquamarine;
        border-radius: 35px;
    }

    .swiper-slide.swiper_slide_item{
        height: 1100px;
        background-color:rgb(245,235,216);
        padding:1.5em;

    }

    .swiper-pagination-bullet-custom .swiper-pagination-bullet{
        width: 20px !important;
        height: 20px !important;
    }

    #mySwiper {
        --swiper-navigation-color:rgb(95, 72, 33);
        --swiper-pagination-color:rgb(95, 72, 33);
    }

    @media screen and (max-width:800px) {
        #mySwiper {
            width: 98%;
        }
        .btn-container {
            margin:2.2rem 0;
        }
        #mySwiper{
            height: 1050px;
        }

        .swiper-slide.swiper_slide_item{
            height: 1050px;
        }
    }

</style>