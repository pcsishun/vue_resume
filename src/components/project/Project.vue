<template>
    <div class="project-container">
        project 
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

</style>