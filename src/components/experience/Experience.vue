<template>
    <div class="experience-container">
        <div class="experience">
            <div class="title-text">
                <h3>Time Line</h3>
                <hr>
            </div>
            <div class="content-text">
                <div class="set-time-text-left">
                    <div class="time-line-text-left-1">
                        Working at Japan village as bartender at 2017.<span><hr></span>
                    </div>
                    <div class="time-line-text-left-2">
                        Working at nopadol panich co. ltd as MIS at 2018-2020.<span><hr></span>
                    </div>
                    <div class="time-line-text-left-3">
                        Start learning how to programming at 2020.<span><hr></span>
                    </div>
                    <div class="time-line-text-left-4">
                        Freelance with CoreTech group from scg as back-end at 2021.<span><hr></span>
                    </div>
                </div>
                <div class="time-line"> </div>
                <div class="set-time-text-right">
                    <div class="time-line-text-right-1">
                         Working at Zest as content creator at 2018.<span><hr></span>
                    </div>
                    <div class="time-line-text-right-2">
                         Pass into Chiang Mai University master degree data-sci 2020.<span><hr></span>
                    </div>
                    <div class="time-line-text-right-3">
                        Working at OASYS lab as back-end at 2021.<span><hr></span>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@media screen and (min-width: 501px){
    .experience-container{
        width:50%;
        margin: auto;
    }

    .experience{
        margin-top: 2rem;
        margin-bottom: 2rem;
    }

    .time-line{
        border-left: 4px solid white;
        margin-left: 50%;
        height: 600px;
    }

    .content-text{
        display: grid;
        grid-template-columns:  1fr 0.2fr 1fr;
        

    }

    hr {
        border: 0 !important;
        height: 3px !important;
        background-image: white !important;
    }
    .set-time-text-left{
        text-align: left;
    }
    .set-time-text-right{
        text-align: right;
    }

    .time-line-text-right-1{
        margin-top:  3rem;
    }

    .time-line-text-left-2{
        margin-top: 6rem;
    }

    .time-line-text-right-2{
        margin-top:  6rem;
    }

    .time-line-text-left-3{
        margin-top: 6rem;
    }

    .time-line-text-right-3{
        margin-top:  6rem;
    }

    .time-line-text-left-4{
        margin-top: 6rem;
    }

    .title-text{
        text-align: center;
        margin-bottom: 3rem;
    }
 
}

@media screen and (max-width: 500px){
    .experience-container{
        width:95%;
        margin: auto;
    }

    .experience{
        margin-top: 2rem;
        margin-bottom: 2rem;
    }

    .time-line{
        border-left: 4px solid white;
        margin-left: 50%;
        height: 600px;
    }

    .content-text{
        display: grid;
        grid-template-columns:  1fr 0.2fr 1fr;
    }

    hr {
        border: 0 !important;
        height: 3px !important;
        background-image: white !important;
    }
    .set-time-text-left{
        text-align: left;
    }
    .set-time-text-right{
        text-align: right;
    }

    .time-line-text-right-1{
        margin-top:  3rem;
    }

    .time-line-text-left-2{
        margin-top: 6rem;
    }

    .time-line-text-right-2{
        margin-top:  6rem;
    }

    .time-line-text-left-3{
        margin-top: 6rem;
    }

    .time-line-text-right-3{
        margin-top:  6rem;
    }

    .time-line-text-left-4{
        margin-top: 6rem;
    }

    .title-text{
        text-align: center;
        margin-bottom: 3rem;
    }
}
</style>