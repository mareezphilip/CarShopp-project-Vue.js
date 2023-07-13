<template>
   <div class="position-sticky top-0 z-3 bg-white">
     <ul class=" nav d-flex justify-content-center mb-5 ">
        <router-link tag="li" :to="{name: 'home' , params:{pagetitle : 'Home page'} }" exact> <a> Home </a> </router-link>

        <router-link tag="li" :to="{name: 'Categories' , params:{pagetitle : 'Categories page'} }" > <a> Categories </a> </router-link>

        <router-link tag="li" :to="{name: 'about' , params:{pagetitle : 'About page'} }" > <a> About </a> </router-link>

        <router-link tag="li" :to="{name: 'Contact' , params:{pagetitle : 'Contact page'} }" > <a> Contact </a> </router-link>

     </ul> 
   </div>
</template>

<script>
export default{
    name:"MainMenu"
}
</script>

<style scoped>
li{
    padding: 10px;
    margin: 0 5px;

}
a{
    text-decoration: none;
    color: #4f4f60;
    font-weight: bold;
}
li:hover{
    border-bottom: 3px solid #3f51b5 ;
}

.router-link-exact-active {
   
    border-bottom: 3px solid #3f51b5 ;
}

.router-link-exact-active a{
    color:#3f51b5;
}
.nav{
    position: sticky;
    top: 0px;

}
</style>
