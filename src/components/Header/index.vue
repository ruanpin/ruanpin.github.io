<template>
  <nav class="nav">
    <div class="title">
      <p>Profile</p>
    </div>
    <ul class="list">
      <li>
        <a href="javascript:;" class="nav-text">Home</a>
      </li>
      <li>
        <a href="javascript:;" class="nav-text">Portfolio</a>
      </li>
      <li>
        <a href="javascript:;" class="nav-text">Education</a>
      </li>
      <li>
        <a href="javascript:;" class="nav-text">Experience</a>
        <!-- <a href="https://www.ruanpin23.com/Portfolio/website1/page/1/" class="nav-text">Portfolio</a> -->
      </li>
      <li>
        <a href="javascript:;" class="nav-text">Contact</a>
      </li>
    </ul>
    <div id="nav-btn"></div>
  </nav>
</template>

<script>
  export default {
    data(){
      return {

      }
    },
    methods:{
      letCurrentItemShowup(){
        // 滑到指定位置時指定items出現
        let navBarItem = document.getElementsByClassName("nav-text")
        let componentsTags = document.getElementsByClassName("components")
        let lastKnownScrollPosition = 0
        let that = this
        let Timer;

        function calWhereAmI (){
          if(lastKnownScrollPosition>=0&&(lastKnownScrollPosition+103)<componentsTags[1].offsetTop){
            return 0
          }else if((lastKnownScrollPosition+103)>=componentsTags[1].offsetTop&&(lastKnownScrollPosition+103)<componentsTags[2].offsetTop){
            return 1
          }else if((lastKnownScrollPosition+103)>=componentsTags[2].offsetTop&&(lastKnownScrollPosition+103)<componentsTags[3].offsetTop){
            return 2
          }else if((lastKnownScrollPosition+103)>=componentsTags[3].offsetTop&&(lastKnownScrollPosition+103)<componentsTags[4].offsetTop){
            return 3
          }else if((lastKnownScrollPosition+103)>=componentsTags[4].offsetTop&&lastKnownScrollPosition<document.documentElement.scrollHeight){
            return 4
          }
        }

        function sendDataToStore(){
          setTimeout(()=>{
            lastKnownScrollPosition = window.pageYOffset
            console.log('scroll event 持續')
            that.$store.commit('CHANGEITEMNUMBER',calWhereAmI())
            // 當滑到最下方時關閉此事件監聽，以優化效能
            if (calWhereAmI()===4){
              window.removeEventListener('scroll',sendDataToStore)
            }
          },100)

        }

        window.addEventListener('scroll',sendDataToStore)
        
      }
    },
    mounted(){
      this.letCurrentItemShowup();

      (function navbarSwitch (){
        // 點擊漢堡圖和navBar內選項會關閉已展開的導覽列
        let btn = document.querySelector("#nav-btn")
        let navbar = document.querySelector(".nav")
        let navBarItem = document.getElementsByClassName("nav-text")

        function navbarShow (){
          navbar.classList.toggle("active")
        }

        function clickNavItemsRemoveActive (){
          navbar.classList.remove("active")
        }

        btn.addEventListener("click", navbarShow)
        for (let i = 0;i<navBarItem.length;i++) {
          navBarItem[i].addEventListener('click', clickNavItemsRemoveActive)
        }
      })();


      // 點擊Nav內選項跳轉至該項
      (function moveToItems(){
        let navBarItem = document.getElementsByClassName("nav-text")
        let componentsTags = document.getElementsByClassName("components")

        function movePosition(whichTags){
          window.scrollTo({
            top:(componentsTags[whichTags].offsetTop-100),
            behavior: 'smooth'
          })
        }

        for (let i = 0;i<navBarItem.length;i++) {
          navBarItem[i].addEventListener('click', ()=>{
            movePosition(i)
          })
        }
      })();

      (function navbarSyncBrightenAndLetItemShowup(){
        let navBarItem = document.getElementsByClassName("nav-text")
        let componentsTags = document.getElementsByClassName("components")
        let lastKnownScrollPosition = 0
        let Timer;   //實現防抖效果

        // let POS = window.pageYOffset

        // 以下為讓NAVBAR亮----------------------------------------------------
        function letCurrentPosBarBright(){
          clearTimeout(Timer)
          Timer = setTimeout(()=>{
            lastKnownScrollPosition = window.pageYOffset
            // console.log('windowpageY:',lastKnownScrollPosition,'TAGs[0]:',componentsTags[0].offsetTop)
            // console.log('I am in:',calWhereAmI());
            addClassToSpeNav(calWhereAmI());
          },200)
        }

        function calWhereAmI (){
          if(lastKnownScrollPosition>=0&&(lastKnownScrollPosition+103)<componentsTags[1].offsetTop){
            return 0
          }else if((lastKnownScrollPosition+103)>=componentsTags[1].offsetTop&&(lastKnownScrollPosition+103)<componentsTags[2].offsetTop){
            return 1
          }else if((lastKnownScrollPosition+103)>=componentsTags[2].offsetTop&&(lastKnownScrollPosition+103)<componentsTags[3].offsetTop){
            return 2
          }else if((lastKnownScrollPosition+103)>=componentsTags[3].offsetTop&&(lastKnownScrollPosition+103)<componentsTags[4].offsetTop){
            return 3
          }else if((lastKnownScrollPosition+103)>=componentsTags[4].offsetTop&&lastKnownScrollPosition<document.documentElement.scrollHeight){
            return 4
          }
        }

        function addClassToSpeNav (whichNavItem){
          for (let i = 0; i<navBarItem.length; i++) {
            navBarItem[i].classList.remove("active-li")
          }
          navBarItem[whichNavItem].classList.add("active-li")
        }

        // 0:50,1:1023,2:1656,3:2289,4:2922
        window.addEventListener('scroll',letCurrentPosBarBright)

        // 以下為讓ITEM 出現---------------------------------------------------------
        // function letCurrentItemShowup (){
        //   if (calWhereAmI()===1) {
        //     console.log('NOW IS IN 1', that)
        //     // this.$store.commit('ABC', calWhereAmI())
        //   }
        // }

        // window.addEventListener('scroll',()=>{
        //   letCurrentItemShowup()
        // })
      })()
    }
  };
