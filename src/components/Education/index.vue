<template>
  <div id="education">
    <div class="title">
        <h2>Education&amp;Skill</h2>
    </div>
    <transition name="showup">
        <div class="content" v-show="isshow">
            <div class="edu-brief edu-only">
                <div class="set-middle-container">
                    <div class="icon"><i class="fa-solid fa-graduation-cap"></i></div>
                    <div class="edu-content">
                        <h4><span class="iconBGC">2018</span></h4>
                        <h4><span class="spanStrong">理學學士學位</span> － 亞洲大學</h4>
                        <p id="edu-major">生物科技學系</p>
                    </div>
                </div>
            </div>

            <div class="edu-brief">
                <div class="set-middle-container">
                    <div class="icon"><i class="fa-solid fa-language"></i></div>
                    <div class="edu-content">
                        <h4><span class="iconBGC">英語能力證明</span></h4>
                        <h4><span class="spanStrong">TOEIC測驗</span> － 740</h4>
                    </div>
                </div>
            </div>

            <div class="edu-brief">
                <div class="set-middle-container">
                    <div class="icon"><i class="fa-solid fa-screwdriver-wrench"></i></div>
                    <div class="edu-content router-content">
                        <h4><span class="iconBGC">技能</span></h4>
                        <div class="routers">
                            <h4 @click="routerCounter++"><router-link class="iconBGC skillsBtn" active-class="" to="/js" >JS</router-link></h4>
                            <h4 @click="routerCounter++"><router-link class="iconBGC skillsBtn" active-class="" to="h5c3" >H5&amp;C3</router-link></h4>
                            <h4 @click="routerCounter++"><router-link class="iconBGC skillsBtn" active-class="" to="otherskill" >其他</router-link></h4>

                            <!-- <h4><a href="#"><span class="iconBGC skillsBtn">JS</span></a></h4>
                            <h4><span class="iconBGC skillsBtn">H5&amp;C3</span></h4>
                            <h4><span class="iconBGC skillsBtn">其他</span></h4> -->
                        </div>
                    </div>
                    <div class="router-display-area">
                        <p v-show="isRouterTipShow">點選藍色框展示</p>
                        <router-view v-show="!isRouterTipShow"></router-view>
                    </div>
                </div>
            </div>

            <!-- <div class="skill-brief">
                <div class="set-middle-container">
                    <div class="icon"><i class="fa-solid fa-screwdriver-wrench"></i></div>
                    <ul class="skills-content">
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                
            </div> -->
        </div> 
    </transition>

  </div>
</template>

<script>
    export default {
        name:'Education',
        data(){
            return {
                isshow:false,
                isRouterTipShow:true,
                routerCounter:0
            }
        },
        watch:{
            '$store.state.itemNumber'(newValue, oldValue){
                if (this.isshow) return
                this.isshow = this.$store.state.itemNumber>=2
            },
            routerCounter(){
                if(!this.isRouterTipShow) return
                this.isRouterTipShow = !this.isRouterTipShow
            }
        }
    }
</script>

<style scoped>
    #education {
        width: 100%;
        /* background-color: rgb(99, 183, 216); */
        height: 1300px;
        margin : 33px auto;
    }

    .title h2{
        font-size: 1.8em;
        margin-bottom: 36px;
        color:rgb(95, 72, 33);
        font-weight: 700;
    }

    .edu-brief {
        display: flex;
        justify-content: center;
        margin: 0 auto;
        max-width: 80%;
        background-color: rgb(245,235,216);
        margin-bottom:2em;
        border-radius: 2em;
        font-size: 1.2em;
    }

    .edu-brief .set-middle-container {
        display: flex;
        justify-content: start;
        align-items: center;
        min-width: 80%;
    }

    .icon {
        display:flex;
        justify-content: center;
        align-items: center;
        color:#fff;
        background-color: rgb(95,72,33);
        width:2em;
        height: 2em;
        border-radius: 50%;
        margin :1.4em 0;
        margin-right:1em;
        font-size: 1.5em;
    }

    .edu-content {
        padding-top:1.5em;  
        padding-bottom:1.5em;
    }

    .eud-only {
        padding-bottom:2em;
    }

    

    .edu-content h4 {
        margin: 1em auto;
    }

    .iconBGC {
        padding :0.2em 0.8em; 
        background-color: rgb(77, 95, 44);
        border-radius: 1em;
        font-weight: 700;
        color:#fff;
    }

    .skillsBtn {
        background-color: rgb(101,122,141);
        margin:1em;
        /* margin-bottom:1.5em; */
    }

    .spanStrong {
        font-weight: 700;
    }

    /* routers--------------------------------------------- */

    /* .routers{
        
    } */

    .router-content {
        display:flex;
        align-items: center;
    }



    @keyframes showUp {
        from {
            transform: translateY(7%);
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

    @media screen and (max-width:800px) {

        .edu-brief {
            max-width: 90%;
        }
        .set-middle-container {
            flex-direction: column;
        }

        .edu-content h4 {
            text-align: center;
            margin: 0 0 2em 0;
        }
        .icon {
            margin-right:0em;

        }
        .edu-content{
            padding-top:0; 
        }

        #edu-major {
            text-align: center;
            padding-bottom: 1em;
        }
    /* routers--------------------------------------------- */
        
        .routers {
            display:flex;
        }

        .router-content {
            flex-direction: column;
        }

        .skillsBtn {
            margin:0.2em;
        }
    }


</style>