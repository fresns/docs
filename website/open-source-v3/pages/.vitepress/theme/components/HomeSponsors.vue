<script setup lang="ts">
import { VPHomeSponsors } from 'vitepress/theme'
import { useSponsor } from '../composables/sponsor'

const { data } = useSponsor()
</script>

<template>
  <VPHomeSponsors
    v-if="data"
    message="Fresns is free and open source, made possible by wonderful sponsors."
    action-text="Sponsor Fresns"
    action-link="/community/sponsor.html"
    :data="data"
  />
</template>
