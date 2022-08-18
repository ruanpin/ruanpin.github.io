<template>
    <div id="experience">
        <div class="title">
            <h2>Experience</h2>
        </div>
        <transition name="showup">
            <div class="exp-container" v-show="isshow">
                <div class="exp-boxes">
                    <div class="job-icon">
                        <div><i class="fa-solid fa-circle"></i></div>
                    </div>
                    <div class="job-brife">
                            <h4>助理工程師</h4>
                            <p class="companyInfo">國光生物科技|製造部</p>
                            <p>2020/2-2022/6</p>
                    </div>
                    <div class="job-intro">
                            <h4>國光生物科技股份有限公司</h4>
                            <p>
                                擔任製造部助理工程師一職，參與日常疫苗製程製造流程、撰寫及制定GMP相關文件，另有參與擴廠專案，協助建置新產線，
                                及對機台設備進行確效(validation)、驗證(IOPQ)等業務。
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

    .job-brife p {
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