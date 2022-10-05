<template>
  <div class="PortfolioShow-container">
    <div class="imgs">
      <div ref="imgRef" class="img-container" v-for="(imgsrc,index) in srcArr" :key="index" @click="zoomInImg(index)">
        <div class="closeBtn" @click="zoomOutImg(index,$event)" v-show="isCloseShow"><i class="fa-solid fa-xmark"></i></div>
        <img class="eachImg" :src="`/portfolioScreenShot/${imgsrc}`" alt="portfolioScreenShot">
        
      </div>
      
    </div>
    <div class="description">
      <h2><span>電子商務網站</span></h2>
      <p class="text"><span class="intro-title">技術簡介</span> 串接第三方API (Instagram)、前端頁面呈現 (Vue)、串接/撰寫後端伺服器API (Express)、資料庫增刪查改CRUD (註冊/登入系統、會員訂單查詢、購物車功能、下訂單功能)</p>
      <ul class="list">
          <li><span class="intro-title">前端</span> Vue.js + VueX + VueRouter + SCSS + Axios + Mock.js..等</li>
          <li><span class="intro-title">後端</span> Node.js + Express + Mongoose</li>
          <li><span class="intro-title">資料庫</span> MongoDB</li>
          <li><span class="intro-title">版本控制</span> Git + Github</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name:'PortfolioShow',
    data(){
      return {
        srcArr:['1Home.PNG','2Home2.PNG','3Home3.PNG','4Product.PNG','5Product2.PNG','6Product3.PNG','7ProductDetail.PNG','8ProductDetail2.PNG','9ProductDetail3.PNG','10Cart.PNG','11Cart2.PNG','12CheckOut.PNG','13SignUp.PNG','14Login.PNG','15MyOrders.PNG'],
        isCloseShow : false
      }
    },
    methods:{
      zoomInImg(index){
        this.$refs.imgRef[index].classList.add("zoomIn");

        if (this.$refs.imgRef[index].classList.contains("zoomIn")) {
          this.isCloseShow = true
        }
      },
      zoomOutImg(index,$event){ 
        this.$refs.imgRef[index].classList.remove("zoomIn");

        if (!this.$refs.imgRef[index].classList.contains("zoomIn")) {
          this.isCloseShow = false
        }
        $event.stopPropagation()
      }
    }
  }
</script>

<style scoped>
  .PortfolioShow-container {
    display:flex;
    width: 100%;
    margin:2rem 0;
  }
  .imgs {
    display:flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 50%;
  }
  .img-container {
    position:relative;
    width: 98%;
    margin:0.5rem;
    padding:0.8rem;
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.3));
    background-color: rgb(236, 236, 236);
    cursor:pointer;
  }


  .closeBtn {
    position:absolute;
    z-index: 20;
    right:0;
    transform: translateX(-100%);
    font-size:3rem;
    cursor:pointer;
  }
  .zoomIn {
    position: fixed;
    top:0;
    left:0;
    z-index: 10;
    width: 97vw;
    height: 98vh;
    overflow: auto;
    cursor:default;
  }

  .eachImg {
    width: 100%;
  }

  .description {
      font-size:1.3rem;
      line-height: 2.7rem;  
      margin-left :1.5rem;
      margin-top:1.5rem;  
      display:flex;
      flex-direction: column;
      max-width: 50%;
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

  

  @media screen and (max-width:800px) {
    .imgs {
      width: 100%;
    }

    .PortfolioShow-container {
      flex-direction:column-reverse;
    }

    .description {
      max-width: 100%;
      margin-bottom:1.5rem;
    }
    .zoomIn {
        position: relative;
        top:0;
        left:0;
        z-index: 0;
        width: 98%;
        height: 0%;
        overflow: auto;
        cursor:default;
    }
    .img-container{
      cursor:default;
    }
    .closeBtn {
      display:none;
    }
  }
</style>