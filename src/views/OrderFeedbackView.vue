<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "OrderFeedbackView"
})
</script>

<template>
  <section class="main">
      <section class="content">
          <h1>Dziękujemy Za Przekazanie Informacji</h1>
          <a target="_blank" href="https://www.google.com/url?sa=i&url=https%3A%2F%2Ftenor.com%2Fview%2Fkononowicz-krzysztof-kononowicz-crying-cry-sad-gif-15296486&psig=AOvVaw351I3O7JsKOq1X7VlPq45J&ust=1684262662755000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMigs8D99_4CFQAAAAAdAAAAABAE">
              <button>Wspomóż Nas</button>
          </a>

      </section>
  </section>
</template>

<style scoped>
  .main{
      background-color: indigo;
      width: 100%;
      height: calc(100% - 301px);
      display: flex;
      justify-content: center;
  }

  .content{
      width: 1440px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
  }

  h1{
      margin: 0;
      font-size: 6rem;
      color: #50b569;
      padding: 2rem 2rem 6rem 2rem;
  }

  button{
      font-size: 1.5rem;
      padding: 0.5rem 4rem 0.5rem 4rem;
      border-radius: 25px;
      border: 2px solid #50b569;
      background-color: transparent;
      font-weight: bold;
      color: #50b569;
      transition: ease-in 0.1s;

  }

  button:hover{
      background-color: #50b569;
      color: indigo;
  }

  @media only screen and (max-width: 600px) {
      h1{
          font-size: 5rem;
      }
  }

  @media only screen and (max-width: 530px) {
      h1{
          font-size: 4rem;
          padding: 1rem 1rem 6rem 1rem;
      }
  }

  @media only screen and (max-width: 430px) {
      h1{
          font-size: 3rem;

      }
  }
</style>