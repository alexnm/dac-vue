<template>
  <div class="component1-container">
    <div class="component1-container1"></div>
    <div class="component1-container2"></div>
    <div class="component1-container3"></div>
  </div>
</template>

<script>
export default {
  name: 'Component1',
  props: {},
}
</script>

<style scoped>
.component1-container {
  width: 500px;
  height: 500px;
  display: grid;
  grid-gap: 10px;
  overflow: auto;
  font-size: 16px;
  align-items: stretch;
  font-family: 'Open Sans';
  align-content: stretch;
  justify-items: stretch;
  justify-content: stretch;
  background-color: #fcfcfc;
  grid-template-rows: 1;
  grid-template-columns: 3;
}
.component1-container1 {
  width: 200px;
  height: 100px;
  overflow: auto;
  box-sizing: border-box;
  background-color: rgba(20, 20, 20, 0.2);
}
.component1-container2 {
  width: 200px;
  height: 100px;
  overflow: auto;
  box-sizing: border-box;
  background-color: rgba(20, 20, 20, 0.2);
}
.component1-container3 {
  width: 200px;
  height: 100px;
  overflow: auto;
  box-sizing: border-box;
  background-color: rgba(20, 20, 20, 0.2);
}
</style>
