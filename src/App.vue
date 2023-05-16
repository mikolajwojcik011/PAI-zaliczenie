<script>
import NavPAI from "@/components/NavPAI.vue";
import FooterPAI from "@/components/FooterPAI.vue";

export default {
    name: "App",
    components: {
        FooterPAI,
        NavPAI,
    },
}
</script>

<template>
    <NavPAI></NavPAI>
    <router-view></router-view>
    <FooterPAI class="footer"></FooterPAI>
</template>

<style scoped>

</style>
