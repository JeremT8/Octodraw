 
<template>
    <header class="header logo-only">
        <div class="logo-container">
            <img class="logo" src="~/images/">
        </div>
            <div class="text-container"> 
                <nav>
                    <a href="#">HOME</a>
                    <a href="#">ABOUT</a>
                    <a href="#">BLOG</a>
                    <a href="#">CONTACT</a>
                    <a href="#">EXHIBITIONS</a>
                </nav>
                <nav>
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

</style>