<template>
<div>
<div class="tentacules">
    <img src="../assets/images/tentacules_rouge_octodraw.svg" style="width: 20%; display: block; margin: auto;">
</div>
    <div class='caroussel_diapo'>
<input checked id="carou_un" name="rotation" type="radio">
<label for="carou_un"></label>
<input id="carou_deux" name="rotation" type="radio">
<label for="carou_deux"></label>
<input id="carou_trois" name="rotation" type="radio">
<label for="carou_trois"></label>
<input id="carou_quatre" name="rotation" type="radio">
<label for="carou_quatre"></label>
<input id="carou_cinq" name="rotation" type="radio">
<label for="carou_cinq"></label>
<input id="carou_six" name="rotation" type="radio">
<label for="carou_six"></label>
<input id="carou_sept" name="rotation" type="radio">
<label for="carou_sept"></label>
<input id="carou_huit" name="rotation" type="radio">
<label for="carou_huit"></label>
<div class="contenu_carou">
<div class="caroussel">
<img src="../assets/images/carousel_carte_rouge_octodraw.svg" alt>
<img src="../assets/images/carousel_carte_bleue_octodraw.svg" alt>
<img src="../assets/images/carousel_carte_rouge_octodraw.svg" alt>
<img src="../assets/images/carousel_carte_bleue_octodraw.svg" alt>
<img src="../assets/images/carousel_carte_rouge_octodraw.svg" alt>
<img src="../assets/images/carousel_carte_bleue_octodraw.svg" alt>
<img src="../assets/images/carousel_carte_rouge_octodraw.svg" alt>
<img src="../assets/images/carousel_carte_bleue_octodraw.svg" alt>
</div>
</div>	
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
/*****carrousel 3d avec navigation*****/
*{box-sizing: border-box;}
img{max-width:100%;}
.caroussel_diapo input{position:absolute;left:-9999px;}
.caroussel_diapo{
text-align:center;
margin: auto;
display: flex;
justify-content: center;
margin-left: 8%;
}
.contenu_carou {
width:500px;
height:332px;
perspective:4000px;
display: flex;
justify-content: center;
margin-left: -21.5%;
}
.caroussel{
transform-style:preserve-3d;
position:relative;
width:500px;
height:332px;
transition:1s;
}
.caroussel img {
position:absolute;
top:0;left:0;
outline:1px solid transparent;
backface-visibility:hidden;
transition:1s;
border: 0.5rem solid #ecf4e9;
border-radius: 30px;
}
.caroussel img{filter:blur(3px);opacity:.8;}	
.caroussel img:nth-child(1){transform:translate3d(0,0,540px) scale(.8);}
.caroussel img:nth-child(2){transform:rotateY(45deg) translateZ(540px) scale(.8);}
.caroussel img:nth-child(3){transform:rotateY(90deg) translateZ(540px) scale(.8);}
.caroussel img:nth-child(4){transform:rotateY(135deg) translateZ(540px) scale(.8);}
.caroussel img:nth-child(5){transform:rotateY(180deg) translateZ(540px) scale(.8);}
.caroussel img:nth-child(6){transform:rotateY(225deg) translateZ(540px) scale(.8);}
.caroussel img:nth-child(7){transform:rotateY(270deg) translateZ(540px) scale(.8);}
.caroussel img:nth-child(8){transform:rotateY(315deg) translateZ(540px) scale(.8);}
.caroussel_diapo input[type=radio] + label {
cursor:pointer;
display:inline-block;
width:20px;
border-radius:50%;
height:20px;
margin-top: 25rem;
background-color: #e53120;
margin-right: 0.5rem;
}
.caroussel_diapo input[type=radio]:checked + label{background-color: #0d2578;}
.caroussel_diapo input[name="rotation"]:checked ~ .contenu_carou .caroussel img:nth-child(n){
	filter:drop-shadow(12px 12px 7px hsla(0,0%,0%,.5));
    border-bottom: 0.5rem solid #e53120;
    border-top: 0.5rem solid #e53120;
	}	
/*gauche*/
.caroussel_diapo #carou_un:checked ~ .contenu_carou .caroussel{transform:translateZ(-540px);}
.caroussel_diapo #carou_deux:checked ~ .contenu_carou .caroussel{transform:translateZ(-540px) rotateY(-45deg);}
.caroussel_diapo #carou_trois:checked ~ .contenu_carou .caroussel{transform:translateZ(-540px) rotateY(-90deg);}
.caroussel_diapo #carou_quatre:checked ~ .contenu_carou .caroussel{transform:translateZ(-540px) rotateY(-135deg);}
.caroussel_diapo #carou_cinq:checked ~ .contenu_carou .caroussel{transform:translateZ(-540px) rotateY(-180deg);}
.caroussel_diapo #carou_six:checked ~ .contenu_carou .caroussel{transform:translateZ(-540px) rotateY(-225deg);}
.caroussel_diapo #carou_sept:checked ~ .contenu_carou .caroussel{transform:translateZ(-540px) rotateY(-270deg);}
.caroussel_diapo #carou_huit:checked ~ .contenu_carou .caroussel{transform:translateZ(-540px) rotateY(-315deg);}
/*droite*/
.caroussel_diapo #carou_un:checked ~ .contenu_carou .caroussel img:nth-child(1){transform:translateZ(540px) scale(1);opacity:1;}
.caroussel_diapo #carou_deux:checked ~ .contenu_carou .caroussel img:nth-child(2){transform:rotateY(45deg) translateZ(540px) scale(1);opacity:1;}
.caroussel_diapo #carou_trois:checked ~ .contenu_carou .caroussel img:nth-child(3){transform:rotateY(90deg) translateZ(540px) scale(1);opacity:1;}
.caroussel_diapo #carou_quatre:checked ~ .contenu_carou .caroussel img:nth-child(4){transform:rotateY(135deg) translateZ(540px) scale(1);opacity:1;}
.caroussel_diapo #carou_cinq:checked ~ .contenu_carou .caroussel img:nth-child(5){transform:rotateY(180deg) translateZ(540px) scale(1);opacity:1;}
.caroussel_diapo #carou_six:checked ~ .contenu_carou .caroussel img:nth-child(6){transform:rotateY(225deg) translateZ(540px) scale(1);opacity:1;}
.caroussel_diapo #carou_sept:checked ~ .contenu_carou .caroussel img:nth-child(7){transform:rotateY(270deg) translateZ(540px) scale(1);opacity:1;}
.caroussel_diapo #carou_huit:checked ~ .contenu_carou .caroussel img:nth-child(8){transform:rotateY(315deg) translateZ(540px) scale(1);opacity:1;}
</style>