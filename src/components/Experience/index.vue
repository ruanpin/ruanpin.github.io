<template>
    <div id="experience">
        <div class="title">
            <div class="title-decoration"></div>
            <h2>Experience</h2>
        </div>
        <transition name="showup">
            <div class="exp-container" v-show="isshow">
                <div class="exp-boxes">
                    <div class="job-icon">
                        <div><i class="fa-solid fa-circle"></i></div>
                    </div>
                    <div class="job-brife">
                            <h4>{{ $t("job-title") }}</h4>
                            <p class="companyInfo">{{ $t("company") }}</p>
                            <p class="companyInfo">{{ $t("department") }}</p>
                            <p>2020/2-2022/6</p>
                    </div>
                    <div class="job-intro">
                            <h4>{{ $t("full-company-name") }}</h4>
                            <p>
                                {{ $t("job-text") }}
                            </p>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name:'Experience',
        data(){
            return {
                isshow:false,
            }
        },
        watch:{
            '$store.state.itemNumber'(newValue, oldValue){
                if (this.isshow) return
                this.isshow = this.$store.state.itemNumber>=3
            }
        }
    }
</script>

<style scoped>
    #experience {
        width: 100%;
        margin : 33px auto;
        min-height: 294px;
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

    .exp-container {
        padding-bottom : 2em;
    }
    .exp-boxes .job-icon {
        display:flex;
        align-items: center;        
    }
    .job-icon i {
        color:white;
        font-size:1.3em;
    }

    .exp-boxes {
        display: flex;
        flex-wrap:wrap;
        width: 80%;
        justify-content: space-around;
        margin:0px auto;
        background-color: rgb(245, 235, 216);
        /* background-color: rgb(247,247,255); */
        padding: 1.5em;
        padding-bottom:2em;
        margin-bottom:1em;
        line-height: 1.5;
        border-radius: 20px;
    }

    .exp-boxes h4 {
        font-size: 1.3em;
        font-weight: 700;
        padding-bottom:1em;
    }

    .exp-boxes .job-brife{
        min-width: 25%;
        border-right: 1px solid gray;
    }

    .job-brife .companyInfo {
        font-style: italic;
    }

    .job-brife p, .job-intro p {
        color:rgb(51, 50, 50);
    }

    .exp-boxes .job-intro{
        width: 50%;
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

    /* RWD-------------------------------------------------- */

    @media screen and (max-width:800px) {
        
        #experience {
            min-height: 683px;
        }

        .exp-boxes {
            width: 90%;
            display:flex;
            flex-direction: column;
            align-items: center;
            min-height: 570px;

        }
        
        .exp-boxes .job-brife{
            width: 80%;
            padding-top:1em;
            border-right: 0px;
            padding-bottom:1.5em;
            border-bottom:1px solid gray;
        }

        .exp-boxes .job-intro{
            width: 80%;
            padding-top:2em;
        }
    }

</style>