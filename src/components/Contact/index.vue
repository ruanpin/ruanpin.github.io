<template>
  <div id="contact">
      <transition name="showup"><div v-show="isshow">education</div> </transition>
              <button @click="isshow=!isshow">changeISSHOW</button>
  </div>
</template>

<script>
    export default {
        name:'Contact',
        data(){
            return {
                isshow:true
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