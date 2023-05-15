<script>

import ThemePAI from "@/components/ThemePAI.vue";
import PeoplePAI from "@/components/PeoplePAI.vue";
import router from "@/router";

export default {
    name: "LandingView",
    components: {
        PeoplePAI,
        ThemePAI,
    }
}

</script>

<template>
    <ThemePAI></ThemePAI>
    <PeoplePAI></PeoplePAI>
</template>

<style scoped>
</style>