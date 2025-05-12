<template>
  <footer class="vp-footer">
    <div v-if="$theme.footer.message" class="footer-message">
      {{ $theme.footer.message }}
    </div>
    <div v-if="$theme.footer.copyright" class="footer-copyright">
      {{ $theme.footer.copyright }}
    </div>
  </footer>
</template>

<script setup>
import { useData } from 'vitepress'
const { theme } = useData()
</script>

<style scoped>
.vp-footer {
  text-align: center;
  padding: 1rem 0;
  font-size: 0.9rem;
  color: #666;
  margin-top: 2rem;
}
</style>
