<template>
    <footer class="footer">
            <div class="footer-links">
                <ul>
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="/a-propos">About us</router-link></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
    </footer>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

.footer {
    background-image: url("../assets/images/vague_rouge_inversee_octodraw2.svg");
    background-repeat: no-repeat;
    background-size:cover;
    height: 40vh;
    width: 100vw;
    bottom: 0;
    display: inline-flex; /* or inline-flex */
    align-items: flex-end;
    position: relative;
    top: 0px;
    left: 0px;
}

.footer-links {
      color: #ecf4e9;
      margin-bottom: 1rem;
      width: 100%;
      list-style:none;

      a {
        font-weight: bold;
        color: #ecf4e9;
        text-decoration: none;
        flex-direction: row;
        display: block;
        margin: auto;
        margin-right: 2rem;
        font-size: 1rem;
        font-family: Helvetica, sans-serif;
      
        &.router-link{
           color: #ecf4e9; 
      }
      }
      ul {
          display: flex;
          justify-content: center;
      }
}

</style>