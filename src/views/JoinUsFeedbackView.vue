<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "JoinUsFeedbackView"
})
</script>

<template>
    <section class="main">
        <section class="content">
            <h1>Dzięki, wkrótce się odezwiemy.</h1>
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