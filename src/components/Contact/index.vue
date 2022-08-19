<template>
  <div id="contact">
    <div class="title">
        <h2>Contact</h2>
    </div>
    <transition name="showup">
        <div v-show="isshow">
            <form method="POST" action="" @submit="handleSubmit">
                <label>姓名<br><input type="text" placeholder="請輸入姓名" name="username" :value="userContent"></label><br>
                <label>信箱<br><input type="email" placeholder="請輸入信箱" name="useremail" :value="emailContent"></label><br>
                <input type="submit" value="送出">
            </form>
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
                userContent:'',
                emailContent:''
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
                e.preventDefault();
                this.FormMsg = 'Thank you for contacting, I will reply to you as soon as possible !'
                this.userContent = ''
                this.emailContent = ''
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
</style>