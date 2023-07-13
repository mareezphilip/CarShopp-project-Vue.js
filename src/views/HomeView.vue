<template>
<div class="container"> 
  <div class="home row">

     <div class="col-lg-2 col-md-3 col-sm-12">
      <SideBar />
     </div>
    
     <div class="col-lg-10 col-md-9 col-sm-12"> 
      <CarsComponent :allcars="getcars" :key="carreload"/>
     </div>
     
     
     
  </div>
 
  </div>
</template>

<script>
import CarsComponentVue from '@/components/cars/CarsComponent.vue'
// @ is an alias to /src
import SideBar from '../components/sidebar/SideBar.vue'
import CarsComponent from '../components/cars/CarsComponent.vue'
import allcarsjson from '../json/cars.json'
export default {
  name: 'HomeView',
  components: {
   SideBar,
   CarsComponent,
  },
  data(){
    return{
      allcars : allcarsjson ,
      cartype : this.$route.params.cartype,
      carreload:0
      
    }
  },
  computed:{
    getcartype(){
      let type
      type = this.$route.params.cartype
      return type
    },
    getcars(){
      let cars=[]
      if(!this.$route.params.cartype || this.$route.params.cartype == "all"){
        cars = allcarsjson
      }
      else{
       for(let i=0 ; i<this.allcars.length ; i++){
          if(this.allcars[i].name == this.$route.params.cartype ){
            cars.push(this.allcars[i])
          }
        }
      }
      
      this.carreload++;
      return cars
    }
  }

 // ,
//  watch

}
</script>