</script>

<style scoped>
.nav {
    position: fixed;
    display:flex;
    padding:0px 12px;
    top:0;
    left:0;
    width: 100%;
    height: 50px;
    justify-content: space-between;
    align-items: center;
    border-top:1px solid rgba(0, 0, 0, 0.8);
    border-bottom:1px solid rgba(0, 0, 0, 0.8);
    z-index: 10;
    background:#fff;
}



.nav .title {
    position: relative;
    display:flex;
    align-items: center;
    font-weight: 700;
    font-size: 32px
}

.nav .list {
    display:flex;
    align-items:center; 
    justify-content: space-around;
    min-width: 500px;
    line-height: 100%;
    margin-right:3%;
}

.nav a{
    color:#000;
    display: block;
    line-height: 50px;
    padding:0px 15px;
    transition: 0.5s;
}



.active-li, .nav a:hover {
    color:#fff;
    background:#ADAAA5;
}



.nav #nav-btn {
    position: absolute;
    right:7%;
}



/* ----nav______RWD---------------------------------------------- */
@media screen and (max-width:800px) {

    .nav .list {
        display:none;
    }

    .nav.active .list {
        position: absolute;
        top:49px;
        left:0px;
        background-color:#fff;
        display:flex;
        width:100%;
        flex-direction: column;
        min-width: 200px;
        transition: 0.5s;
        z-index:10;
    }

    .nav.active .list li {
        width: 100%;
        border-bottom: 1px solid #000;
    }

    .nav.active .list a {
        padding: 3px 0px;
        text-align: center;
    }

    .nav #nav-btn::after {
        font-family: "Font Awesome 5 Free"; 
        font-weight: 900; 
        content: "\f0c9";
        cursor: pointer;
        font-size:24px;
        
    }
    
    .nav.active #nav-btn::after {
        font-family: "Font Awesome 5 Free"; 
        font-weight: 900; 
        font-size:28px;
        content: "\f00d";
        cursor: pointer;
        
    }
}
</style>