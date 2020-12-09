<template>
    <div class="card-avatar">
        <div>
        <b-card title="VANINA" img-src="https://upload.wikimedia.org/wikipedia/commons/6/69/Octopus_pallidus_1.jpeg" img-alt="Image" img-top tag="article" style="max-width: 20rem;" class="mb-2">
                <b-card-text>
                Product Owner & Scrum Master
                </b-card-text>
        </b-card>
        </div>
    <div>
        <b-card title="WENDY" img-src="https://upload.wikimedia.org/wikipedia/commons/7/73/CaliforniaTwoSpotOctopus1.jpg" img-alt="Image" img-top tag="article" style="max-width: 20rem;" class="mb-2">
                <b-card-text>
                Lead Dev Front
                </b-card-text>
        </b-card>
    </div>
    <div>
        <b-card title="JEREMY" img-src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Octopus_cyanea_Maldives.JPG/1280px-Octopus_cyanea_Maldives.JPG" img-alt="Image" img-top tag="article" style="max-width: 20rem;" class="mb-2">
                <b-card-text>
                Git Master
                </b-card-text>
        </b-card>
    </div>
    <div>
        <b-card title="BENOIT" img-src="https://upload.wikimedia.org/wikipedia/commons/3/33/Octopus3.jpg" img-alt="Image" img-top tag="article" style="max-width: 20rem;" class="mb-2">
                <b-card-text>
                Lead Dev Back
                </b-card-text>
        </b-card>
    </div>






<div class="column">
  <div>
    <figure><img src="https://picsum.photos/300/200?image=244" /></figure>
    <span>Hover</span>
  </div>
  <div>
    <figure><img src="https://picsum.photos/300/200?image=1024" /></figure>
    <span>Hover</span>
  </div>
  <div>
    <figure><img src="https://picsum.photos/300/200?image=611" /></figure>
    <span>Hover</span>
  </div>
</div>


    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    img {
        margin-left: 0;
        width: 20rem;
        height: 20rem;
        	-webkit-transform: scale(1);
	transform: scale(1);
	-webkit-transition: .3s ease-in-out;
	transition: .3s ease-in-out;
    }

img:hover {
	-webkit-transform: scale(1.3);
	transform: scale(1.3);
}

    .card-avatar {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center; 
        margin-top: 2rem;
        font-weight: bold;
        font-size: 1rem;
    }

    .mb-2 {
        text-align: center;
        margin-right: 1rem;
    }
    















    .column {
	margin: 15px 15px 0;
	padding: 0;
}
.column:last-child {
	padding-bottom: 60px;
}
.column div {
	position: relative;
	float: left;
	width: 300px;
	height: 200px;
	margin: 0 0 0 25px;
	padding: 0;
}
.column div:first-child {
	margin-left: 0;
}
.column div span {
	position: absolute;
	bottom: -20px;
	left: 0;
	z-index: -1;
	display: block;
	width: 300px;
	margin: 0;
	padding: 0;
	color: #444;
	font-size: 18px;
	text-decoration: none;
	text-align: center;
	opacity: 0;
}
figure {
	width: 300px;
	height: 200px;
	margin: 0;
	padding: 0;
	background: #fff;
	overflow: hidden;
}
figure:hover+span {
	bottom: -36px;
	opacity: 1;
}
</style>