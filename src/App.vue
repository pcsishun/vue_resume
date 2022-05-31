<template>
  <div id="app">
    <Navbar/>
    <router-view/>
    <div class="footer-setting">
      <Footer/>
    </div>
    
  </div>
</template>

<script>
import Navbar from './components/navbar/Navbar.vue'
import Footer from './components/footer/Footer.vue'

 export default{
   name:'app',
   components:{
     Navbar,
     Footer
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

.footer-setting{
   margin-top: 50px;
   left: 0;
   bottom: 0;
   width: 100%;
   background-color:  #202327;
   color: white;
   text-align: center;
}
</style>
