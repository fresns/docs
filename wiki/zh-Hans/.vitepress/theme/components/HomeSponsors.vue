<script setup lang="ts">
import { VPHomeSponsors } from 'vitepress/theme'
import { useSponsor } from '../composables/sponsor'

const { data } = useSponsor()
</script>

<template>
  <VPHomeSponsors
    v-if="data"
    message="Fresns 是免费且开源的，由出色的赞助商使之成为可能。"
    action-text="成为 Fresns 的赞助者"
    action-link="/community/sponsor.html"
    :data="data"
  />
</template>
