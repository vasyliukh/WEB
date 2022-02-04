<template>
  <div id="app">
    <Nav/>
    <router-view/>
  </div>
</template>

<script>
import Nav  from './components/Nav';

export default {
  name:'App',
  components:{
    Nav
  }
}
</script>

<style>
@import 'https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600,700,800';
*{
  box-sizing: border-box;
}
body{
  background: url("panorama.jpg") ;

}
#app {
  font-family: HeliosCondLight, sans-serif;
  letter-spacing: 4px;
  font-size: 25px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

}






</style>
