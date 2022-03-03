<template>
    <div class="education-container">
        <div class="education">
            <div class="content">
                <div class="content-img">
                    <img class="set-img" src="../.././assets/artmath2.jpg"/>
                </div>
                <div class="content-text">
                    <div class="header-text">
                        <p>Satit Chiang Mai University School</p>
                    </div>
                    <div class="content-desc">
                        <p>senior high school arts maths program</p>
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="content-img">
                    <img class="set-img" src="../.././assets/marketing.jpg" />
                </div>
                <div class="content-text">
                    <div class="header-text">
                        <p>Chiang Mai University</p>
                    </div>
                    <div class="content-desc">
                        <p>Bachelor's degree in business administration major marketing</p>
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="content-img">
                    <img class="set-img" src="../.././assets/datasci.jpg" />
                </div>
                <div class="content-text">
                    <div class="header-text">
                        <p>Chiang Mai University</p>
                    </div>
                    <div class="content-desc">
                        <p>Master's degree in engineering marjor data-sci</p>
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="content-img">
                    <img class="set-img" src="../.././assets/other.png" />
                </div>
                <div class="content-text">
                    <div class="header-text">
                        <p>Other knowledge</p>
                    </div>
                    <div class="content-desc">
                        <p>Front-end dev</p>
                        <p>Training nodejs</p>
                        <p>Computer vision</p>
                    </div>
                </div>
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
            const setTitle = "My Education";
            this.$root.state.setTitle = setTitle
        }
    },
    mounted(){
        this.triggerTitle()
    }
}
</script>

<style scoped>
@media screen and (min-width: 1180px){
    .education-container{
        width: 95%;
        margin: auto;
    }
    .education{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 20px;
        grid-template-rows: 1fr 1fr;
        grid-row-gap: 20px;
        margin-top: 2rem;
        
    }
    .content{
        display:grid;
        grid-template-columns:2fr 1fr;
        border: 1px solid white;
        border-radius: 30px;
        background-color:rgb(98, 98, 98);
    }
 
    .set-img{
        height:400px;
        width: 580px;
        border-top-left-radius: 30px;
        border-bottom-left-radius: 30px;
    }
    .content-text{
        width:90%;
        margin-top: 100px;
        text-align: center;
    }
    .header-text{
        font-size: 25px;
        font-weight: bold;
    }
}
@media screen and (max-width: 1180px){
    .education-container{
        width: 95%;
        margin: auto;
    }
    .education{
        margin-top: 2rem;
        margin-bottom: 2rem;
    }
    .content{
        display:grid;
        grid-template-columns:1fr 2fr;
        border: 1px solid white;
        border-radius: 30px;
        margin-top: 1rem;
        background-color:rgb(98, 98, 98);
    }
 
    .content-text{
 
         text-align: center;
    }
  
    .set-img{
        height:200px;
        width: 230px;
        border-top-left-radius: 30px;
        border-bottom-left-radius: 30px;
    }
    .header-text{
        width:98%;
        margin-top: 30px;
        font-size: 15px;
        font-weight: bold;
    }
    .content-desc{
        margin-right: 5px;
    }
 
}

</style>