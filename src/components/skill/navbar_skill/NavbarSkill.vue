<template>
  <div class="navbar-skill-container">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark"> 
        <div class="set-toggle">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav-skill" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>
        <div class="collapse navbar-collapse" id="navbarNav-skill">
            <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#Coding"><b>Coding</b></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#Markup"><b>Markup</b></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#Database"><b>Database</b></a>
                    </li>
                    <li class="nav-item">
                       <a class="nav-link" href="#Cloud"><b>Cloud</b></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#Version"><b>Version control</b></a>
                    </li>                 
            </ul>
        </div>
        </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@media screen and (min-width: 1180px){
    .navbar{
        border-radius: 30px;
        background-color: rgb(181, 181, 181) !important;
        box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
    }
    .navbar-nav{
        width: 80%;
        margin: auto;
    }
    .nav-item{
        margin: auto;
       
    }
    .nav-link{
        color: black !important;
        font-style:  bold;
    }
    .nav-link:hover{
        background-color: rgb(121, 121, 121);
        border-radius: 30px;
    }
    
  
}

@media screen and (max-width: 1180px){
    .navbar{
        border-radius: 30px;
        background-color: rgb(181, 181, 181) !important;
        box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
    }
    .nav-link{
        color: black !important;
        font-style:  bold;
        text-align: center;

    }
    .set-toggle{
        background-color: rgb(97, 97, 97);
        border-radius:  10px;
        margin-left:  45%;
    }
}
</style>