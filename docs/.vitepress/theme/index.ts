// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import Footer from './components/MyFooter.vue'

export default {
  extends: DefaultTheme,
  Layout() {
    return {
      render(h) {
        return h(DefaultTheme.Layout, () => ({
          // 默认插槽
          default: () => DefaultTheme.Layout.render.call(this, h),
          // 覆盖 footer 插槽
          footer: () => h(Footer)
        }))
      }
    }
  }
}
