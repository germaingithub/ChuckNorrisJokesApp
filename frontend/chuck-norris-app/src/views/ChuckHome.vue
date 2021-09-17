<template>
 




<div class="home">
    <Loader/>
 
   <JokeBox />
  
</div>
</template>


<script>
import JokeBox from '../components/JokeBox.vue'
//import modalConfirmation from '../components/modalConfirmation.vue'
import  Loader  from '../components/Loader.vue'
export default {
    name: 'Home',

    components: {
  JokeBox,Loader
},



}
</script>

<style scoped>
.home {
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}





</style>