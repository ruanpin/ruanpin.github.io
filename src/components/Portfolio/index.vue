<template>
  <div id="portfolio">
      <transition name="showup"><div v-show="isshow">portfolio</div> </transition>
              <button @click="isshow=!isshow">changeISSHOW</button>
  </div>
</template>

<script>
    export default {
        name:'Portfolio',
        data(){
            return {
                isshow:true
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