<template>
  <div id="app">
    <div id="container" v-show="$route.path != '/portfolioShow'">
      <Header></Header>
      <Home class="components"></Home>
      <Portfolio class="components"></Portfolio>
      <Education class="components"></Education>
      <Experience class="components"></Experience>
      <Contact class="components"></Contact>
    </div>
    <div class="lang-option">
      <div class="en" @click="changeLanguage('en')">En</div>
      <div class="cn" @click="changeLanguage('zh')">中文</div>
    </div>
    <div class="portfolioShow" v-show="$route.path == '/portfolioShow'">
      <router-view></router-view>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import Education from './components/Education'
import Experience from './components/Experience'
import Contact from './components/Contact'


export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Home,
    Portfolio,
    Education,
    Experience,
    Contact,
  },
  methods:{
    changeLanguage(index){
      console.log(this.$i18n.locale)
      switch (index) {
        case "en":
          this.$i18n.locale = "en";
          break;
        case "zh":
          this.$i18n.locale = "cn";
          break;
      }
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}

body {
    position: relative;
    width: 100%;
    /* height: 2000px; */
    font-family: 'Poppins', sans-serif;
}

a {
    text-decoration: none;
}

#container, .portfolioShow {
  max-width: 1400px;
  width:85%;
  margin:0px auto;
}

#app {
  position:relative;
}

.lang-option {
  position:sticky;
  bottom:2rem;
  z-index: 15;
  margin-left:1rem;
  margin-bottom:1rem;
}

</style>
