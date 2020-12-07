<template>
    <footer class="footer">
        <div class="container">            
                <div>
                    <nav class="footer-container-links">
                        <h3 class="footer-links">QUICK LINKS</h3>
                        <ul>
                            <li><router-link to="/">Home</router-link></li>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#"><h3>CONTACT US</h3></a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

.footer{
    background-image: url("../assets/images/vague_rouge_inversee_octodraw2.svg");
    background-repeat: no-repeat;
    background-size:cover;
    height: 40vh;
    width: 100vw;
    position: absolute;
    bottom: 0;

    .footer-container-links {
        list-style:none;

    }
}


.container {
  display: flex; /* or inline-flex */
  justify-content: flex-end;
}

</style>