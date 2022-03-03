<template>
    <div class="hobby-container">
        <p>It not complete now, about my hobby you can contact me for more infomation :)</p>
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

<style scoped>
@media screen and (min-width: 1180px){
    .hobby-container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 90%;
        margin: auto;
        text-align: center;
    }
}

@media screen and (min-width: 1179px){
    .hobby-container{
        width: 90%;
        margin: auto;
        text-align: center;
    }
}

</style>