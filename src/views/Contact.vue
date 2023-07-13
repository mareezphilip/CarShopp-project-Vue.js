<template>
 
    <div>
     
     
      <CoverComponent :title="title" :text="text" />

      <div class="container ">
        <div class="text-center mt-5 pt-5">
        <h2 class="fw-bold mb-2"> CONTACT US</h2>
        <p class="blue fw-bold" >___________</p>
        
        <p class="text-black text-opacity-50 mt-2"> Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        </div>
        
        <form>
        <div class="form row gx-5 ">
        <div class="col-md-6  col-sm-12">
          <input class="form-control  border-0 border-bottom border-2 contactinput rounded-0" type="text" placeholder="Name" />
          <input class="form-control  border-0 border-bottom border-2 contactinput rounded-0 my-4" type="email" placeholder="Email" />
          <input class="form-control  border-0 border-bottom border-2 contactinput rounded-0" type="password" placeholder="Password" />
        </div>

        <div class="col-md-6 col-sm-12"> 
          <textarea placeholder="enter your message " class="border-0 border-bottom border-2 rounded-0 w-100 mt-2" rows="6" cols="20"/>
        </div>
        </div>

        <button class= "p-2 px-3 rounded text-white my-5 text-center border-0 d-block mx-auto" >  Send Message </button>
        </form>

      </div>

    </div>

    
</template>

<script>
import CoverComponent from '../components/cover/Cover.vue'
export default {
 name:"Contact",
 data(){
  return{
  title:"Contact",
  text:"CONTACT"
  }
 },
 components: {
  CoverComponent,
  }
}
</script>

<style scoped>
.blue{
    color:#3f51b5
}

.largemargin{
  margin-top: 130px;
}
.contactinput{
  border-color: #c8c9cb !important;
}
.form{
  margin:65px 0px ;
}
button{
  background-color: #3f51b5;

}
</style>
