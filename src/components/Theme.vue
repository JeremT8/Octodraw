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
                    <p class="citation">Il faut viser la lune, parce qu’au moins, si vous échouez, vous finirez dans les étoiles. Oscar Wilde</p>
                        <h1>Thème: Motivation</h1>
                    <p class="go">A vos crayons, prêt ? Dessinez !!!</p>
                <button class="register-button">Galerie croquis</button>
            </div>
            <div class="planches">
                <h2>Planches</h2>
                    <p>Date-time</p>
                    <p class="citation">Celui qui veut réussir trouve un moyen. Celui qui veut rien faire trouve une excuse. Proverbe</p>
                        <h1>Thème: Motivation</h1>
                    <p class="go">A vos crayons, prêt ? Dessinez !!!</p>
                <button class="register-button">Galerie planches</button>
            </div>
        </div>  
        <button class="register-button">Participer</button>    
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
     justify-content: space-between;
     padding: 1rem;
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


.img-container {
    display: flex;
    justify-content: center;
}

h2 {
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    font-size: 2rem;
}

p {
    text-align: center;
    margin-bottom: 1rem;
}

.citation {
    font-style: italic;
    margin-bottom: 1rem;
}

h1 {
    text-align: center;
    text-transform: uppercase;
    font-size: 4rem;
}

.go {
    font-size: 2rem;
    margin-top: 2rem;
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
    height: 4rem;
}
button:focus {outline:0;}
</style>