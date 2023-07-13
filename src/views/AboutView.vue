<template>
  <div class="about">

      <CoverComponent :title="title" :text="text" />

      <div class="container my-5">  
          <div class= "row gx-5 largemargin"> 
          <div class="col-md-5 col-sm-12">
            <img src="../assets/aboutimg.jpg" class="w-100"/>

          </div>
          <div class="col-md-6 col-sm-12 ms-3 align-self-center mt-md-0 mt-sm-3"> 
            <h2 class="fw-bold"> FIND YOUR PERFECT CAR </h2>
            <p class="text-secondray w-75 opacity-75 mt-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem praesentium cum rem quisquam voluptate facilis animi natus nam mollitia veritatis. </p>

            <p class="text-secondray opacity-75 "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur consectetur 
              eaque quam nulla, eius quia, accusantium ex labore quas obcaecati eligendi nostrum quaerat reprehenderit? Saepe quis quam consequuntur!
               Autem animi quas ad dignissimos ullam beatae commodi distinctio natus 
              </p>
          </div>

       </div>
      </div>
       

  </div>

 
</template>

<script>
  import CoverComponent from '../components/cover/Cover.vue'
  export default{
    data(){
      return{
         title:"About Us",
         text:"ABOUT"
      }
    },
    components:{
      CoverComponent,
    }
  }
</script>


<style scoped>
.aboutimg{
    height: 60vh;
    background-image: url("../assets/bgcontact.jpg");
    background-size: 112% 200%;
}
.largemargin{
    margin-top: 130px;
}
img{
    height: 350px;
}
</style>
