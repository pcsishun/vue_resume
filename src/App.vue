<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/navbar/Navbar.vue'
 export default{
   name:'app',
   components:{
     Navbar
   }
   
 }

</script>

<style>
 body{
   margin: 0;
   padding:0;
   background-color: #343a40;
   color: #f8f9fa;
 }
</style>
