
<template>
 
  <div class="contactimg  position-relative " id="contact">
        <div class="bg-black bg-opacity-75 w-100 h-100 position-absolute top-0">

        <p class="text-center  text-white display-4 largemargin fw-medium"> {{title}}</p>
        
    </div>
    <div class="position-absolute bg-black bg-opacity-50 w-100 bottom-0">
        <p class="text-center text-white fs-6 p-3 fw-semibold"> HOME  > <span class="text-secondary opacity-75"> {{text}}</span> </p>
    </div>
     
   
  </div>

</template>

<script>
export default {
 name:"CoverComponent",
 props:['title' , 'text']
    
 
}
</script>

<style scoped>
.contactimg{
    height: 410px;
    
    background-image: url("@/assets/bgcontact.jpg");
    background-size: 112% 200%;
}

.largemargin{
  margin-top: 130px;
}
</style>


