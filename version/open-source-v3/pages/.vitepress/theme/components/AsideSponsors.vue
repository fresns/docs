<script setup lang="ts">
import { computed } from 'vue'
import { VPDocAsideSponsors } from 'vitepress/theme'
import { useRoute } from 'vitepress'
import { useSponsor } from '../composables/sponsor'

const { data } = useSponsor()

const sponsors = computed(() => {
  return (
    data?.value.map((sponsor) => {
      return {
        size: sponsor.size === 'big' ? 'mini' : 'xmini',
        items: sponsor.items
      }
    }) ?? []
  )
})

const link = {
  '/': '/community/sponsor.html',
  'zh-Hans': '/zh-Hans/community/sponsor.html',
}

const linkInfo = {
  '/': {
    'heading': 'Sponsor Fresns',
    'extra-info-top': 'Support for development',
    'extra-info-bottom': 'Become a sponsor',
  },
  'zh-Hans': {
    'heading': '赞助 Fresns 发展',
    'extra-info-top': '助力生态可持续发展',
    'extra-info-bottom': '成为赞助者',
  },
}

const route = useRoute();
const currentLanguagePrefix = computed(() => {
  return route.path.startsWith('/zh-Hans/') ? 'zh-Hans' : '/';
});

console.log(currentLanguagePrefix);

const customLink = computed(() => link[currentLanguagePrefix.value] || link['/'])
const customInfo = computed(() => linkInfo[currentLanguagePrefix.value] || linkInfo['/'])
</script>

<template>
  <a class="fresnsAside" :href="customLink">
    <img width="22" height="22" src="https://assets.fresns.com/images/icons/fresns.png" />
    <span>
      <p class="extra-info">{{ customInfo['extra-info-top'] }}</p>
      <p class="heading">{{ customInfo['heading'] }}</p>
      <p class="extra-info">{{ customInfo['extra-info-bottom'] }}</p>
    </span>
  </a>
  <VPDocAsideSponsors v-if="data" :data="sponsors" />
</template>

<style>
.fresnsAside {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 14px;
  padding-left: 2.5rem;
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  position: relative;
  font-size: 0.9rem;
  font-weight: 700;
  line-height: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  background-color: var(--vp-c-bg-alt);
  border: 2px solid var(--vp-c-bg-alt);
  transition: border-color 0.5s;
}
.fresnsAside:hover {
  border: 2px solid var(--vp-c-brand-light);
}
.fresnsAside img {
  position: absolute;
  left: 1.8rem;
  transition: transform 0.5s;
  transform: scale(1.25);
}
.fresnsAside:hover img {
  transform: scale(1.75);
}
.fresnsAside .heading {
  background-image: linear-gradient(
    120deg,
    #b047ff 16%,
    var(--vp-c-brand-lighter),
    var(--vp-c-brand-lighter)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.fresnsAside .extra-info {
  color: var(--vp-c-text-1);
  opacity: 0;
  font-size: 0.7rem;
  padding-left: 0.1rem;
  transition: opacity 0.5s;
}
.fresnsAside:hover .extra-info {
  opacity: 0.9;
}
</style>
