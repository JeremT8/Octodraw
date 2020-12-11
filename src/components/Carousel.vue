<template>
    
    <div class="wrapper">
        <div class="header-title">
            <img class= "illustration" src=""/>
            <h1>Immerse yourself in this creative escape</h1>
            <router-link tag="a" to="/themes"><button class="button">Discover the theme</button></router-link>
        </div>
        <img class="red_tentacles" src ="../assets/images/tentacules_rouge_octodraw.svg"/>
        <div class="contenu-carrousel">
            <div class="carrousel">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <div class=controle>
            <button onclick="carrousel('-')">❮</button>
            <button onclick="carrousel('')">❯</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            angle: 0
            }
        },
        methods: {
            onSubmit() {
                spinner=document.querySelector(".carrousel");
                if(!sign){angle = angle + 60}
                else{ angle = angle - 60}spinner.setAttribute("style","transform:rotateY("+ angle +"deg);")
            }
        }
    }
</script>

<style lang="scss" scoped>
.header-title {
    display: flex;
    flex-direction: column;
    margin-top: -60%;
    margin-bottom: 22%;
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
.illustration {
    display: block;
    margin: auto;
    margin-top: 14rem;
    margin-bottom: 18rem;
}

/* If the screen size is 601px wide or more, set the font-size of <div> to 80px */
@media screen and (min-width: 601px) and (max-width: 991px) {
  .button {
    font-size: 1rem;
    margin-top: 2rem;
    padding: 15px 40px;
    border-radius: 40px;
    }
    h1 {
    font-size: 2rem;
    width: 40rem;
    margin-top: -3rem;
    }
}

/* If the screen size is 601px wide or more, set the font-size of <div> to 80px */
@media screen and (min-width: 601px) {
    .wrapper {
        font-size: 2rem;
    }
}

/* If the screen size is 600px wide or less, set the font-size of <div> to 30px */
@media screen and (max-width: 600px) {
    .wrapper {
        font-size: 1rem;
        width: 20rem;
        margin-top: 10rem;
        margin-right: 0 !important;
    }
    .red_tentacles {
        width: 15%;
        margin: 0;
    }
    .contenu-carrousel {
    margin: 0;
    width: 150px;
    height: 100px;
    }
    h1 {
    font-size: 1.5rem;
    width: 20rem;
    margin-top: -10rem;
    }

}

.wrapper {
    margin-top: 8rem;
    margin-right: 0;
}

.red_tentacles {
    width: 15%;
    display: block;
    margin: auto;
}

*{box-sizing: border-box}

body {
    margin:0;
    display:grid;
    min-height:100vh;
    place-items:center;
}
	
.controle {
    display:grid;
    grid:2rem/repeat(2,1fr);
    place-items:center;
}
	
button { 
    font-size: 2rem;
    border: none;
    cursor: pointer;
    background: #eee;
} 

.contenu-carrousel {
    margin: 5rem auto;
    width: 300px;
    height: 200px;
    position: relative;
    perspective: 1000px;
    margin-top: 2rem;
}

.carrousel {
    height: 100%;
    width: 100%;
    position: absolute;
    transform-style: preserve-3d;
    transition: transform 1s;
}

.carrousel div {	
    backface-visibility: hidden;
    box-shadow: 0 10px 10px rgba(0,0,0,.6);
    position: absolute;
    width: 300px;
    height: 200px;
    outline: 1px solid transparent;	
}
	
.carrousel div:nth-child(1) {
    transform: rotateY(0) translateZ(270px);
    background:url("../assets/images/amateur_octodraw.svg" ) no-repeat center center/cover;
}
	
.carrousel div:nth-child(2) {
    transform: rotateY(60deg) translateZ(270px);
    background:url("../assets/images/grande_vague_rouge_octodraw.svg") no-repeat center center/cover;
}
	
.carrousel div:nth-child(3) {	
    transform: rotateY(120deg) translateZ(270px);
    background:url("../assets/images/kraken.svg") no-repeat center center/cover;
}
	
.carrousel div:nth-child(4) {
    transform: rotateY(180deg) translateZ(270px);
    background:url("../assets/images/tentacules_bleu_octodraw.svg") no-repeat center center/cover;
}
	
.carrousel div:nth-child(5) {
    transform: rotateY(240deg) translateZ(270px);
    background:url("../assets/images/tentacules_rouge_octodraw.svg") no-repeat center center/cover;	
} 
	
.carrousel div:nth-child(6) {
    transform: rotateY(300deg) translateZ(270px);
    background:url("../assets/images/vague_rouge_octodraw.svg") no-repeat center center/cover;	
}

</style>