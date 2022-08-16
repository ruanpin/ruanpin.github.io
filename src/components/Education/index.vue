<template>
  <div id="education">
      <transition name="showup"><div v-show="isshow">education</div> </transition>
              <button @click="isshow=!isshow">changeISSHOW</button>
  </div>
</template>

<script>
    export default {
        name:'Education',
        data(){
            return {
                isshow:true
            }
        }
    }
</script>

<style scoped>
    #education {
        width: 100%;
        background-color: rgb(99, 183, 216);
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