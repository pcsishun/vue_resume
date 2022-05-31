<template>
    <div class="footer">
        <footer class="footer">
        <div class="info-container">
            <div class="framework-container">
                <p>This website create by using vue.js.</p>
                <div class="set-logo-container">
                    <img class="img-logo-container" height="50px" width="50px" src="../../assets/logo.png">
                </div>
            </div>
            <div class="contact-container">
                <p>This website create by sorrakrit chaiyaworrakamol.</p>
                <p>tel: 092-558-3854</p>
                <div class="contact-icon">
                   <a class="profile-link" href="https://github.com/pcsishun?tab=repositories"><img height="30px" width="30px"  src="../../assets/Cgithub.png" ></a> 
                   <a class="profile-link" href="https://www.linkedin.com/in/sorrakrit-chaiyaworrakamol-b2690b186/"><img height="30px" width="30px"  src="../../assets/Clinkedin.png"></a>
                </div>
            </div>
        </div>
        </footer>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

@media screen and (min-width: 1180px) {
     .info-container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-left: 5rem;
        margin-right: 5rem;
        height: 200px;
    }

    .framework-container{
        margin-top: 10%;
        font-size: 15px;
        text-align: left;
    }
    
    .contact-container{
        margin-top: 10%;
        font-size: 15px;
        text-align: right;
    }

    .profile-link{
        margin-left: 20px;
    }
 
}

@media screen and (max-width: 1179px){
    .info-container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 20px;
        margin-left: 15px;
        margin-right: 15px;
        height: 200px;
    }

    .framework-container{
        margin-top: 40%;
        font-size: 12px;
        text-align: left;
    }
    
    .contact-container{
        margin-top: 35%;
        font-size: 12px;
        text-align: left;
    }
    .profile-link{
        margin-left: 15px;
    }
}

</style>