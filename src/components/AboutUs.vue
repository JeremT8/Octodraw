<template>
    <div class="row">
            <div class="octoteam">
                <div class="vanina">
                </div>
                <div class="team-content">
                    <h3 class="name">VANINA</h3>
                    <span class="role">Product Owner & Scrum Master</span>
                    <ul class="social">
                        <li><a href="#"><i class="fab fa-github"></i></a></li>
                        <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                        <li><a href="#"><i class="fab fa-google-plus"></i></a></li>
                    </ul>
                </div>
            </div>
              <div class="octoteam">
                <div class="wendy">
                </div>
                <div class="team-content">
                    <h3 class="name">WENDY</h3>
                    <span class="role">Lead Dev Front</span>
                    <ul class="social">
                        <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                        <li><a href="#"><i class="fab fa-github"></i></a></li>
                        <li><a href="#"><i class="fab fa-google-plus"></i></a></li>
                    </ul>
                </div>
            </div>
              <div class="octoteam">
                <div class="jeremy">
                </div>
                <div class="team-content">
                    <h3 class="name">JEREMY</h3>
                    <span class="role">Git Master</span>
                    <ul class="social">
                        <li><a href="#"><i class="fab fa-github"></i></a></li>
                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                    </ul>
                </div>
            </div>
              <div class="octoteam">
                <div class="benoit">
                </div>
                <div class="team-content">
                    <h3 class="name">BENOIT</h3>
                    <span class="role">Lead Dev Back</span>
                    <ul class="social">
                        <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                        <li><a href="#"><i class="fab fa-github"></i></a></li>
                        <li><a href="#"><i class="fab fa-google-plus"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
</template>
<script>
    export default {
    }
</script>
<style lang="scss" scoped>
.row {
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  margin-bottom: 8rem;
}
/* If the screen size is 601px wide or more, set the font-size of <div> to 80px */
@media screen and (min-width: 601px) and (max-width: 991px) {
.row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-bottom: 5rem;
}
}
/* If the screen size is 600px wide or less, set the font-size of <div> to 30px */
@media screen and (max-width: 600px) {
.row {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 3rem;
}
}
.octoteam{
    text-align: center;
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    transition: all 0.3s ease 0s;
    margin-right: 2rem;
}
/* If the screen size is 601px wide or more, set the font-size of <div> to 80px */
@media screen and (min-width: 601px) and (max-width: 991px) {
.octoteam {
    font-size: 2.5rem;
    margin-right: 0;
    margin-bottom: 3rem;
}
}
/* If the screen size is 600px wide or less, set the font-size of <div> to 30px */
@media screen and (max-width: 600px) {
.octoteam {
    margin-bottom: 2rem;
    margin-right: 0;
}
}
.vanina{
    background-image: url('https://picsum.photos/300/200?image=244');
    width: 300px;
    height: 200px;
    border-bottom: 7px solid #e53120;
}
.vanina:hover{
    background-image: url('https://picsum.photos/300/200?image=1024');
}
.octoteam .vanina {
    // background: linear-gradient(to right, #ab3120 , #e53120); 
    transition: all 0.3s ease 0s;
}
.octoteam:hover .vanina {
    padding: 10px;
    border-radius: 10px;
    transform: scale(0.5) translateY(-30%);
    border: 10px solid #ab3120;
}
.wendy{
    background-image: url('https://picsum.photos/300/200?image=1024');
    width: 300px;
    height: 200px;
    border-bottom: 7px solid #e53120;
}
.wendy:hover{
    background-image: url('https://picsum.photos/300/200?image=244');
}
.octoteam .wendy {
    // background: linear-gradient(to right, #ab3120 , #e53120); 
    transition: all 0.3s ease 0s;
}
.octoteam:hover .wendy {
    padding: 10px;
    border-radius: 10px;
    transform: scale(0.5) translateY(-30%);
    border: 10px solid #ab3120;
}
.jeremy{
    background-image: url('https://picsum.photos/300/200?image=244');
    width: 300px;
    height: 200px;
    border-bottom: 7px solid #e53120;
}
.jeremy:hover{
    background-image: url('https://picsum.photos/300/200?image=1024');
}
.octoteam .jeremy {
    // background: linear-gradient(to right, #ab3120 , #e53120); 
    transition: all 0.3s ease 0s;
}
.octoteam:hover .jeremy {
    padding: 10px;
    border-radius: 10px;
    transform: scale(0.5) translateY(-30%);
    border: 10px solid #ab3120;
}
.benoit{
    background-image: url('https://picsum.photos/300/200?image=1024');
    width: 300px;
    height: 200px;
    border-bottom: 7px solid #e53120;
}
.benoit:hover{
    background-image: url('https://picsum.photos/300/200?image=244');
}
.octoteam .benoit {
    // background: linear-gradient(to right, #ab3120 , #e53120); 
    transition: all 0.3s ease 0s;
}
.octoteam:hover .benoit {
    padding: 10px;
    border-radius: 10px;
    transform: scale(0.5) translateY(-30%);
    border: 10px solid #ab3120;
}
.octoteam .team-content{
    width: 100%;
    padding-top: 7px;
    background: linear-gradient(to right, #ab3120 , #e53120);
    position: absolute;
    bottom: -30%;
    right: 0;
    opacity: 0;
    transition: all 0.3s ease 0s;
}
.octoteam:hover .team-content{
    opacity: 1;
    bottom: -10px;
}
.octoteam .name{
    font-size: 22px;
    color: #ecf4e9;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 0 0 5px 0;
}
.octoteam .role{
    display: block;
    font-size: 15px;
    font-weight: 600;
    color: #ecf4e9;
    font-style: italic;
    text-transform: capitalize;
    margin: 0 0 5px 0;
}
.octoteam .social{
    padding: 0;
    margin: 0;
    list-style: none;
    transition: all 0.35s ease 0s;
}
.octoteam .social li{
    display: inline-block;
    margin: 0 5px 0 0;
}
.octoteam .social li a{
    display: block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    border-radius: 15px 0 15px 0;
    font-size: 20px;
    color: #ecf4e9;
    overflow: hidden;
    z-index: 1;
    position: relative;
    transition: all 0.35s ease 0s;
}
.octoteam .social li a:before{
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: -100%;
    z-index: -1;
    transition: all 0.3s ease-in-out 0s;
}
.octoteam .social li a:hover:before{ left: 0; }
@media only screen and (max-width: 990px){
    .our-team{ margin-bottom: 30px; }
}
</style>