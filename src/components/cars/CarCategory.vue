<template>
  <div> 
  </div>
</template>

<script>
import carsjson from '../../json/cars.json'
export default {
  name:"CarCategory",
  data(){
    return{
        allcars:carsjson,
        cartype:this.$route.params.cartype
    }
  },
  computed:{
  getCarInfo(){
    let cars_category=[]
    for(let i=0 ; i<this.allcars.length ; i++){
      if(this.allcars[i].name == this.cartype ){
        cars_category.push(this.allcars[i])
      }
    }
    return cars_category
  }
 }
}
</script>

<style>

</style>