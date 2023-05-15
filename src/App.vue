<script>
import NavPAI from "@/components/NavPAI.vue";

export default {
    name: "App",
    components: {
        NavPAI,
    },
}
</script>

<template>
    <NavPAI></NavPAI>
    <router-view></router-view>
    <footer>
        <section class="content">a</section>
    </footer>
</template>

<style scoped>
    footer{
        margin-top: 4rem;
        height: calc(200px - 4rem);
        width: calc(100% - 4rem);
        background-color: indigo;
        display: flex;
        justify-content: center;
        padding: 2rem;
    }

    .content{
        width: 1440px;
        color: #50b569;
    }

</style>
