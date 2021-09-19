<template>
    <div class="loader">
        <div class="loader_menu" id="loader_1">
            <div class=""><br>Welcome to Chuck Norris world.</div>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</template>

<script>
export default {
 name: 'Loader',
};
</script>

<style scoped>
#loader_1 {
    top: 40px;
    left: -2.5px;
}
#loader_1 span {
    display: inline-block;
    width: 30px;
    height: 100px;
}
#loader_1 span:nth-child(1) {
    animation: load 1s ease-in-out infinite;
    background-color: rgb(193,165,90);
    border-radius: 100px;
}
#loader_1 span:nth-child(2) {
    animation: load 1s ease-in-out 0.15s infinite;
    background-color: rgb(4,4,4);
    border-radius: 100px;
}
#loader_1 span:nth-child(3) {
    animation: load 1s ease-in-out 0.30s infinite;
    background-color: rgb(193,165,90);
    border-radius: 100px;
}
#loader_1 span:nth-child(4) {
    animation: load 1s ease-in-out 0.50s infinite;
    background-color: rgb(4,4,4);
    border-radius: 100px;
}
#loader_1 span:nth-child(5) {
    animation: load 1s ease-in-out 0.70s infinite;
    background-color: rgb(193,165,90);
    border-radius: 100px;
}
@keyframes load {
    0%,
    100% {
        transform: scaleY(1);
    }
    50% {
        transform: scaleY(2);
    }
}
#bloc_page {
    align-items: center;
    justify-content: center;
}
#loader_1 {
    position: fixed;
    z-index: 100000;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    padding-left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    background-color: whitesmoke;
    animation: loader;
    animation-delay: 2s;
    animation-fill-mode: both;
}
@keyframes loader {
    100% {
        opacity: 0;
        z-index: -2;
    }
}
</style>