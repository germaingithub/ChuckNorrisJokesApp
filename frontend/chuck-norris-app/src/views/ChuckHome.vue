<template>
<div class="home">
   <Loader/> 
  <div v-if="visibility"> <ModalConfirmation/> </div>
  <div @click="show()"> <JokeBox/> </div>
</div>
</template>


<script>
import JokeBox from '../components/JokeBox.vue'
import Loader  from '../components/Loader.vue'
import ModalConfirmation from '../components/modalConfirmation.vue'
export default {
    name: 'chucknorrisgenerator',

    components: {
  JokeBox,Loader,ModalConfirmation
},
data() {
        return {
            visibility:false,
            timeout: 0  
        }
    },

methods: {
 show() {
   setTimeout(() => {
     this.visibility = true;
   }, 5000);
            
        },
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