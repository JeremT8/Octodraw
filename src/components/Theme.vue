<template>
    <div class="theme-container">
        <div class="img-container">
         <img class="img-illustrateur" src="../assets/images/illustrateur_octodraw.svg">
         <img class="img-amateur" src="../assets/images/amateur_octodraw.svg">
        </div>
        <div class="theme-card">
            <div class="croquis">
                <h2>Croquis</h2>
                <p>Date-time</p>
                <h1>Thème : Motivation</h1>
                <p class="citation">"Il faut viser la lune, parce qu’au moins, si vous échouez, vous finirez dans les étoiles"</p> 
                <p class="author">Oscar Wilde</p>
                <p class="go">A vos crayons, prêt ? Dessinez !</p>
                <div class= "galery-button">
                    <router-link tag="a" to="/galerie"><a>Galerie Croquis</a></router-link>
                    <span></span><span></span><span></span><span>
                </div>
            </div>
            <div class="planches">
                <h2>Planches</h2>
                <p>Date-time</p>
                <h1>Thème : Motivation</h1>
                <p class="citation">"Celui qui veut réussir trouve un moyen. Celui qui veut rien faire trouve une excuse"</p>
                <p class="author">Proverbe</p>
                <p class="go">A vos crayons, prêt ? Dessinez !</p>
                <div class= "galery-button">
                    <router-link tag="a" to="/galerie"><a>Galerie Planche</a></router-link>
                    <span></span><span></span><span></span><span>
                </div>
            </div>
        </div>
        <div class="participate-button">
            <a href="#" class="button">
                <svg>
                    <defs>
                        <linearGradient id="grad1">
                            <stop offset="0%" stop-color="#0d2578"/>
                            <stop offset="100%" stop-color="#0d2638" />
                        </linearGradient>
                    </defs>
                    <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="266" height="50"></rect>
                </svg>
                <div class="galery-button">
               <router-link tag="a" to="/ajout"><a>PARTICIPER</a></router-link> 
               </div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.theme-container {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
}

