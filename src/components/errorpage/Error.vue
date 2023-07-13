<template>
    <div class="error-page-detailes mt-5 text-center">
       <img src="@/assets/website-page-found-error-robot-character-with-magnifying-glass-hand-site-crash-technical_502272-1890.avif" >
       <div>
        <button type="button" class="py-2 px-4 mt-3 text-white rounded border-0" @click="goBack()">GO Back</button>
       </div>
    </div>
</template>

<script>
export default{
    name:"ErrorPageComponent",
    components:{},
    methods:{
        goBack(){
           this.$router.push({name:"home"})
        }
    }
}
</script>

<style scoped>
 button{
    background-color: #3f51b5 !important ;

 }
</style>