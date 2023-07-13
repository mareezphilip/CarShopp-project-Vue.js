<template>
  <div class="row justify-content-evenly gx-2 gy-4">
    <div class="col-lg-4 col-md-12 cardiv  pb-2 px-2" v-for="(car,i) in cars" :key="i">
        <div class="shadow"> 
             <img :src="getimageURL(car.name , car.mainimage)" class=" rounded d-block mx-auto w-100 " />
              <h3 class="py-2 mt-2 mx-2"> {{car.model}} </h3>
           <div class="px-2 row justify-content-between py-3">
           <div class="col-2 justify-self-center"> {{car.price}}</div>

           <div class="col-5 justify-self-center"> 
            <router-link :to="{name:'CarInfo' , params :{carid: car.id , carname: car.name} }"> <button type="button" class="text-white p-1 rounded border-0 px-2">  More Details </button> </router-link> 
            </div>
           
         </div>
      

        </div>
     


    </div>

  </div>
</template>

<script>
export default {
 name:"CarsComponent",
 data(){
    return{
      cars : this.$attrs.allcars
    }
 },
 methods:{
    getimageURL(foldername , imagename ){
       let image = require.context('@/assets');
       return image('./' + foldername +'/'+imagename )
    }
 }
}
</script>

<style scoped>
img{
    height: 185px;
}
 button{
    background-color: #3f51b5 ;

 }
</style>