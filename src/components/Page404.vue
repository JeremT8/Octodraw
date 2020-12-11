<template>
    <div class="image404">

      <!--<img src="../assets/images/618egtClBSL._AC_SX450_.jpg">-->
      <div class="image-text">
        <h1>OOUPS ! Une grosse gomme a dû effacer cette page ! </h1>
        <h3> Cette page est malheureusement introuvable... </h3>
        <a><router-link class="button" to="/">Retour à l'accueil</router-link></a>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>





.FadeAway{
    position: relative; top:80px; left:0px; width:100%; height:100%;
        background:transparent;
        background: linear-gradient(top, rgba( 255, 255, 255, 255 ) 0%, rgba( 255, 255, 255, 1 ) 100% );
        background: -moz-linear-gradient(top, rgba( 255, 255, 255, 0) 0%, rgba( 255, 255, 255, 1 ) 100% );
        background: -ms-linear-gradient(top, rgba( 255, 255, 255, 0 ) 0%, rgba( 255, 255, 255, 1 ) 100% );
        background: -o-linear-gradient( top, rgba( 255, 255, 255, 0 ) 0%, rgba( 255, 255, 255, 1 ) 100% );
        background: -webkit-linear-gradient( top, rgba( 255, 255, 255, 0 ) 0%, rgba( 255, 255, 255, 1 ) 100% );
        -ms-filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#550000FF, endColorstr=#550000FF);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#00ffffff, endColorstr=#ffffffff);
}




.image-text {
  text-align: center;
  position: absolute;
  top: 150%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-family: Comfortaa Medium;
}

.image404 {
  background-image: url("https://media.gettyimages.com/illustrations/vatican-museums-and-galleries-vatican-city-italy-illustration-id55994891?k=6&m=55994891&s=612x612&w=0&h=EFXGalQosq4v-0LGZdL3sh_DHK8Ybb2ZXHraUqg8eNw=");
  background-color: #cccccc;
  height: 750px;

  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  z-index: 2;
  top: 0px;
  left: 0px;
  margin-top: -20rem;
  margin-bottom: -20rem;
}


.button{
  border: none;
  color: white;
  border-radius: 30px;
  background-image: linear-gradient(to right, #0d2578 , #0d2638);
  padding: 10px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 20px 0 0 0;
  cursor: pointer;
}
</style>