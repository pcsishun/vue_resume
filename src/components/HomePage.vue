<template>
<div class="home-container">
    <div class="content-container">
        <div class="home">
            <div class="on-set-img">
                <img src=".././assets/logo.png"/> 
            </div>
            <div class="on-set-menu">
                <div class="content-type-text">
                    <div class="key-address">
                        <p><b>Name : </b></p>
                    </div>
                    <div class="content-text">
                        <p>Sorrakrit Chaiyaworrakamol (Earth)</p>
                    </div>
                </div>
                <div class="content-type-text">
                    <div class="key-address">
                        <p><b>Address : </b></p>
                    </div>
                    <div class="content-text">
                        <p>799/126  Pa Daet sub district, Mueang Chiang Mai district, Chiang Mai 50100</p>
                    </div>
                </div>
                <div class="content-type-text">
                    <div class="key-address">
                        <p><b>Tel : </b></p>
                    </div>
                    <div class="content-text">
                        <p>092-558-3854, 081-960-6594</p>
                    </div>
                </div>
                <div class="content-type-text">
                    <div class="key-address">
                        <p><b>Email : </b></p>
                    </div>
                    <div class="content-text">
                        <p>pcsishun@gmail.com</p>
                    </div>
                </div>
                <div class="content-type-text">
                    <div class="key-address">
                        <p><b>Git : </b></p>
                    </div>
                    <div class="content-text">
                        <p>https://github.com/pcsishun</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="my-bio-content-container">
        <div class="my-bio-content">
            <div class="my-bio">
                <p>It not complete now, about my biograhy you can contact me for more infomation :)</p>
            </div>
        </div>  
    </div>

    <div class="download-container">

        <div class="download-profile">
            <span>resume in pdf. here: &nbsp; </span> 
            <a class="btn btn-secondary"  href='https://drive.google.com/u/0/uc?id=0B2Dm5qz0yyhtSm5fdVRlenRJM2lwVnhla0ZtZjhxS0hMSzJB&export=download'>Download</a>
        </div>
    </div>

 
</div>

</template>

<script>
// https://drive.google.com/u/0/uc?id=0B2Dm5qz0yyhtSm5fdVRlenRJM2lwVnhla0ZtZjhxS0hMSzJB&export=download // 
export default {
    data(){
        return{

        }
    },
    methods:{

        }
}

</script>

<style scoped>
@media screen and (min-width: 1180px){

    .home{
        display: grid;
        grid-template-columns: 1fr 3fr;
        grid-column-gap: 5px;
       
    }
    .on-set-img{
        text-align: center;
    }

    .on-set-menu{
        text-align: center;
        border: 1px solid white;
        border-radius: 30px;
        margin-right: 1rem
    }
    .content-container{
        margin-top: 2rem;
    }
    .content-type-text{
        display: grid;
        grid-template-columns: 1fr 5fr;
        margin-top: 20px;
    }
    .my-bio-content-container{
        text-align: center;
        margin-top: 2rem;
            
    }
    .my-bio-content{
        border: 1px solid white;
        border-radius: 30px;
        margin: auto;
        width:98%;
    }
    .my-bio{
        margin-top: 10px;
 
    }
    .download-container{
        margin-top: 1rem;
        text-align: center;
    }
 
}
@media screen and (max-width: 1180px){
    .home-container{
        height:1130px;
    }
    .home{
        text-align: center;
    }
    .on-set-img{
        text-align: center;
    }

    .on-set-menu{
        text-align: center;
    }
    .content-container{
        margin-top: 2rem;
    }
    .content-type-text{
        display: grid;
        grid-template-columns: 1fr 5fr;
        margin-top: 20px;
    }
    .my-bio-content-container{
        text-align: center;
        margin-top: 2rem;
        border: 1px solid white;
    }
    .my-bio{
        margin:auto;
        width:90%;
    }
    .download-container{
        margin-top: 2rem;
        text-align: center;
    }
}
</style>