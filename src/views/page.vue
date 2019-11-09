<template>
  <div class="page-container">
    <app-margin1></app-margin1>
    <router-link to="/page2" class="page-navlink">Go there</router-link>
  </div>
</template>

<script>
import AppMargin1 from '../components/margin1'

export default {
  name: 'Page',
  components: {
    AppMargin1,
  },
  metaInfo: {
    title: 'dac',
  },
}
</script>

<style scoped>
.page-container {
  width: 100%;
  height: 100%;
  display: block;
  padding: 10px;
  position: static;
  overflow-x: auto;
  overflow-y: auto;
  font-family: Open Sans;
  background-color: #fcfcfc;
}
.page-navlink {
  color: #000;
  cursor: pointer;
  text-decoration: underline;
}
</style>
