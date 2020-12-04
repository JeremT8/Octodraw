<template>
    <footer class="footer">
        <div class="container"> 
            <div class="logo-container">
                <img class="logo" src="/assets/images/kraken.svg">
            </div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ducimus molestiae harum tenetur nemo voluptates, aperiam dolores enim cum iusto dicta consequatur optio ut omnis quam beatae aliquam quae quos voluptas nam quasi unde vero architecto! Corporis ducimus nisi quo.</div>
                
                <div>
                    <nav>
                        <h3>QUICK LINKS</h3>
                        <router-link to="/">Home</router-link>
                        <a href="#">About us</a>
                        <a href="#">Services</a>
                        <a href="#">Blog</a>
                        <a href="#">Contact</a>
                    </nav>
                </div>
                <div>
                    <nav>
                        <h3>RESSOURCES</h3>
                        <a href="#">Support</a>
                        <a href="#">Private Policy</a>
                        <a href="#">Terms & Condition</a>
                        <a href="#">Sitemap</a>
                    </nav>
                </div>
                <div>
                    <nav>
                        <h3>CONTACT US</h3>
                        <a href="#">Support</a>
                        <a href="#">Private Policy</a>
                        <a href="#">Terms & Condition</a>
                        <a href="#">Sitemap</a>
                    </nav>
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
    background-image: url("../assets/images/vague_rouge_inversee_octodraw.svg");
    background-repeat: no-repeat;
    background-size:100% 100%;
    height: 60vh;
    width: 100vw;
    display: flex;
}

nav {
      align-items: center;
      justify-content: space-around;
      padding: 1rem;
      flex-direction: column;
      color: #ecf4e9;
      
  
      a {
        font-weight: bold;
        color: #ecf4e9;
        

        &.router-link{
           color: #ecf4e9; 
        }
      }
}
.container {
  display: flex; /* or inline-flex */
  justify-content: flex-end;
}
.logo {
    width: 70px;
    margin-top: 10px;
    margin-left: 10px;
}
</style>

