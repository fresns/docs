import { h } from 'vue'
import Theme from 'vitepress/theme'
import DocsSwitcher from './components/DocsSwitcher.vue'

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      'nav-bar-title-after': () => h(DocsSwitcher),
    })
  },
}
