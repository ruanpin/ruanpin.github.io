<template>
  <div id="education">
    <div class="title">
        <h2>Education&amp;Skill</h2>
    </div>
    <transition name="showup">
        <div class="content" v-show="isshow">
            <div class="edu-brief">
                <div class="set-middle-container">
                    <div class="icon"><i class="fa-solid fa-graduation-cap"></i></div>
                    <div class="edu-content">
                        <h4><span class="iconBGC">2018</span></h4>
                        <h4><span>理學學士學位</span> － 亞洲大學</h4>
                        <p>生物科技學系</p>
                    </div>
                </div>
            </div>

            <!-- <div class="language-brief">
                <div class="set-middle-container">
                    <div class="icon"><i class="fa-solid fa-language"></i></div>
                    <div class="lang-content">
                        <h4><span class="strong">英語能力證明</span></h4>
                        <h4><span>TOEIC測驗</span> 740</h4>
                    </div>
                </div>
                
            </div>

            <div class="skill-brief">
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
            }
        },
        watch:{
            '$store.state.itemNumber'(newValue, oldValue){
                if (this.isshow) return
                this.isshow = this.$store.state.itemNumber>=2
            }
        }
    }
</script>

<style scoped>
    #education {
        width: 100%;
        background-color: rgb(99, 183, 216);
        height: 1000px;
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
        background-color: rgb(164, 134, 167);

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
        background-color: black;
        width:2em;
        height: 2em;
        border-radius: 50%;
        margin :1.4em 0;
        margin-right:1em;
    }

    .edu-content {
        padding-top:1.5em;  
        padding-bottom:2em;
    }

    .edu-content h4 {
        margin: 1em auto;
    }

    .iconBGC {
        padding :0.2em 0.8em; 
        background-color: #fff;
        border-radius: 1em;
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

    @media screen and (max-width:800px) {
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
         

    }


</style>