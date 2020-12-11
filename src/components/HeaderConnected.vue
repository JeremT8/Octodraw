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
                <router-link tag="a" to="/"><a>ACCUEIL</a></router-link>
                <router-link tag="a" to="/a-propos"><a>A PROPOS DE NOUS</a></router-link>
                <router-link tag="a" to="/contact"><a>CONTACT</a></router-link>

                <router-link tag="a" to="/connexion"><a>SE CONNECTER</a></router-link>
                <router-link tag="a" to="/inscription"><a class="register-button">NOUS REJOINDRE</a></router-link>
            </div>
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
    background-image: url("../assets/images/grande_vague_bleue_octodraw.svg");
    background-repeat: no-repeat;
    background-size: cover;
    height: 130vh;
    width: 100vw;
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


.register-button:hover {
  color: #0d2578;
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
    font-family: "Comfortaa Bold";
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
    color: #e53120;
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
        background-color: #0d2578;
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

