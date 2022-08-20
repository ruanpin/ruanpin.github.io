<template>
  <div id="contact">
    <div class="title">
        <h2>Contact</h2>
    </div>
    <transition name="showup">
        <div v-show="isshow" class="form-section">
            <div class="container">
                <form method="POST" action="http://127.0.0.1:5000/testPost" class="contact-form">
                    <label>姓名<br><input type="text" placeholder="請輸入姓名" name="username" ref="nameInput" value=""></label><br>
                    <label>信箱<br><input type="email" placeholder="請輸入信箱" name="useremail" ref="emailInput" value=""></label><br>
                    <input type="submit" value="送出" @click="handleSubmit">
                </form>
            </div>
            <transition name="formMsgShow">
                <div v-show="FormMsg">{{FormMsg}}</div>
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
            }
        },
        watch:{
            '$store.state.itemNumber'(newValue, oldValue){
                if (this.isshow) return
                this.isshow = this.$store.state.itemNumber>=4
            }
        },
        methods:{
            handleSubmit(){
                this.FormMsg = ''
                // e.preventDefault(); 
                this.FormMsg = 'Thank you for contacting, I will reply to you as soon as possible !'
                setTimeout(() => {
                    this.$refs.nameInput.value = ""
                    this.$refs.emailInput.value = ""
                }, 10);
                    
            }
        }
    }
</script>

<style scoped>
    #contact {
        /* padding:0 12px; */
        width: 100%;
        background-color: rgb(83, 119, 99);
        height: 600px;
        margin : 33px auto;
    }

    .title h2{
        font-size: 1.8em;
        margin-bottom: 36px;
        color:rgb(95, 72, 33);
        font-weight: 700;
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
        /* max-width:100%; */
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

    @media screen and (max-width:800px) {
        /* .form-section {
            justify-content: center;

        } */

        .container {
            width :80%;
        }
    }
</style>