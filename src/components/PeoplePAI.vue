<script>
import {defineComponent} from 'vue'
import CardPAI from "@/components/CardPAI.vue";
import {Icon} from "@iconify/vue";

export default defineComponent({
    name: "PeoplePAI",
    components: {
        Icon,
        CardPAI
    },
    data() {
        return {
            people: [
                {
                    name: "Ksiek",
                    thumbnail: {
                        src: "konon.png",
                        alt: "Szef w swetrze a'la  AR2D2"
                    },
                    title: ["CEO", "Gospodarz", "Nibemben", "Niżarłak"]
                },
                {
                    name: "Major",
                    thumbnail: {
                        src: "major.png",
                        alt: "Major uśmiechający się w samochodzie"
                    },
                    title: ["Executive Assistant", "Nitrołak", "Ptasibrzuch"]
                },
                {
                    name: "Jacek",
                    thumbnail: {
                        src: "aron.png",
                        alt: "Pies Jacka zdyszany po spacerze"
                    },
                    title: ["HR", "Jacek od psa Arona", "Lateks"]
                },
                {
                    name: "Toni Peperoni",
                    thumbnail: {
                        src: "toni.png",
                        alt: "Tomi Peperoni pokazuje efekty pracy"
                    },
                    title: ["Intern"]
                }
            ]
        }
    }
})
</script>

<template>
  <section class="main">
      <h2>Poznaj Nas</h2>
      <a href="#cards"> <Icon class="icon" icon="material-symbols:arrow-circle-down-outline"></Icon></a>
    <section id="cards" class="cards">
        <CardPAI
                v-for="person in people"
                :name="person.name"
                :thumbnail="person.thumbnail"
                :title="person.title"
        ></CardPAI>
    </section>
      <router-link :to="{name: 'join-us'}"><button>Dołącz Do Nas</button></router-link>
  </section>
</template>

<style scoped>

  .icon{
      font-size: 4rem;
      color: indigo;
      margin-bottom: 4rem;
      transition: 0.2s ease-out;
  }

  .icon:hover{
      transform: translateY(-1rem);
  }

  .main{
      width: 100%;
      background-color: #50b569;
      display: flex;
      align-items: center;
      flex-direction: column;
  }

  .cards{
      display: grid;
      gap: 3rem;
      grid-template-columns: repeat(4, auto);
      margin-bottom: 2rem;
  }

  h2{
      color: indigo;
      font-size: 3rem;
      margin-top: 4rem;
  }

  button{
      margin-top: 2rem;
      font-size: 1.5rem;
      padding: 0.5rem 2rem 0.5rem 2rem;
      color: indigo;
      border: 2px solid indigo;
      border-radius: 20px;
      background-color: transparent;
      font-weight: bold;
      transition: 0.1s ease-in;
  }

  button:hover{
      background-color: indigo;
      color: #50b569;
  }

  @media only screen and (max-width: 1440px) {
      .cards{
          grid-template-columns: repeat(2, auto);
      }
  }

  @media only screen and (max-width: 730px) {
      h2{
          font-size: 2rem;
          padding: 2rem;
      }

      .cards{
          grid-template-columns: repeat(1, auto);
      }
  }
</style>