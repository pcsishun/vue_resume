<template>
    <div class="hobby-container">
        hobby 
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

</style>