<template>
  <header>
    <div class="brief-intro">
      <div class="intro-card">
        <div class="img">
          <div class="selfie">
            <img src="../../assets/selfie.jpg" alt="selfie" />
          </div>
          <ul class="link-icon">
            <li>
              <a href="#">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/ruanpin?tab=repositories">
                <i class="fa-brands fa-github"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa-brands fa-twitter"></i>
              </a>
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
      <div class="btn">
        <a href="javascript:;" id="header-btn" class="header-items" target="_self">
          Download
          <br />Resume
        </a>
      </div>
    </div>

    <div class="complete-intro">
      <div class="title">
        <h3>About me</h3>
      </div>
      <div class="text">
        <p>
          Madison Blackstone is a director of brand marketing, with experience
          managing global teams and multi-million-dollar campaigns.
        </p>
      </div>
      <div class="info">
        <div class="list">
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div class="list">
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
    export default {

    };
</script>

<style scoped>
    header {
    display:flex;
    justify-content: space-around;
    align-items: center;
    margin:33px 0px;
    padding:0px 12px;
    width: 100%;
    flex-wrap: wrap;
    background-color: rgb(138, 171, 184);
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
    background:#ADAAA5;
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
    background:#ADAAA5;
    text-align: center;
    border-radius: 50%;
    line-height: 44px;
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
    background-color: #ADAAA5;
    text-align: center;
    width: 60%;
    height: 72px;
    line-height: 36px;
    border-radius: 20px;
    margin-top:35px;
    overflow: hidden;
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
}

header .brief-intro .btn:hover {
    transform: scale(1.1);
    transition: 0.5s;
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
    justify-content: space-around;
}

header .complete-intro .title h3{
    color:#ADAAA5;
    font-size: 30px;
    font-weight: 900;
}

header .complete-intro .text p {
    font-size: 24px;
}

</style>