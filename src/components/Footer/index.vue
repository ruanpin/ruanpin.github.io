<template>
  <div id="footer">
    <div>
        <p>
          Vincent Ruan © 2022
        </p>
        <p>
          All rights reserved.
        </p> 
        <p>
          Vue.js / VueRouter /VueX
        </p>      
    </div>
  </div>
</template>

<script>
    export default {
      name:'Footer'
    }
</script>

<style>
  #footer {
    background-color: #ADAAA5;
    height: 18vh;
    display :flex;
    align-items: center;
    justify-content: center;
  }

  #footer p {
     text-align :center;
     line-height: 2em;
  }

  #footer p:first-child, #footer p:nth-child(2)  {
    font-weight: 700;
  }
</style>