 
<template>
    <header class="header logo-only">
        <div class="logo-container">
            
        </div>
        
            <div class="text-container"> 
                
                <nav class="nav-bar_header">
                    <img class="logo" src="/assets/images/kraken.svg">
                    <a href="#">HOME</a>
                    <a href="#">ABOUT</a>
                    <a href="#">BLOG</a>
                    <a href="#">CONTACT</a>
                    <a href="#">EXHIBITIONS</a>
                    <a href="#">LOGIN</a>
                </nav>
            </div>

            <img src="#">
            <h1>IMMERSE YOURSELF IN THIS <br> CREATIVE ESCAPE</h1>
            <a href="#">DISCOVER THE THEME</a>
    </header>
</template>

<script>
import userService from '../services/UserService';
export default {
    computed: {
      userStatus() {
        return userService.isUserConnected();
      }
    },
    beforeMount() {
      userService.init();
    }
}
</script>

<style scoped>
header{
    background-image: url("../assets/images/vague_rouge_octodraw.svg");
    background-repeat: no-repeat;
    background-size:100% 100%;
    height: 60vh;
    width: 100vw;
}

.nav-bar_header {
    display: flex;
    justify-content: space-between;
       
}

.logo {
    width: 70px;
    margin-top: 10px;
    margin-left: 10px;
}
</style>