.theme-card {
    padding:5px;
     width:80%; 
     margin:auto; 
     border:8px solid #e53120; 
    background-image: linear-gradient(to right, #0d2578 , #0d2638);
     -moz-border-radius:20px; 
     -khtml-border-radius:20px; 
     -webkit-border-radius:20px; 
     border-radius:20px; 
     margin-top: 4rem;
     color: white;
     display: flex;
     justify-content: space-around;
     padding: 1rem;
}

/* If the screen size is 601px wide or more, set the font-size of <div> to 80px */
@media screen and (min-width: 601px) and (max-width: 991px) {
.theme-card {
    font-size: 2rem;
}
}

/* If the screen size is 600px wide or less, set the font-size of <div> to 30px */
@media screen and (max-width: 600px) {
.theme-card {
    display: flex;
    flex-wrap: wrap;
}
}

.croquis {
    margin-right: 1rem;
    margin-left: 1rem;
}

.planches {
    margin-left: 1rem;
    margin-right: 1rem;
}

img {
    width: 20%;
    margin-bottom: -4.3rem;
}

/* If the screen size is 601px wide or more, set the font-size of <div> to 80px */
@media screen and (min-width: 601px) and (max-width: 991px) {
img {
    width: 30%;
}
}

/* If the screen size is 600px wide or less, set the font-size of <div> to 30px */
@media screen and (max-width: 600px) {
img {
    width: 30%;
}
}

.img-container {
    display: flex;
    justify-content: center;
}

h2 {
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    font-size: 2rem;
    font-family: "Comfortaa Bold";
    margin-top: 2rem;
}

/* If the screen size is 601px wide or more, set the font-size of <div> to 80px */
@media screen and (min-width: 601px) and (max-width: 991px) {
h2 {
    font-size: 2rem;
}
}

/* If the screen size is 600px wide or less, set the font-size of <div> to 30px */
@media screen and (max-width: 600px) {
h2 {
    font-size: 1rem;
    margin-top: 1rem;
}
}

p {
    text-align: center;
    margin-bottom: 1rem;
}

/* If the screen size is 601px wide or more, set the font-size of <div> to 80px */
@media screen and (min-width: 601px) and (max-width: 991px) {
p {
    font-size: 2rem;
}
}

/* If the screen size is 600px wide or less, set the font-size of <div> to 30px */
@media screen and (max-width: 600px) {
p {
    font-size: 0.6rem;
}
}

.citation {
    font-style: italic;
    margin-bottom: 1rem;
    font-family: Helvetica, sans-serif;
}

/* If the screen size is 601px wide or more, set the font-size of <div> to 80px */
@media screen and (min-width: 601px) and (max-width: 991px) {
.citation {
    font-size: 2rem;
}
}

/* If the screen size is 600px wide or less, set the font-size of <div> to 30px */
@media screen and (max-width: 600px) {
.citation {
    font-size: 0.6rem;
}
}

.author {
    font-weight: bold;
    margin-top: -1rem;
    font-family: Helvetica, sans-serif;
}

@keyframes typing { from { width: 0; } }
@keyframes caret { 50% { border-color: transparent; } }

h1 {
    text-align: center;
    font-family: "Comfortaa Bold";
    text-transform: uppercase;
    width: 23ch;
    border-right: .09em solid #ecf4e9;
    overflow: hidden;
    font-size: 2.5rem;
    display: block;
    margin: auto;
    margin-top: 2rem;
    color: #ecf4e9;
    white-space: nowrap;
    animation: typing 4s steps(23, end), caret .4s step-end infinite;
}

/* If the screen size is 601px wide or more, set the font-size of <div> to 80px */
@media screen and (min-width: 601px) and (max-width: 991px) {
h1 {
    font-size: 2rem;
}
}

/* If the screen size is 600px wide or less, set the font-size of <div> to 30px */
@media screen and (max-width: 600px) {
h1 {
    font-size: 0.8rem;
}
}

.go {
    font-size: 1rem;
    margin-top: 3rem;
    font-family: Helvetica, sans-serif;
}

/* If the screen size is 601px wide or more, set the font-size of <div> to 80px */
@media screen and (min-width: 601px) and (max-width: 991px) {
.go {
    font-size: 2rem;
}
}

/* If the screen size is 600px wide or less, set the font-size of <div> to 30px */
@media screen and (max-width: 600px) {
.go {
    font-size: 0.8rem;
}
}

/* PARTICIPATE BUTTON EFFFECT START */

.participate-button{
 display: flex;
 justify-content: center;
 margin-top: 4rem;
}

.button {
    display: inline-block;
    width: 277px;
    height: 50px;
    font-size: 1em;
    font-weight: bold;
    line-height: 4rem;
    text-align: center;
    text-transform: uppercase;
    background-color: transparent;
    text-decoration:none;
    font-family: "Comfortaa Bold";
    font-weight:900;
    font-size:17px;
    letter-spacing: 0.045em;
}

.button svg {
    position: absolute;
    margin-left: -5rem;
}

.button svg rect {
    //stroke: #0d2578;
    stroke-width: 4;
    stroke-dasharray: 353, 0;
    stroke-dashoffset: 0;
    -webkit-transition: all 600ms ease;
    transition: all 600ms ease;
}

.button span{
  background: #0d2578;
  background: linear-gradient(to right, #0d2578 , #0d2638);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.button:hover svg rect {
    stroke-width: 4;
    stroke-dasharray: 196, 543;
    stroke-dashoffset: 437;
}

/* PARTICIPATE BUTTON EFFECT END */

/* GALLERY BUTTON EFFECT START */

.galery-button {
    --c: #ecf4e9;
    background-image: linear-gradient(to right, #ab3120 , #e53120);
    color: var(--c);
    font-size: 16px;
    border-radius: 30px;
    text-transform: uppercase;
    font-weight: bold;
    font-family: "Comfortaa Bold";
    letter-spacing: 0.1em;
    text-align: center;
    line-height: 2.5em;
    overflow: hidden;
    z-index: 1;
    transition: 0.5s;
    position: relative;
    left: 21%;
    height: 2.5rem;
    width: 20rem;
    margin-top: 4rem;
    margin-bottom: 2rem;
}

.galery-button span {
    position: absolute;
    width: 25%;
    height: 100%;
    background-color: var(--c);
    transform: translateY(150%);
    border-radius: 30px;
    left: calc((var(--n) - 1) * 25%);
    transition: 0.5s;
    transition-delay: calc((var(--n) - 1) * 0.1s);
    z-index: -1;
}

.galery-button:hover {
    color: #e53120;
}

.galery-button:hover span {
    transform: translateY(0) scale(2);
}

.galery-button span:nth-child(1) {
    --n: 1;
}

.galery-button span:nth-child(2) {
    --n: 2;
}

.galery-button span:nth-child(3) {
    --n: 3;
}

.galery-button span:nth-child(4) {
    --n: 4;
}

/* GALLERY BUTTON EFFECT END */

</style>