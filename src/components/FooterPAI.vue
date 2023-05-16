<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "FooterPAI"
})
</script>

<template>
  <section class="main">
      <section class="content">
          <section class="col-1">
              <article>
                  <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Ftenor.com%2Fview%2Fkononowicz-krzysztof-kononowicz-crying-cry-sad-gif-15296486&psig=AOvVaw351I3O7JsKOq1X7VlPq45J&ust=1684262662755000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMigs8D99_4CFQAAAAAdAAAAABAE" target="_blank">
                      <h3>Daj Napiwek</h3>
                  </a>
                  <p>
                      Sed fermentum sapien sapien, sit amet mattis augue ornare at.
                      Morbi aliquet bibendum ante in scelerisque. Nunc eu commodo nulla, eu dignissim quam.
                  </p>
              </article>
          </section>
          <section class="col-2">
              <article>
                  <h3>Sociale</h3>
                  <a target="_blank" href="https://www.youtube.com/@MlecznyCzlowiek">youtube</a>
                  <a target="_blank" href="https://www.facebook.com/mlecznykononowicz">facebook</a>
                  <a target="_blank" href="https://www.tiktok.com/@mleczne_shoty">tiktok</a>
              </article>
          </section>
      </section>
  </section>
</template>

<style scoped>
.main{
    min-height: calc(200px - 4rem);
    width: calc(100% - 4rem);
    background-color: indigo;
    display: flex;
    justify-content: center;
    padding: 2rem;
}

@media only screen and (max-width: 400px) {
    .main{
        padding: 1rem;
        width: calc(100% - 2rem);
    }

    article{
        width: 300px;
    }
}

a{
    color: #50b569;
    text-decoration: none;
    cursor: pointer;
}

.content{
    width: 1440px;
    color: #50b569;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
}

article{
    width: 350px;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

h3{
    margin: 0;
}
</style>