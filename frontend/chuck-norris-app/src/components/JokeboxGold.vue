<template>
  <div class="box">
    <h1>You're not on Superman's Jokes Generator ;)😉</h1>
    <h2>Here the joke</h2>
        <router-link id="buttonBack" class="confirm" to="/ChuckNorrisGenerator/">Black version </router-link>
            <div class="boxJoke" v-if="joke ">
                <h3>{{ joke }}</h3> 
            </div>
        <b-link id="button" @click.prevent="getJoke()"> Get a joke </b-link>
  </div>
</template>

<script>
import axios from "axios";

export default {
    name: 'JokeBox',
    
data() {
    return {
        joke: "",
    }
},

methods: {

getJoke() {
    
axios
.get('https://api.chucknorris.io/jokes/random', {
    headers: {
        'authorization': 'Bearer ' + localStorage.getItem('token')
            }})
    .then((response) => {
        
        this.joke = response.data.value;

    }).then ((res) => {
        console.log(res);
    })
     .catch ((error) => {
        console.log(error);
      
    })
},
}
}
</script>


<style scoped>

.box {
  display:flex;
  justify-content:center;
  align-items:center;
   position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  flex-direction:column;
  background-color: rgb(193,165,90);
  box-shadow: 3px rgb(22, 23, 23);
  color: rgb(4,4,4);
  max-width: 100%;
  border-radius: 5px;
  animation: appear;
    animation-delay: 3s;
    animation-fill-mode: both;
  
}
@keyframes appear {
    0% {
        opacity: 0;
        z-index: 10000;
   
    }
}
#button {
  display:flex;
  justify-content:center;
  align-items:center;
  min-width:200px;
  width: auto;
  height:70px;
  border: 0;
  border-radius: 5px;
  box-shadow: 3px rgb(22, 23, 23);
  background-color: rgb(4,4,4);
  color: rgb(193,165,90);
  cursor: pointer;
  padding: 10px;
  transition: transform 0.1s ease-in;
  margin-bottom: 10px;
}

#button:active {
    transform:scale(0.98);
}

#buttonBack {
  display:flex;
  justify-content:center;
  align-items:center;
  min-width:100px;
  width: auto;
  height:70px;
  border: 0;
  border-radius: 500px;
  box-shadow: 3px rgb(22, 23, 23);
  background-color: rgb(4,4,4);
  color: rgb(193,165,90);
  cursor: pointer;
  padding: 10px;
  transition: transform 0.1s ease-in;
  margin-bottom: 10px;
  text-decoration: none;
}

#buttonBack:active {
    transform:scale(0.98);
}

.boxJoke {
    background-color: white;
    color: rgb(193,165,90);
    border-radius: 5px;
    padding: 5px;
    margin: 5px;
}
</style>