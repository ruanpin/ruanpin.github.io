<template>
  <div id="portfolio">
    <div class="title">
        <div class="title-decoration"></div>
        <h2>Portfolio</h2>
    </div>
    <transition name="showup">
        <div v-show="isshow">
            
            <!-- Swiper@5.4.5--vue-awesome-swiper@4.1.1-------------------->
            <div class="app-container">
                <swiper :options="swiperOption" id="mySwiper">

                    <!-- 輪播圖分頁 -->
                    <swiper-slide class="swiper_slide_item">
                        Slide 1
                    </swiper-slide>
                    <swiper-slide class="swiper_slide_item">
                        Slide 2
                    </swiper-slide>
                    <swiper-slide class="swiper_slide_item">
                        Slide 3
                    </swiper-slide>

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
                        disableOnInteraction: false, // 使用者操作後，會不會停止自動撥放功能
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
    }
</script>

<style scoped>
    #portfolio {
        width: 100%;
        /* background-color: skyblue; */
        height: 600px;
        margin : 33px auto;
    }

    .title h2{
        font-size: 1.8em;
        margin-bottom: 36px;
        color:rgb(95, 72, 33);
        font-weight: 700;
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
        height: 450px;
        background-color: aquamarine;
        border-radius: 35px;
    }

    .swiper-slide.swiper_slide_item{
        height: 450px;
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
    }

</style>