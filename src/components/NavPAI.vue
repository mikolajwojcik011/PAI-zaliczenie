<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "NavPAI"
})
</script>

<template>
    <header>
      <nav>
          <div class="left">
              <router-link class="link logo" :to="{name: 'landing'}">BIO</router-link>
          </div>
          <div class="right">
              <router-link :to="{name: 'order'}"><button>Złóż Donos</button></router-link>
          </div>
      </nav>
    </header>
</template>

<style scoped>
  header{
      display: flex;
      justify-content: center;
      background-color: indigo;
  }

  nav{
      display: flex;
      align-items: center;
      width: calc(1440px - 0.5rem);
      padding: 1rem 2rem 1rem 2rem;
      margin: 0.5rem 0 0.5rem 0;
  }

  .right{
      margin-right: 0;
      margin-left: auto;
  }

  .left{
      margin-left: 0;
      margin-right: auto;
  }

  button{
      padding: 0.5rem 2rem 0.5rem 2rem;
      font-weight: bold;
      color: #50b569;
      border: 2px solid #50b569;
      font-size: 1rem;
      background-color: transparent;
      transition: ease-in 0.1s;
      border-radius: 20px;
  }

  button:hover{
      background-color: #50b569;
      color: indigo;
  }

  .link{
      text-decoration: none;
      font-size: 1rem;
      color: #50b569;
      transition: ease-in-out 0.2s;
      font-weight: bolder;

  }

  .logo{
      margin-right: 4rem;
      font-size: 1.5rem;
      font-weight: bold;
  }

  @media only screen and (max-width: 530px) {
      .logo{
          margin-right: 2rem;
      }
  }

  @media only screen and (max-width: 475px) {
      button{
          padding: 0.5rem 1rem 0.5rem 1rem;
      }

      .logo{
          margin-right: 1rem;
          font-size: 1.5rem;

      }
  }

  @media only screen and (max-width: 425px) {
      button{
          padding: 0.5rem 1rem 0.5rem 1rem;
          font-size: 0.75rem;
      }

      .link{
          font-size: 0.75rem;

      }

      .logo{
          margin-right: 1rem;
          font-size: 1rem;
      }
  }
</style>