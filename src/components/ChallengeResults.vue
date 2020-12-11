<template>
    <div class="theme-container">
        <div class="img-container">
         <img class="img-illustrateur" src="../assets/images/illustrateur_octodraw.svg">
         <img class="img-amateur" src="../assets/images/amateur_octodraw.svg">
        </div>
        <div class="theme-card">
            <div class="croquis">
                <h2>Croquis</h2>
                    <h1>Trouver un nom</h1>
                    <p class="citation">. Oscar Wilde</p>
                    <img class="img-sketch" src="https://www.ecoreseau.fr/wp-content/uploads/2016/03/ER28-le-chat-optimiste-pessimiste-551x420.jpg">
                    <h3>Créateur</h3>
                     <div class="notes">
                        <div><b-icon-pencil-fill font-scale="2" variant="danger"></div>
                        <div><b-icon-pencil-fill font-scale="2" variant="danger"></div>
                        <div><b-icon-pencil-fill font-scale="2" variant="danger"></div>
                        <div><b-icon-pencil-fill font-scale="2" variant="danger"></div>
                        <div> <b-icon-pencil font-scale="2"></div>
                        <div> <b-icon-pencil font-scale="2"></div>
                        <div> <b-icon-pencil font-scale="2"></div>
                        <div><b-icon-pencil font-scale="2"></div>
                    </div>
                <button class="register-button">Profil Créateur</button>
            </div>
            <div class="planches">
                <h2>Planches</h2>
                <h1>Iceberg Of Success</h1>
                    <p class="citation">“La peinture est la face visible de l’iceberg de ma pensée.” Salvador Dali</p>
                    <img class="img-board" src="https://www.roliedema.com/images/510xNxsuccess-iceberg.jpg.pagespeed.ic.X1-eSITKPA.jpg">
                    <h3>Créateur</h3>
                    <div class="notes">
                        <div><b-icon-pencil-fill font-scale="2" variant="primary"></div>
                        <div><b-icon-pencil-fill font-scale="2" variant="primary"></div>
                        <div><b-icon-pencil-fill font-scale="2" variant="primary"></div>
                        <div><b-icon-pencil-fill font-scale="2" variant="primary"></div>
                        <div><b-icon-pencil font-scale="2"></div>
                        <div><b-icon-pencil font-scale="2"></div>
                        <div><b-icon-pencil font-scale="2"></div>
                        <div><b-icon-pencil font-scale="2"></div>
                    </div>
                <button class="register-button">Profil Créateur</button>
            </div>
        </div>  
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.notes {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

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
    margin-right: 0;
}

.img-illustrateur {
    width: 20%;
    margin-bottom: -4.3rem;
}

.img-amateur {
    width: 20%;
    margin-bottom: -4.3rem;
}

.img-sketch {
    width: 40rem;
    height: 40rem;
    object-fit: cover; 
    transition:transform 0.25s ease;
}

.img-sketch:hover {
    -webkit-transform:scale(1.5);
    transform:scale(1.5);
    width: 40rem;
    height: 40rem;
}

.img-board {
    width: 40rem;
    height: 40rem;
    object-fit: cover; 
    transition:transform 0.25s ease;
}

.img-board:hover {
    -webkit-transform:scale(1.5);
    transform:scale(1.5);
    width: 40rem;
    height: 40rem;
}

.img-container {
    display: flex;
    justify-content: center;
}

h3 {
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    font-size: 1.5rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
}

h2 {
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    font-size: 1.5rem;
    margin-top: 2rem;
}

.citation {
    text-align: center;
    font-style: italic;
    font-size: 1.5rem;
    display: block;
    margin-bottom: 1rem;
    margin: auto;
}

h1 {
    text-align: center;
    text-transform: uppercase;
    font-size: 2rem;
    margin-bottom: 2rem;
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