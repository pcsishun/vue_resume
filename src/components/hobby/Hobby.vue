<template>
    <div class="on-maintain-con">
        <div class="hobby-container">
            <div class="title-container">
                <h4>Anime</h4>
            </div>
            <div>
                <carousel-3d class="setting-car">
                    <slide class="slide-container" :index="0">
                        <img width="200px" height="210px" src="../../assets/sxf.png">
                        <p class="text-desc">Spy X Family</p>
                    </slide>
                    <slide class="slide-container" :index="1">
                        <img width="200px" height="210px" src="../../assets/sono.png">
                        <p class="text-desc">Sono bisque doll wa koi wo suru</p>
                    </slide>
                    <slide class="slide-container" :index="2">
                        <img width="200px" height="210px" src="../../assets/lwa.png">
                        <p class="text-desc">My little witch academia</p>
                    </slide>
                </carousel-3d>
            </div>
            
            <div class="title-container">
                <h4>Game</h4>
            </div>
            <div>
                <carousel-3d class="setting-car">
                    <slide class="slide-container" :index="0">
                        <img width="200px" height="210px" src="../../assets/war.png">
                        <p class="text-desc">War hammer 40k</p>
                    </slide>
                    <slide class="slide-container" :index="1">
                        <img width="200px" height="210px" src="../../assets/tit.png">
                        <p class="text-desc">TitanFall</p>
                    </slide>
                    <slide class="slide-container" :index="2">
                        <img width="200px" height="210px" src="../../assets/sun.png">
                        <p class="text-desc">Tiberian sun</p>
                    </slide>
                </carousel-3d>
            </div>
            <div class="title-container">
                <h4>Social</h4> 
            </div>
            <div>
                <carousel-3d class="setting-car">
                    <slide class="slide-container" :index="0">
                        <img width="200px" height="210px" src="../../assets/beer.png">
                        <p class="text-desc">Beer lover</p>
                    </slide>
                    <slide class="slide-container" :index="1">
                        <img width="200px" height="210px" src="../../assets/tea.png">
                        <p class="text-desc">Morning with tea</p>
                    </slide>
                    <slide class="slide-container" :index="2">
                        <img width="200px" height="210px" src="../../assets/sea.png">
                        <p class="text-desc">Sometime beach is ok</p>
                    </slide>
                </carousel-3d>
            </div>
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
        triggerTitle(){
            const setTitle = "My Hobby";
            this.$root.state.setTitle = setTitle
        }
    },
    mounted(){
        this.triggerTitle()
    }
}
</script>

<style  scoped >
@media screen and (min-width: 1180px){
    .text-desc{
        text-align: center;
        margin-top: 20px;
        color: rgb(38, 38, 38);
        font-weight: bold;
    }

    .hobby-container{
        width: 70%;
        margin: auto;
        text-align: center; 


        /* border-image: linear-gradient(45deg, red , yellow);
        border-image-slice: 1;
        -webkit-border-radius: 5px;
  */
    }
 
    .title-container{
        margin-top: 50px;
    }
    
  
}

@media screen and (max-width: 1179px){
    .hobby-container{
        width: 90%;
        margin: auto;
        text-align: center;
    }
     .text-desc{
        text-align: center;
        margin-top: 20px;
        color: rgb(38, 38, 38);
        font-weight: bold;
    }
}

</style>