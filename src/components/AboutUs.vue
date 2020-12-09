<template>
    <div class="column">
        <div>
            <figure><img class= "vanina" /></figure>
            <span>VANINA<br>Product Owner & Scrum Master</span>
        </div>
        <div>
            <figure><img class= "wendy" /></figure>
            <span>WENDY<br>Lead Dev Front</span>
        </div>
        <div>
            <figure><img class= "jeremy" /></figure>
            <span>JEREMY<br>Git Master</span>
        </div>
        <div>
            <figure><img class = "benoit" /></figure>
            <span>BENOIT<br>Lead Dev Back</span>
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
    max-width: 20rem;
}

.vanina {
    background-image: url("https://picsum.photos/300/200?image=244");
}

.vanina:hover {
    background-image: url("https://picsum.photos/300/200?image=1024");
}

.wendy {
    background-image: url("https://picsum.photos/300/200?image=244");
}

.wendy:hover {
    background-image: url("https://picsum.photos/300/200?image=1024");
}

.jeremy {
    background-image: url("https://picsum.photos/300/200?image=244");
}

.jeremy:hover {
    background-image: url("https://picsum.photos/300/200?image=1024");
}

.benoit {
    background-image: url("https://picsum.photos/300/200?image=244");
}

.benoit:hover {
    background-image: url("https://picsum.photos/300/200?image=1024");
}

.column {
	padding: 0;
    display: flex;
    justify-content: center;
}

.column:last-child {
	padding-bottom: 60px;
}

.column div {
    position: relative;
	float: center;
	padding: 0;
    margin-top: 2rem;
    margin-right: 1rem;
}

.column div:first-child {
	margin-left: 0;
}

.column div span {
	position: absolute;
	bottom: -20px;
	z-index: -1;
	display: block;
	width: 20rem;
	padding: 0;
	color: #444;
	font-size: 18px;
	text-decoration: none;
	text-align: center;
	opacity: 0;
}

figure {
	padding: 0;
	background: #fff;
	overflow: hidden;
}

figure:hover+span {
	bottom: -60px;
	opacity: 1;
}

</style>