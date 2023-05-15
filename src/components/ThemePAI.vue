<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "ThemePAI"
})
</script>

<template>
  <section class="main">
      <section class="content">
          <h1>Biuro Interwencji Obywatelskich</h1>
          <router-link to="/order"><button>Zamów Donos</button></router-link>
      </section>
  </section>
</template>

<style scoped>

button{
    font-size: 1.5rem;
    padding: 0.5rem 2rem 0.5rem 2rem;
    border-radius: 25px;
    font-weight: bolder;
    background: transparent;
    border: 2px solid #50b569;
    transition: 0.1s ease-in;
    color: #50b569;
}

button:hover{
    background-color: #50b569;
    color: indigo;
}

.main{
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: indigo;
}

.content{
    width: calc(1440px - 2rem);
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

h1{
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: repeating-linear-gradient(-45deg, transparent, transparent 4px, currentcolor 1px, currentcolor 12px);
    font-size: 6rem;
    color: #50b569;
    text-align: center;
}

@media only screen and (max-width: 730px) {
    h1 {
        font-size: 5rem;
    }
}

@media only screen and (max-width: 630px) {
    h1 {
        font-size: 4rem;
    }
}

@media only screen and (max-width: 450px) {
    h1 {
        background-image: repeating-linear-gradient(-45deg, transparent, transparent 4px, currentcolor 1px, currentcolor 10px);
        font-size: 3rem;
    }
}
</style>