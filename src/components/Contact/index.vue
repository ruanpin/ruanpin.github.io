<template>
  <div id="contact">
      <transition name="showup">
            <div v-show="isshow">education</div>
      </transition>
  </div>
</template>

<script>
    export default {
        name:'Contact',
        data(){
            return {
                isshow:false,
            }
        },
        watch:{
            '$store.state.itemNumber'(newValue, oldValue){
                if (this.isshow) return
                this.isshow = this.$store.state.itemNumber>=4
            }
        }
    }
</script>

<style scoped>
    #contact {
        /* padding:0 12px; */
        width: 100%;
        background-color: rgb(11, 146, 199);
        height: 600px;
        margin : 33px auto;
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
</style>