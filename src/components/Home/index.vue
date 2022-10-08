<template>
  <header>
    <div class="brief-intro">
      <div class="intro-card">
        <div class="img">
          <div class="selfie">
            <img src="../../assets/photoofme.png" alt="selfie" />
          </div>
          <ul class="link-icon">
            <li>
              <a href="javascript:;" @click="showwarn('f')">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
              <div ref="socialf" class="deactivated">已停用</div>
            </li>
            <li>
              <a href="https://github.com/ruanpin?tab=repositories">
                <i class="fa-brands fa-github"></i>
              </a>
            </li>
            <li>
              <a href="javascript:;" @click="showwarn('i')">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <div ref="sociali" class="deactivated">已停用</div>
            </li>
            <li>
              <a href="javascript:;" @click="showwarn('l')">
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
              <div ref="sociall" class="deactivated">已停用</div>
            </li>
            <li>
              <a href="javascript:;" @click="showwarn('t')">
                <i class="fa-brands fa-twitter"></i>
              </a>
              <div ref="socialt" class="deactivated">已停用</div>
            </li>
          </ul>
        </div>
        <div class="info-box">
          <div class="info">
            <p></p>
            <h2>Vincent Ruan</h2>
          </div>
        </div>
      </div>
        <div class="btn" @click="stopGo">
          <a href="javascript:;" id="header-btn" class="header-items" target="_self">
            Download
            <br />Resume
          </a>
        </div>
        <div ref="download" class="download-deactivated">已停用</div>
      
    </div>

    <div class="complete-intro">

      <div class="intro-container">
        <div class="title">
          <h3>About me</h3>
        </div>
      </div>
      
      <div class="text-container">
        <div class="fixed-text">自學程式，</div>
        <div class="dynamic-text-container">
          <div class="dynamic-div-container">
            <div class="dynamic-text">擁有搜尋及自學能力</div>
            <div class="dynamic-text">樂於接觸新技術！</div>
            <!-- <div class="dynamic-text">it's me 3</div> -->
          </div>
          
        </div>
      </div>

      <div class="info">
        <div class="list"> 
          <ul>
            <li><span>名字:</span>{{info.name}}</li>
            <li><span>年齡:</span>{{info.age}}</li>
            <li><span>生日:</span>{{info.birthday}}</li>
          </ul>
        </div>
      </div>

    </div>

  </header>
</template>

<script>
    export default {
      name:'Home',
      data(){
        return {
          info:{
            name:'阮品毓',
            age:26,
            birthday:'1996/02',
          },
        }
      },
      methods:{
        stopGo(){
          this.$refs.download.classList.toggle('showtips')
          
        },
        showwarn(item){
          if(item == 'f'){
            this.$refs.socialf.classList.toggle('deactivatedShow')
          } else if(item == 'i') {
            this.$refs.sociali.classList.toggle('deactivatedShow')
          } else if(item == 'l') {
            this.$refs.sociall.classList.toggle('deactivatedShow')
          } else if(item == 't') {
            this.$refs.socialt.classList.toggle('deactivatedShow')
          } 
          
          
          
          
        }
      }
    };
</script>

<style scoped>
  /* 1森林綠色碼rgb(94,102,79)------灰藍色色碼rgb(101,122,141)---1大地棕色碼rgb(177,153,115)--- */
  /* 2大地棕色碼rgb(95,72,33)----2森林色碼rgb(77, 95, 44)----- */
    header {
    display:flex;
    justify-content: space-around;
    align-items: center;
    margin:33px 0px;
    padding:0px 12px;
    width: 100%;
    flex-wrap: wrap;
    /* background-color: rgb(138, 171, 184); */
}

.deactivated {
  opacity: 0;
  position: absolute;
  white-space:nowrap;
  z-index: 20;
  background-color: #fff;
  transform: translate(-25%,-200%);
  border-radius: 15px;
  padding:0.1rem 0.5rem;
  font-weight: 700;
  font-size:1.2rem;
}

