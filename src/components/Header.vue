<template>
    <header class="header">
        <div class="nav">
            <input type="checkbox" id="nav-check">
            <div class="nav-header">
                <div class="nav-title">
                    <router-link tag="a" to="/"><a><img class="logo" src="/assets/images/kraken.svg"></a></router-link>
                    <a href="#"></a>
                </div>
            </div>

            <div class="nav-btn">
                <label for="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>
            <div class="nav-links">
                <router-link tag="a" to="/"><a>HOME</a></router-link>

               <router-link tag="a" to="/a-propos"><a>ABOUT US</a></router-link>

                <a href="#" target="_blank">CONTACT</a>
                <router-link tag="a" to="/connexion"><a>LOGIN</a></router-link>
                <router-link tag="a" to="/inscription"><a class="register-button">GET STARTED</a></router-link>
            </div>
        </div>
        <div class="header-title">
            <img class= "illustration" src="data:image/jpeg;base64,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"/>
            <h1>Immerse yourself in this creative escape</h1>
            <router-link tag="a" to="/themes"><button class="button">Discover the theme</button></router-link>
        </div>
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
<style lang="scss" scoped>
.header {
    background-image: url("../assets/images/grande_vague_rouge_octodraw.svg");
    background-repeat: no-repeat;
    background-size: cover;

    height: 105vh;
    width: 100vw;
}
.header-title {
    display: flex;
    flex-direction: column;
    margin-top: -9%;
}
h1 {
    font-family: "Comfortaa Bold";
    color: #ecf4e9;
    font-size: 2rem;
    text-align: center;
    text-transform: uppercase;
    width: 40rem;
    margin: auto;
    display: block;
    line-height: 1;
}
/* If the screen size is 601px wide or more, set the font-size of <div> to 80px */
@media screen and (min-width: 601px) and (max-width: 991px) {
  h1 {
    font-size: 2rem;
    width: 40rem;
    margin-top: -3rem;
  }
}
/* If the screen size is 600px wide or less, set the font-size of <div> to 30px */
@media screen and (max-width: 600px) {
  h1 {
    font-size: 1.5rem;
    width: 20rem;
    margin-top: -10rem;
  }
}
.logo {
    width: 4%;
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 1rem;
    margin-left: 2rem;
}


/* If the screen size is 601px wide or more, set the font-size of <div> to 80px */
@media screen and (min-width: 601px) and (max-width: 991px) {
  .logo {
    margin-top: 1.3rem;
    width: 6%;
  }
}

/* If the screen size is 600px wide or less, set the font-size of <div> to 30px */
@media screen and (max-width: 600px) {
  .logo {
    width: 8%;
  }
}



.illustration {
    display: block;
    margin: auto;
    margin-top: 14rem;
    margin-bottom: 18rem;
}
.button {
    border: none;
    color: #ecf4e9;
    border-radius: 30px;
    background-image: linear-gradient(to right, #0d2578 , #0d2638);
    padding: 10px 32px;
    text-align: center;
    text-decoration: none;
    display: block;
    font-size: 16px;
    margin: auto;
    text-transform: uppercase;
    margin-top: 1rem;

    a {
        font-weight: bold;
        color: #ecf4e9;
        text-decoration: none;
        padding-top: 2rem;
        font-family: 'Comfortaa';
    }
}



/* If the screen size is 601px wide or more, set the font-size of <div> to 80px */
@media screen and (min-width: 601px) and (max-width: 991px) {
  .button {
    font-size: 1rem;
    margin-top: 2rem;
    padding: 15px 40px;
    border-radius: 40px;
  }
}



.register-button {
    border: none;
    color: #ecf4e9;
    border-radius: 30px;
    background-image: linear-gradient(to right, #ab3120 , #e53120);
    padding: 10px 32px;
    text-align: center;
    text-decoration: none;
    display: block;
    font-size: 16px;
    margin: auto;
    text-transform: uppercase;
    margin-top: 1rem;

    a {
        font-weight: bold;
        color: #ecf4e9;
        text-decoration: none;
        padding-top: 2rem;
        font-family: 'Comfortaa';
    }
}



/* If the screen size is 601px wide or more, set the font-size of <div> to 80px */
@media screen and (min-width: 601px) and (max-width: 991px) {
  .register-button {
    font-size: 0.7rem;
  }
}



* {
    box-sizing: border-box;
}
body {
    margin: 0px;
    font-family: 'segoe ui';
}
.nav {
    height: 50px;
    width: 100%;
    position: relative;
    display:flex;
    justify-content: flex-end;
}
.nav > .nav-header {
    display: inline;
}
.nav > .nav-header > .nav-title {
    display: inline-block;
    font-size: 22px;
    color: #ecf4e9;
    padding: 10px 10px 10px 10px;
}
.nav > .nav-btn {
    display: none;
}
.nav > .nav-links {
    display: inline;
    float: right;
    font-size: 18px;
    margin-right: 2rem;
}


/* If the screen size is 601px wide or more, set the font-size of <div> to 80px */
@media screen and (min-width: 601px) and (max-width: 991px) {
  .nav > .nav-links {
    margin-right: 1rem;
  }
}



.nav > .nav-links > a {
    display: inline-block;
    text-decoration: none;
    color: #ecf4e9;
    margin-top: 1rem;
    text-align: center;
    padding: 1rem;
}


/* If the screen size is 601px wide or more, set the font-size of <div> to 80px */
@media screen and (min-width: 601px) and (max-width: 991px) {
  .nav > .nav-links > a {
    font-size: 0.7rem;
    margin-top: -0.5rem;
  }
}


.nav > .nav-links > a:hover {
    color: #0d2578;
}
.nav > #nav-check {
    display: none;
}
@media (max-width:600px) {
    .nav > .nav-btn {
        display: inline-block;
        position: absolute;
        right: 0px;
        top: 0px;
    }
    .nav > .nav-btn > label {
        display: inline-block;
        width: 50px;
        height: 50px;
        padding: 13px;
    }
    .nav > .nav-btn > label:hover,.nav  #nav-check:checked ~ .nav-btn > label {
        background-color: rgba(0, 0, 0, 0.3);
    }
    .nav > .nav-btn > label > span {
        display: block;
        width: 25px;
        height: 10px;
        border-top: 2px solid #ecf4e9;


    }
    .nav > .nav-links {
        position: absolute;
        display: block;
        width: 100%;
        background-color: #ab3120;
        height: 0px;
        transition: all 0.3s ease-in;
        overflow-y: hidden;
        top: 50px;
        left: 0px;
    }
    .nav > .nav-links > a {
        display: block;
        width: 100%;
    }
    .nav > #nav-check:not(:checked) ~ .nav-links {
        height: 0px;
    }
    .nav > #nav-check:checked ~ .nav-links {
        height: calc(100vh - 50px);
        overflow-y: auto;
    }
}

</style>
    .nav > .nav-btn > label > span {

        display: block;
        width: 25px;
        height: 10px;
        border-top: 2px solid #eee;


    }
    .nav > .nav-links {
        position: absolute;
        display: block;
        width: 100%;
        background-color: #ab3120;
        height: 0px;
        transition: all 0.3s ease-in;
        overflow-y: hidden;
        top: 50px;
        left: 0px;
    }
    .nav > .nav-links > a {
        display: block;
        width: 100%;
    }
    .nav > #nav-check:not(:checked) ~ .nav-links {
        height: 0px;
    }
    .nav > #nav-check:checked ~ .nav-links {
        height: calc(100vh - 50px);
        overflow-y: auto;
    }
}
</style>