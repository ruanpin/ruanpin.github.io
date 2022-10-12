<template>
  <div id="contact">
    <div class="title">
        <div class="title-decoration"></div>
        <h2>Contact</h2>
    </div>
    <transition name="showup">
        <div v-show="isshow" class="form-section">
            <div class="container">
                <form method="POST" action="http://127.0.0.1:5000/testPost" class="contact-form">
                    <p>{{ $t("contact-title")}}</p>
                    <label>{{ $t("name-titie")}}<br><input type="text" :placeholder="namePlacehoder" name="username" ref="nameInput" value="" @blur="checkValue"></label>
                    <span class="warning" v-show="isNameWarningShow">{{ $t("nameAndEmailTip")}}</span><br>

                    <label>{{ $t("email-title")}}<br><input type="email" :placeholder="emailPlacehoder" name="useremail" ref="emailInput" value="" @blur="checkValue"></label>
                    <span class="warning" v-show="isEmailWarningShow">{{ $t("nameAndEmailTip")}}</span><br>


                    <input type="submit" :value="submit" @click="handleSubmit">
                    <p class="warning sendingWarning" v-show="isSendingWarningShow">{{ $t("bigTips")}}</p><br>
                </form>
            </div>
            <transition name="formMsgShow"> 
                <div v-show="FormMsg" class="FormMsg">{{FormMsg}}</div> 
            </transition>
        </div>
    </transition>
  </div>
</template>

<script>
    export default {
        name:'Contact',
        data(){
            return {
                isshow:false,
                FormMsg:'',
                isNameWarningShow:false,
                isEmailWarningShow:false,
                isSendingWarningShow:false,
                namePlacehoder:'請輸入名字',
                emailPlacehoder:'請輸入信箱',
                submit:'留下聯絡方式',

            }
        },
        watch:{
            '$store.state.itemNumber'(newValue, oldValue){
                if (this.isshow) return
                this.isshow = this.$store.state.itemNumber>=4
            },
            '$i18n.locale' (newValue) {
                if (newValue == 'en') {
                    this.namePlacehoder = 'please enter name'
                    this.emailPlacehoder = 'please enter email'
                    this.submit = 'leave contact info'
                } else if (newValue == 'cn') {
                    this.namePlacehoder = '請輸入名字'
                    this.emailPlacehoder = '請輸入信箱'
                    this.submit = '留下聯絡方式'
                }
            }
        },
        methods:{
            handleSubmit(e){
                if (this.$refs.nameInput.value && this.$refs.emailInput.value) {
                    this.FormMsg = ''
                    e.preventDefault(); //未開Server時需要，否則會跳轉
                    this.FormMsg = 'Thank you for contacting, I will reply to you as soon as possible !'
                    setTimeout(() => {
                        this.$refs.nameInput.value = ""
                        this.$refs.emailInput.value = ""
                    }, 10);
                    this.isSendingWarningShow = false
                } else {
                    e.preventDefault();

                    if (!this.$refs.nameInput.value && !this.$refs.emailInput.value){
                        // 若Name 和 email input值皆為空，則Name input 獲取焦點
                        this.$refs.nameInput.focus();
                        this.isNameWarningShow = true
                        this.isEmailWarningShow = true
                    } else {
                        if (!this.$refs.nameInput.value) {
                            // 若有input值為空時，讓warning字樣出現
                            this.isNameWarningShow = true
                            this.$refs.nameInput.focus();
                        }
                        if (!this.$refs.emailInput.value) {
                            // 若有input值為空時，讓warning字樣出現
                            this.isEmailWarningShow = true
                            this.$refs.emailInput.focus(); 
                        }
                    }

                    this.isSendingWarningShow = true;
                    this.FormMsg = false;
                }
                
                    
            },
            checkValue(e){
                // 失去焦點時判斷input內是否有值-------------------

                // // 以下為name input框-------------------------------------------------------
                // 判斷此次失去焦點事件是哪個input
                if (e.target === this.$refs.nameInput) {
                    if (this.$refs.nameInput.value){ //該input有值時，讓warning字樣消失
                        this.isNameWarningShow = false
                    } else { //該input值為空時，讓warning字樣出現
                        this.isNameWarningShow = true
                    }
                }


                // 以下為email input框-------------------------------------------------------
                // 判斷此次失去焦點事件是哪個input
                if (e.target === this.$refs.emailInput) {
                    if (this.$refs.emailInput.value){ //該input有值時，讓warning字樣消失
                        this.isEmailWarningShow = false
                    } else { //該input值為空時，讓warning字樣出現
                        this.isEmailWarningShow = true
                    }
                }
            }
        }
    }
</script>

<style scoped>
    #contact {
        /* padding:0 12px; */
        width: 100%;
        /* background-color: rgb(83, 119, 99); */
        height: 600px;
        margin : 33px auto;
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

    .form-section {
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        width:100%;
    }

    form {
        padding:2em;
        background-color: rgb(192, 209, 160);
        border-radius: 2em;
        position : relative;
    }

    form p {
        text-align: center;
        font-size: 1.5em;
        padding:1em;
        color:rgb(95, 72, 33);
        font-weight: 700;
        letter-spacing: 0.2em;
        line-height: 1.5em;
    }

    label {
        display: block;
        padding-top: 0.8em;
        
    }

    input[type="text"], input[type="email"] {
        padding:0.8em;
        margin-top:0.5em;
        border-radius: 10px;
        border:0px none;
        background-color: rgb(245,235,216);
        width: 100%;
    }

    input[type="text"]:focus, input[type="email"]:focus {
        background-color: rgb(238, 212, 171);
    }

    input[type="submit"] {
        background-color: rgb(101,122,141);
        border:0px none;
        padding:0.5em;
        border-radius: 10px;  
        display:block;
        margin : 1em auto;
        cursor :pointer;
        font-weight: 700;
        width:100%;
        font-size: 1.2em;
        color:#fff;
    }

    .warning {
        color:rgb(220,53,69);
        line-height: 1.8em;
    }

    .sendingWarning {
        text-align: center;
        padding:0em;
        letter-spacing: 0;
        font-size: 1em;
        position : absolute;
        bottom:1.5em;
        left:50%;
        transform: translateX(-50%);
        white-space: nowrap;
    }
    
    @keyframes showUp {
        from {
            transform: translateY(5%); 
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


    @keyframes FormMsgShow {
        from {
            transform: translateY(5%);
            opacity: 0;
        }
        to {
            transform: translateY(0%);
            opacity: 1;
        }
    }

    .formMsgShow-enter-active {
        animation: FormMsgShow 1s;
    }

    .FormMsg {
        margin-top:2rem;
    }

    @media screen and (max-width:800px) {
        /* .form-section {
            justify-content: center;

        } */

        .container {
            width :80%;
        }

        input[type="text"], input[type="email"] {
            padding: 0.8em;
        }
 
    }
</style>