<template>
  <div id="portfolio">
    <div class="title">
        <h2>Portfolio</h2>
    </div>
    <transition name="showup">
        <div v-show="isshow">portfolio</div> 
    </transition>
  </div>
</template>

<script>
    export default {
        name:'Portfolio',
        data(){
            return {
                isshow:false
            }
        },
        watch:{
            '$store.state.itemNumber'(newValue, oldValue){
                if (this.isshow) return
                this.isshow = this.$store.state.itemNumber>=1
            }
        }
    }
</script>

<style scoped>
    #portfolio {
        /* padding:0 12px; */
        width: 100%;
        background-color: skyblue;
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
</style>