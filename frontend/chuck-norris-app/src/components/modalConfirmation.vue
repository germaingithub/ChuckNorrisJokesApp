<template>
    <div v-if="visibility"  class="overlay" id="visibilityOverlay">
        <div class="modal">
            <div class="modalTitle">
                <span> Are you enjoying the jokes of the master?</span>
            </div>
            <div class="modalBody">
                 <img alt="Chuck Norris" width="300" height="300" src="../assets/chuckN.png">
                <div>
                    You must say YES ;)
                </div>
                <button @click.prevent="toggleModal" class="confirm">YES, keep going</button>
                <router-link  class="confirm" to="/boxgold/">No, I prefer Superman's jokes. </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'modalConfirmation',
        data() {
            return {
                visibility:true,
            
            }
        },
    methods: {
        toggleModal() {
            this.visibility = !this.visibility;
        },
    }
};
</script>

<style scoped>
.overlay {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    margin: 10px;
}
.modal {
    background-color: rgb(193,165,90);
    padding: 20px;
    border-radius: 15px;
    color: #444;
}
.confirm {
    background: none;
    border: 2px solid;
    font: inherit;
    line-height: 1;
    margin: 0.5em;
    padding: 1em 2em;
    color: #040505;
    border-radius: 10px;
    text-decoration: none; 
}
.confirm:hover{
    box-shadow: 0 0 0 0,inset 4px 4px 4px 4px;
    background: rgb(193,165,90);    
}

</style>