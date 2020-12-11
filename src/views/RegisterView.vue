<template>
    <!-- le rôle des views est d'instancier les éléments qui composent une page
    les views seront instanciées par le routeur -->
    <div>
        <main class="main-container">
          <Header></Header>
            <div class="bla">
                
              <img class="illustrateur" src="../assets/images/illustrateur_octodraw.svg">      
              <img class="amateur" src="../assets/images/amateur_octodraw.svg">
                
            </div>
          <RegisterForm></RegisterForm>
          <Footer></Footer>
        </main>
    </div>
</template>

<script>
import Header from  "../components/Header";
import Footer from "../components/Footer";
import RegisterForm from '../components/RegisterForm';
export default {
    components: {
        RegisterForm,
        Header,
        Footer,
    }
}
</script>

<style>
.bla {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.illustrateur{
    margin: auto;
}

.amateur{
    margin: unset;
}

/* If the screen size is 601px wide or more, set the font-size of <div> to 80px */
@media screen and (min-width: 601px) and (max-width: 991px) {
  .images {
    width: 70%;
  }
}
/* If the screen size is 600px wide or less, set the font-size of <div> to 30px */
@media screen and (max-width: 600px) {
  .images {
    width: 80%;
    padding: 1rem;
  }
}
.illustrateur {
    width:20%;
    display: block;
    margin: auto;
    margin-bottom: -6rem;
    margin-right: 0 !important;
}
.amateur {
    width:20%;
    display: block;
    margin: auto;
    margin-bottom: -6rem;
    margin-left: 0 !important;
}
/* If the screen size is 601px wide or more, set the font-size of <div> to 80px */
@media screen and (min-width: 601px) and (max-width: 991px) {
  .illustrateur {
    width: 45%;
  }
  .amateur {
    width: 45%;
  }
}
/* If the screen size is 600px wide or less, set the font-size of <div> to 30px */
@media screen and (max-width: 600px) {
  .illustrateur {
    width: 45%;
  }
  .amateur {
    width: 45%;
  }
}
</style>