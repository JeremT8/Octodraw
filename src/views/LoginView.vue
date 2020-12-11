<template>
    <!-- le rôle des views est d'instancier les éléments qui composent une page
    les views seront instanciées par le routeur -->
    <div>
      <HeaderConnected></HeaderConnected>
        <div class="tentacule_bleue">
            <img src="../assets/images/tentacules_bleu_octodraw.svg">
        </div>
      <main class="main-blue">
          <LoginForm></LoginForm>
      </main>
      <FooterConnected></FooterConnected>
    </div>
</template>
<script>
import HeaderConnected from  "../components/HeaderConnected";
import FooterConnected from "../components/FooterConnected";
import LoginForm from '../components/LoginForm';

export default {
    components: {
        LoginForm,
        HeaderConnected,
        FooterConnected,
    }
}
</script>
<style>
.main-blue {
    border-radius: 25px;
    padding: 1rem;
    width: 30%;
    height: 30%;
    background-image: linear-gradient(to right, #0d2578 , #0d2638);
    color: #ecf4e9;
    display: block;
    margin: auto;
}
/* If the screen size is 601px wide or more, set the font-size of <div> to 80px */
@media screen and (min-width: 601px) and (max-width: 991px) {
  .main-blue {
    width: 70%;
  }
}
/* If the screen size is 600px wide or less, set the font-size of <div> to 30px */
@media screen and (max-width: 600px) {
  .main-blue {
    width: 80%;
    padding: 1rem;
  }
}
.tentacule_bleue {
    width:20%;
    display: block;
    margin: auto;
    margin-bottom: -0.5rem;
}
/* If the screen size is 601px wide or more, set the font-size of <div> to 80px */
@media screen and (min-width: 601px) and (max-width: 991px) {
  .tentacule_bleue {
    width: 45%;
  }
}
/* If the screen size is 600px wide or less, set the font-size of <div> to 30px */
@media screen and (max-width: 600px) {
  .tentacule_bleue {
    width: 45%;
  }
}
</style>