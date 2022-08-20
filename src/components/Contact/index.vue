<template>
  <div id="contact">
    <div class="title">
        <h2>Contact</h2>
    </div>
    <transition name="showup">
        <div v-show="isshow" class="form-section">
            <div class="container">
                <form method="POST" action="http://127.0.0.1:5000/testPost" class="contact-form">
                    <p>Keep in touch</p>
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
            handleSubmit(e){
                this.FormMsg = ''
                e.preventDefault(); //未開Server時需要，否則會跳轉
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
        padding:0.8em;
        border-radius: 10px;  
        display:block;
        margin : 1em auto;
        cursor :pointer;
        font-weight: 700;
        width:100%
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

        input[type="text"], input[type="email"] {
            padding: 0.8em;
        }
    }
</style>