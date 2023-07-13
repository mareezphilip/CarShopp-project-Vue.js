<template>
  <div class="row detaildiv py-5">
     <div class="col-md-7 col-sm-12" > 
      <img :src="getimageURL(getCarInfo.name,getCarInfo.mainimage)" class="w-75 d-block mx-auto " />
      </div>
     <div class="col-md-5 col-sm-12 mt-4" > 
        <h3 class="fw-bold mb-4"> {{getCarInfo.model}}</h3>
        <p> <strong> Description : </strong> {{getCarInfo.description}}</p>
        <p> <strong>Model : </strong> {{getCarInfo.year}}</p>
        <p> <strong> price : </strong>{{getCarInfo.price}} </p>
     </div>
  </div>
</template>

<script>
import carsjson from '../../json/cars.json'
export default {
 name:"CarInfo",
 data(){
  return{
    allcars:carsjson,
    carname:this.$route.params.carname,
    carid:this.$route.params.carid,
  }
 },
  methods:{
    getimageURL(foldername , imagename ){
       let image = require.context('@/assets');
       return image('./' + foldername +'/'+imagename )
    }
 },
 computed:{
  getCarInfo(){
    let cardata
    for(let i=0 ; i<this.allcars.length ; i++){
      if(this.allcars[i].id == this.carid ){
        cardata = this.allcars[i]
      }
    }
    return cardata
  }
 }
}
</script>

<style scoped>
h3{
  color: #3f51b5;
}
img{
  filter: drop-shadow(5px 10px 7px #73747a);
}
.detaildiv{
  margin-top: 80px;
}
</style>

