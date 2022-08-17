<template>
  <div id="portfolio">
    <div class="title">
        <h2>Portfolio</h2>
    </div>
    <transition name="showup">
        <div v-show="isshow">portfolio
            
            <div class="app-container">
                <!--主体为swiper标签-->
                <!--属性 :options 绑定的是data中设置的swiper配置项-->
                <!--属性 ref 用于获取该dom元素，在计算属性computed中将被调用-->
                <!--属性 id 为swiper最外层容器设置css样式-->
                <swiper :options="swiperOption" ref="mySwiper" id="mySwiper">
                        
                    <!--必须的组件-->
                    <!--每页幻灯片使用swiper-slide标签-->
                    <!--幻灯片组件生成的标签自带.swiper-slide的类名，但单类名选择器设置的部分css(如宽高)将被覆盖-->
                    <swiper-slide class="swiper_slide_item">I'm Slide 1</swiper-slide>
                    <swiper-slide class="swiper_slide_item">I'm Slide 2</swiper-slide>
                    <swiper-slide class="swiper_slide_item">I'm Slide 3</swiper-slide>
                    
                    <!-- 可选的控件 -->
                    <!--分页器-->
                    <div class="swiper-pagination" slot="pagination"></div>
                    <!--滚动条-->
                    <div class="swiper-scrollbar" slot="scrollbar"></div>
                    <!--前进后退按钮-->
                    <div class="swiper-button-prev" slot="button-prev"></div> 
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>

                <!--配置自定义的页面跳转按钮，to(page)为自定义方法，其内调用了swiper的内置方法-->
                <!-- <button @click="to(1)">点击跳转到Slide 1</button>
                <button @click="to(2)">点击跳转到Slide 2</button>
                <button @click="to(3)">点击跳转到Slide 3</button> -->

                </div>
        </div> 
    </transition>
  </div>
</template>

<script>
    // 引入SWIPER-----------------------


    export default {
        name:'Portfolio',
        data(){
            return {
                isshow:false,
                //swiperOption：swiper配置项信息，需要绑定在swiper标签的 :option 属性中
                swiperOption: {
                
                    //幻灯片放映方向
                    direction: 'vertical', //通常不与左右按钮一同使用
                    
                    //分页器配置项
                    pagination: {
                    el: ".swiper-pagination", //分页器的类名
                    clickable: true, // 点击分页器跳切换到相应的幻灯片
                    type: 'bullets' | 'progressbar' | 'fraction' , //小圆点|进度条|数字页码
                    dynamicBullets: true,  //动态小圆点(type:'bullets'时)
                    //自定义分页器，需设置样式
                    renderBullet(index, className) {
                        return `<span class="${className} swiper-pagination-bullet-custom">${index + 1}</span>`
                        },
                    },
                    
                    //前进后退按钮
                    navigation: { 
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev' 
                    },
                    
                    //滚动条
                    scrollbar: {
                        el: '.swiper-scrollbar',
                        hide: true
                    },
                    
                    //幻灯片播放配置项
                    loop: true, //是否循环播放
                    speed: 1000, // 发生页面切换动画时，动画的切换速度
                    autoplay: {
                    delay: 2000, // 幻灯片停留时间
                    disableOnInteraction: false, // 用户操作swiper之后，是否禁止autoplay
                    stopOnLastSlide: true, // 切换到最后一个slide时是否停止自动切换。（loop模式下无效）。
                    },
                    on: {
                    slideChangeTransitionEnd: function () {
                        console.log(this.activeIndex); //每次切换结束时，在控制台打印现在是第几个slide
                    },
                    },
                },
            }
        },
        watch:{
            '$store.state.itemNumber'(newValue, oldValue){
                if (this.isshow) return
                this.isshow = this.$store.state.itemNumber>=1
            }
        },
        computed:{
            // SWIPER-----------------
            swiper() {
                return this.$refs.mySwiper.$swiper;
            },
        },
        methosd:{
            // SWIPER---------------
            to(index) {
                this.swiper.slideTo(index)
                console.log(this.swiper);
            }
        }
    }
</script>

<style scoped>
    #portfolio {
        /* padding:0 12px; */
        width: 100%;
        background-color: skyblue;
        height: 600px;
        margin : 33px auto;
    }

    .title h2{
        font-size: 1.8em;
        margin-bottom: 36px;
        color:rgb(95, 72, 33);
        font-weight: 700;
    }

    @keyframes showUp {
        from {
            transform: translateX(-10%);
            opacity: 0;
        }
        to {
            transform: translateX(0%);
            opacity: 1;
        }
    }

    .showup-enter-active {
        animation: showUp 1s;
    }


  #mySwiper{
    width: 500px;
    height: 100px;
    background-color: aquamarine;
  }

 .swiper-slide.swiper_slide_item{
    height: 300px;
    background-color:aliceblue;
  }
</style>