/* .link-icon li:hover .deactivated{
  opacity: 0.95;
} */
.deactivatedShow {
  opacity: 0.95;
  transition:0.6s;
}

/* brief-intro Part----------------------------------------------- */
.brief-intro {
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 550px;
}

header .brief-intro .intro-card {
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
}

header .brief-intro .intro-card .img {
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;
}
header .brief-intro .intro-card .img .selfie {
    width: 300px;
    height: 300px;
}

header .brief-intro .intro-card .img .selfie img {
    width: 100%;
    height: 100%;
    padding:6px;
    background:rgb(177,153,115);
    object-fit: cover;
    border-radius: 50%;
}

header .brief-intro .intro-card .img .link-icon {
    display:flex;
    justify-content: space-around;
    align-items: center;
    width: 240px;
}

header .brief-intro .intro-card .img .link-icon li {
    width: 37px;
    height: 37px;
    background:rgb(101,122,141);
    text-align: center;
    border-radius: 50%;
    line-height: 44px;
    position:relative;
}

header .brief-intro .intro-card .img .link-icon li:hover {
    background: #000;
    transform: scale(1.1);
    transition: 0.4s;
}

header .brief-intro .intro-card .img .link-icon li a {
    display:block;
    /* width: 100%;
    height: 100%; */
}

header .brief-intro .intro-card .img .link-icon li:nth-child(1),
header .brief-intro .intro-card .img .link-icon li:nth-child(5) {
    position: relative;
    top:-55px;
}

header .brief-intro .intro-card .img .link-icon li:nth-child(even) {
    position: relative;
    top:-25px;
}

header .brief-intro .intro-card .img .link-icon li:nth-child(3) {
    position: relative;
    top:-15px;
}

header .brief-intro .intro-card .img .link-icon li i {
    font-size: 24px;
    color:#fff;
    
}

header .brief-intro .intro-card .info-box {
    display: flex;
    flex-direction: column;
    align-items: center;
}

header .brief-intro .intro-card .info-box .info {
    text-align: center;
}

header .brief-intro .intro-card .info-box .info h2 {
    margin-top:6px;
    font-size:30px;
}

header .brief-intro .btn {
    background-color: rgb(101,122,141);
    text-align: center;
    width: 60%;
    height: 72px;
    line-height: 36px;
    border-radius: 20px;
    margin-top: 30px;
    overflow: hidden;
    position:relative;
}

.download-deactivated {
    opacity: 0;
    padding:0.2rem;
    transform: translateY(-315%);
    font-weight: 700;
    font-size: 1.2rem;
    background-color: rgb(233, 233, 233);
    padding:0.5rem 0.5rem;
    border-radius: 15px;
  
}
/* header .brief-intro .btn a:hover .download-deactivated{
    opacity: 0.95;
    transform: scale(1.1);  
} */

.showtips {
    opacity: 0.95;
    transform: scale(1.1);  
    transition: 0.7s;
    transform: translateY(-315%);

}

header .brief-intro .btn a{
    display:block;
    color:#fff;
    font-size: 22px;
    font-weight: 500;
}

header .brief-intro .btn a:hover {
    background:#000;
    transition: 0.5s;
    border-radius: 20px;

}

