<template>
    <div class= "sidebarnav">
        <ul>
            <router-link tag="li" :to='{name:"homefromside" , params: {cartype: "all"} }' > <a class="link-underline link-underline-opacity-0  text-white fw-bold d-block p-3"> All </a> </router-link>
          <router-link tag="li" v-for="(type,i) in cartypes" :key="i" :to='{name:"homefromside" , params: {cartype: type.type} }'> <a class="link-underline link-underline-opacity-0  text-white fw-bold d-block p-3"> {{type.type}} </a> </router-link>
        </ul> 

    </div>
</template>


<script>
import cartypes from '../../json/cartypes.json'
export default {
 name:"SideBar",
 data(){
    return{
        cartypes:cartypes,
    }
 }
}
</script>

<style scoped>

ul li {
    list-style: none;
    width: 100%;
    border-bottom: 2px solid #fff;
    background-color: #505365;
}


</style>