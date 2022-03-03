<template>
    <div>
        <div class="project-container">
            <div class="project-content"><h5>Project OCR E-slip using KNN</h5><div><a class="link-to-anotherpage" href="https://docs.google.com/presentation/d/1l-7jLcqVHvPb8w5wb-1PeE431anvoV8y/edit?usp=sharing&ouid=107674972478088125780&rtpof=true&sd=true">
                powerpoint</a><a class="link-to-anotherpage" href="https://github.com/pcsishun/IS_project_OCR">github</a></div></div>
            <div class="project-content"><h5>Computer vison detect noodles</h5><a class="link-to-anotherpage" href="https://colab.research.google.com/drive/1ZtVSJfttX0GQJ-e0qa0mTnTqJ-Afvboz?usp=sharing">colab</a></div>
            <div class="project-content"><h5>Landing page Furesgin</h5><a class="link-to-anotherpage" href="https://mockup-furesign.herokuapp.com/">website</a></div>
            <div class="project-content"><h5>Landing page Thaiagroinnovative</h5><a class="link-to-anotherpage" href="http://www.thaiagroinnovative.com/">website</a></div>
            <div class="project-content"><h5>Config to mqtt broker</h5><a class="link-to-anotherpage" href="https://github.com/pcsishun/backend-admin-engineer-config/blob/main/app.js">github</a></div>
            <div class="project-content"><h5>Chat bot NINA</h5><a class="link-to-anotherpage" href="https://line.me/ti/p/@188hzruo">LINE</a></div>
            <div class="project-content"><h5>Chat bot CoreTech</h5><a class="link-to-anotherpage" href="https://github.com/pcsishun/scg_chatbot">github</a></div>
        </div>
        <div class="footer">

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
            const setTitle = "My Project";
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
    .project-container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin: auto;
        width: 90%;
        text-align: center;
        grid-row-gap: 10px;
        grid-column-gap: 20px;
    }

    .link-to-anotherpage{
        margin-left: 5px;
        margin-right: 5px;
    }

    .project-content{
        border-radius: 30px;
        padding-top:20px;
        padding-bottom: 20px;
        border: 1px solid rgb(175, 175, 175);
    }

}

@media screen and (max-width: 1179px){

    .project-container{
        margin: auto;
        width: 90%;
        text-align: center;
    }

    .link-to-anotherpage{
        margin-left: 5px;
        margin-right: 5px;
    }

    .project-content{
        border-radius: 30px;
        padding-top:20px;
        padding-bottom: 20px;
        border: 1px solid rgb(175, 175, 175);
        margin-top: 30px;
    }

}

.footer{
    margin-top: 30px;
}

</style>