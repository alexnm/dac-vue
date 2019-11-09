<template>
  <div class="page2-container"><app-component></app-component></div>
</template>

<script>
import AppComponent from '../components/component'

export default {
  name: 'Page2',
  components: {
    AppComponent,
  },
  metaInfo: {
    title: 'dac',
  },
}
</script>

<style scoped>
.page2-container {
  width: 100%;
  display: block;
  font-size: 16px;
  min-height: 100%;
  font-family: 'Open Sans';
  background-color: #fcfcfc;
}
</style>
