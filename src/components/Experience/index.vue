<template>
    <div id="experience">
        <div class="title">
            <h2>Experience</h2>
        </div>
        <transition name="showup" appear>
            <div class="exp-container" v-show="isshow">
                <div class="exp-boxes">
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
                
                <div class="exp-boxes">
                    <div class="job-brife">
                            <h4>助理工程師</h4>
                            <p class="companyInfo">國光生物科技|製造部</p>
                            <p>2020/2-2022/6</p>
                    </div>
                    <div class="job-intro">
                            <h4>國光生物科技股份有限公司</h4>
                            <p>
                                擔任製造部助理工程師一職，參與日常疫苗製程製造流程，另有參與擴廠專案，協助建置新產線。
                            </p>
                    </div>
                </div>

            </div>
        </transition>
        <button @click="isshow=!isshow">changeISSHOW</button>

    </div>
</template>

<script>
    export default {
        name:'Experience',
        data(){
            return {
                isshow:true
            }
        }
    }
</script>

<style scoped>
    #experience {
        width: 100%;
        background-color: rgb(68, 133, 158);
        /* height: 600px; */
        margin : 33px auto;
    }

    .title h2{
        font-size: 1.8em;
        margin-bottom: 36px;
    }

    .exp-container {
        padding-bottom : 2em;
    }

    .exp-boxes {
        display: flex;
        flex-wrap:wrap;
        width: 80%;
        justify-content: space-around;
        margin:0px auto;
        background-color: rgb(247,247,255);
        padding: 1.5em;
        margin-bottom:1em;
        line-height: 1.5;
        border-radius: 20px;
    }

    .exp-boxes h4 {
        font-size: 1.3em;
        font-weight: 700;
    }

    .exp-boxes .job-brife{
        min-width: 25%;
        border-right: 1px solid gray;
    }

    .job-brife .companyInfo {
        font-style: italic;
    }

    .exp-boxes .job-intro{
        width: 50%;
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
        animation: showUp 1.5s;
    }

    /* RWD-------------------------------------------------- */

    @media screen and (max-width:800px) {
        
        .exp-boxes {
            width: 90%;
        }
        
        .exp-boxes .job-brife{
            width: 80%;
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