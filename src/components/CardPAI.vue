<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "CardPAI",
    props: {
        name: {
            type: String,
            required: true,
        },
        thumbnail: {
            type: Object,
            required: true,
        },
        title: {
            type: Array,
            required: true,
        }

    }
})
</script>

<template>
  <section class="wraper">
    <section class="card">
        <div class="img-wrap">
          <img class="thumbnail" :src="'src/assets/img/'+thumbnail.src" :alt="thumbnail.alt">
        </div>
        <h3>{{name}}</h3>
        <div class="title-wrap">
            <template v-for="(singleTitle, index) in title">
                <p>{{singleTitle}}</p><p v-if="index !== title.length - 1">|</p>
            </template>
        </div>
    </section>
  </section>
</template>

<style scoped>
  .wraper{
      border-radius: 25px;
      border: 2px solid indigo;
      width: 300px;
      height: 400px;

  }

  .card{
      width: calc(300px - 2rem);
      height: calc(400px - 2rem);
      border-radius: 20px;
      padding: 1rem;
      background-color: indigo;
  }

  .img-wrap{
      width: calc(200px - 1rem);
      height: calc(200px - 1rem);
      overflow: hidden;
      border: 2px solid #50b569;
      border-radius: 15px;
      padding: 4px;
  }

  .thumbnail{
      object-fit: scale-down;
      border-radius: 10px;
      width: calc(200px - 1rem - 4px);
      border: 2px solid #50b569;
  }

  h3{
      color: #50b569;
      font-size: 2rem;
      margin: 1rem 0 1rem 0;
  }

  .title-wrap{
      display: flex;
      flex-wrap: wrap;
  }

  p{
      margin: 0 0.5rem 0 0;
      color: #50b569;
  }
</style>