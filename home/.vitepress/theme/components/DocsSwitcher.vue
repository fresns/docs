<script>
import { computed, defineComponent } from 'vue'
import { useRoute } from 'vitepress'

export default defineComponent({
  setup() {
    const menuNames = {
      '/': '🚀 Get Started',
      '/oauth/': 'OAuth',
      '/cloud/': 'Cloud',
      '/open-source/': 'Open Source',
      '/clients/': 'Clients',

      '/zh-hans/': '🚀 开始',
      '/zh-hans/oauth/': 'OAuth 应用',
      '/zh-hans/cloud/': '云服务应用',
      '/zh-hans/open-source/': '开源扩展',
      '/zh-hans/clients/': '客户端',
    };

    const baseLinks = {
      '/': [
        { text: 'OAuth', href: '/oauth/' },
        { text: 'Cloud', href: '/cloud/' },
        { text: 'Open Source', href: '/open-source/' },
        { text: 'Clients', href: '/clients/' },
      ],
      '/zh-hans/': [
        { text: 'OAuth 应用', href: '/zh-hans/oauth/' },
        { text: '云服务应用', href: '/zh-hans/cloud/' },
        { text: '开源扩展', href: '/zh-hans/open-source/' },
        { text: '客户端', href: '/zh-hans/clients/' },
      ],
    };

    const route = useRoute();

    const currentLanguagePrefix = computed(() => {
      return route.path.startsWith('/zh-hans/') ? '/zh-hans/' : '/';
    });

    const currentPathPrefix = computed(() => {
      const pathWithoutLangPrefix = route.path.replace(currentLanguagePrefix.value, '');

      const firstSection = pathWithoutLangPrefix ? `${pathWithoutLangPrefix.split('/')[0]}/` : '/';

      return currentLanguagePrefix.value + firstSection;
    });

    const menuName = computed(() => menuNames[currentPathPrefix.value] || menuNames[currentLanguagePrefix.value]);
    const links = computed(() => baseLinks[currentLanguagePrefix.value] || baseLinks['/']);
    const pathPrefix = currentPathPrefix.value;

    return { menuName, links, pathPrefix };
  },

  data() {
    return { isMenuOpen: false };
  },

  methods: {
    toggleMenu(event) {
      event.preventDefault();
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
});
</script>

<template>
  <div class="FsFlyout" @mouseover="isMenuOpen = true" @mouseleave="isMenuOpen = false">
      <button type="button" class="button" aria-haspopup="true" :aria-expanded="isMenuOpen.toString()" @click="toggleMenu($event)">
        <span class="text">
          <span>{{ menuName }}</span>
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 24 24" class="text-icon">
            <path d="M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z"></path>
          </svg>
        </span>
      </button>
      <div class="menus">
        <div class="FsMenu">
          <div class="FsMenuLink" v-for="link in links" :key="link.href">
            <a class="link" :class="{ active: link.href == pathPrefix }" :href="link.href" target="_top">{{ link.text }}</a>
          </div>
        </div>
      </div>
  </div>
</template>

<style>
.FsFlyout {
  position: relative;
}
.FsFlyout:hover {
  color: var(--vp-c-brand-1);
  transition: color 0.25s;
}
.FsFlyout:hover .text {
  color: var(--vp-c-text-2);
}
.FsFlyout:hover .icon {
  fill: var(--vp-c-text-2);
}
.FsFlyout.active .text {
  color: var(--vp-c-brand-1);
}
.FsFlyout.active:hover .text {
  color: var(--vp-c-brand-2);
}

.FsFlyout:hover .menus, .FsFlyout .button[aria-expanded="true"] + .menus {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.FsFlyout .button[aria-expanded="false"] + .menus {
  opacity: 0;
  visibility: hidden;
  transform: translateY(0);
}
.FsFlyout .button {
  display: flex;
  align-items: center;
  padding: 0 12px;
  height: var(--vp-nav-height);
  color: var(--vp-c-text-1);
  transition: color 0.5s;
}
.FsFlyout .text {
  display: flex;
  align-items: center;
  line-height: var(--vp-nav-height);
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  transition: color 0.25s;
}
.FsFlyout .option-icon {
  margin-right: 0px;
  width: 16px;
  height: 16px;
  fill: currentColor;
}
.FsFlyout .text-icon {
  margin-left: 4px;
  width: 14px;
  height: 14px;
  fill: currentColor;
}
.FsFlyout .icon {
  width: 20px;
  height: 20px;
  fill: currentColor;
  transition: fill 0.25s;
}

.FsFlyout .menus {
  position: absolute;
  top: calc(var(--vp-nav-height) / 2 + 20px);
  right: 0;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.25s, visibility 0.25s, transform 0.25s;
}

.FsMenu {
  border-radius: 12px;
  padding: 12px;
  min-width: 128px;
  border: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg-elv);
  box-shadow: var(--vp-shadow-3);
  transition: background-color 0.5s;
  max-height: calc(100vh - var(--vp-nav-height));
  overflow-y: auto;
}
.FsMenu .group {
  margin: 0 -12px;
  padding: 0 12px 12px;
}
.FsMenu .group + .group {
  border-top: 1px solid var(--vp-c-divider);
  padding: 11px 12px 12px;
}
.FsMenu .group:last-child {
  padding-bottom: 0;
}
.FsMenu .group + .item {
  border-top: 1px solid var(--vp-c-divider);
  padding: 11px 16px 0;
}
.FsMenu .item {
  padding: 0 16px;
  white-space: nowrap;
}
.FsMenu .label {
  flex-grow: 1;
  line-height: 28px;
  font-size: 12px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  transition: color .5s;
}
.FsMenu .action {
  padding-left: 24px;
}

.FsMenuGroup + .FsMenuLink {
  margin: 12px -12px 0;
  border-top: 1px solid var(--vp-c-divider);
  padding: 12px 12px 0;
}
.FsMenuLink .link {
  display: block;
  border-radius: 6px;
  padding: 0 12px;
  line-height: 32px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  white-space: nowrap;
  transition: background-color 0.25s, color 0.25s;
}
.FsMenuLink .link:hover {
  color: var(--vp-c-brand-1);
  background-color: var(--vp-c-default-soft);
}
.FsMenuLink .link.active {
  color: var(--vp-c-brand-1);
}
</style>