header .brief-intro .btn:hover {
    transform: scale(1.1);
    transition: 0.5s;
    border-radius: 20px;
}
/* RWD----------------------------------------- */
@media screen and (max-width:800px) {

    header {
        padding-top:40px;  
    }
    
    .brief-intro {
        height:350px;
    }
    
    header .brief-intro .intro-card {
        flex-direction: row;
        width:100%;
    }

    header .brief-intro .intro-card .img {
        width:60%;
        margin:0px 6px;
    }

    header .brief-intro .intro-card .img .selfie {
        width: 170px;
        height: 170px;
    }

    header .brief-intro .intro-card .img .link-icon {
        width: 180px;
    }

    header .brief-intro .intro-card .img .link-icon li {
        width: 33px;
        height: 33px;
        line-height: 38px;
    }

    header .brief-intro .intro-card .img .link-icon li:nth-child(1),
    header .brief-intro .intro-card .img .link-icon li:nth-child(5) {
        position: relative;
        top:-50px;
    }

    header .brief-intro .intro-card .img .link-icon li:nth-child(even) {
        position: relative;
        top:-27px;
    }

    header .brief-intro .intro-card .img .link-icon li:nth-child(3) {
        position: relative;
        top:-15px;
    }   

    header .brief-intro .intro-card .img .link-icon li i {
        font-size: 22px;
    }

    header .brief-intro .intro-card .info-box .info {
        margin-right:8px;
    }

    header .brief-intro .btn {
        margin-top:50px;
    }
}

/* Complete-intro Part------------------------------------ */

header .complete-intro {
    width: 400px;
    height: 550px;
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    
}

.complete-intro .intro-container {
  margin-top:50px;
  /* height: 200px; */
}

header .complete-intro .title h3{
    color:rgb(95, 72, 33);
    font-size: 30px;
    font-weight: 900;
}

/* --------------------------------------------------------------------- */

.fixed-text{
  height: 30px;
  position: relative;
  /* margin-bottom:0.5em; */
}

.text-container {
  margin:3em auto;
  /* padding: 30px; */
  font-size: 30px;
  display: flex;
  flex-direction: column;
  width: 100%;
  /* height:30px; */
  /* overflow: hidden; */
  position: relative;
}



.dynamic-text-container {
  position: relative;
  top:0;
  height:30px;
  overflow: hidden;
  /* margin-left: 0.7em; */
}

.dynamic-text-container::after {
  content:'';
  width:100%;
  height:100%;
  background-color: #fff;
  position:absolute;
  left:0;
  top:0;
  border-left:black 2px solid;
  animation: typingEffect 3s steps(20) infinite;
  /* cursorBlinks 1s steps(20) infinite; */
}

.dynamic-text {
  color:rgb(95, 72, 33);
  font-weight: 700;
}

.dynamic-div-container {
  animation: moveText 6s steps(2) infinite;
}

@keyframes typingEffect {
  40%, 60% {
    transform: translateX(100%)
  }
  100% {
    transform: translateX(0)
  }
}

@-webkit-keyframes typingEffect {
  40%, 60% {
    transform: translateX(100%)
  }
  100% {
    transform: translateX(0)
  }
}

/* @keyframes cursorBlinks {
  0% {
    border-left: 4px solid rgb(95, 72, 33);
  }
  100% {
    border-left: 4px solid transparent;
  }
}

@-webkit-keyframes cursorBlinks {
  0% {
    border-left: 4px solid rgb(95, 72, 33);
  }
  100% {
    border-left: 4px solid transparent;
  }
} */

@keyframes moveText {
  0% {
    transform: translateY(0)
  }
  100% {
    transform: translateY(-100%)
  }
}

@-webkit-keyframes moveText {
  0% {
    transform: translateY(0)
  }
  100% {
    transform: translateY(-100%)
    
  }
}

/* ------------------------------------------------------------------------ */
.info .list {
  font-size: 1.2em;
  color:rgb(68, 68, 68);
  padding-top:5em;
}

.info .list li {
  padding-bottom:0.7em;
}

.info .list li span{
  font-weight: 600;
  color:black;
  padding-right:1em;
}

@media screen and (max-width:800px) {
  .complete-intro .intro-container {
    margin-top:80px;
  }

  .brief-intro {
    height: 400px;
  }

  /* .dynamic-text-container {
    margin-left:0;
  }

  .text-container {
    flex-direction: column;
    padding:0;
  } */

  /* .header .complete-intro {
    width: 100%;
  } */
  /* header .complete-intro .text .lineOne {
    width: 11.5em;

  }

  header .complete-intro .text .lineTwo {
    width: 8.5em;
  } */
}

</style>