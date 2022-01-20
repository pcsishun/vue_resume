<template>
    <div class="navbar-container">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark"> 
        <a class="navbar-brand" href="/">Welcome to my resume</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                    <li class="nav-item">
                      <b @click="onHaddleTitle('My Biography')"><router-link class="nav-link" to="/">My Biography</router-link></b>
                    </li>
                    <li class="nav-item">
                        <b @click="onHaddleTitle('My Education')"><router-link class="nav-link" to="/education" >My Education</router-link></b>
                    </li>
                    <li class="nav-item">
                       <b @click="onHaddleTitle('My Skill')"><router-link class="nav-link" to="/skill" >My Skill</router-link></b>
                    </li>
                    <li class="nav-item">
                       <b @click="onHaddleTitle('My Experience')"><router-link class="nav-link" to="/experience" >My Experience</router-link></b>
                    </li>
                    <li class="nav-item">
                        <b @click="onHaddleTitle('My Project')"><router-link class="nav-link" to="/project" >My Project</router-link></b>
                    </li>
                    <li class="nav-item">
                      <b @click="onHaddleTitle('My Hobby')"><router-link class="nav-link"  to="/hobby" >My Hobby</router-link></b>
                    </li>
            </ul>
        </div>
        </nav>
        <div class="title-container">
            <h3>{{$root.state.setTitle}}</h3>
            <hr>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    methods:{
        onHaddleTitle(paramTitle){
            console.log(paramTitle)
            this.$root.state.setTitle = paramTitle
        }
    }
}
</script>

<style scoped>
@media screen and (min-width: 501px){
    .navbar-container{
        width: 100;
    }
 
    .navbar-nav{
        width: 100%;
    }

    .nav-item{
        margin-left: 10rem;
    }
    hr {
        border: 0 !important;
        height: 3px !important;
        background-image: linear-gradient(to right, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75)) !important;
    }
    .title-container{
        margin-top: 2rem;
        margin-bottom: 5rem;
        text-align: center;
    }
}

@media screen and (max-width: 501px){
    .nav-item{
        margin-left: 2rem;
    }
    hr {
        border: 0 !important;
        height: 3px !important;
        background-image: linear-gradient(to right, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75)) !important;
    }
    .title-container{
        margin-top: 2rem;
        margin-bottom: 3rem;
        text-align: center;
    }
}
 
</style>