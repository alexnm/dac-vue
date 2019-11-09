<template>
  <div class="margin-container">
    <h1 class="margin-heading1">Test Diffing</h1>
    <button class="margin-button">Button</button>
    <button disabled="true" class="margin-button1">Does this really work?</button>
  </div>
</template>

<script>
export default {
  name: 'Margin',
  props: {},
}
</script>

<style scoped>
.margin-container {
  height: 500px;
  display: block;
  font-size: 16px;
  font-family: 'Open Sans';
  background-color: #1100d3;
}
.margin-heading1 {
  color: #ffffff;
  font-size: 2em;
  margin-top: 0.67em;
  margin-bottom: 0.67em;
}
.margin-button {
  color: #000;
  font-size: 13px;
  padding-top: 5px;
  border-color: #0089be;
  border-style: solid;
  border-width: 1px;
  padding-left: 10px;
  border-radius: 4px;
  padding-right: 10px;
  padding-bottom: 5px;
  background-color: #fff;
}
.margin-button1 {
  color: #000;
  font-size: 13px;
  padding-top: 5px;
  border-color: #0089be;
  border-style: solid;
  border-width: 1px;
  padding-left: 10px;
  border-radius: 4px;
  padding-right: 10px;
  padding-bottom: 5px;
  background-color: #fff;
}
</style>
