<template>
  <div class="component-container">
    <h1 class="component-heading1">Heading Level 1</h1>
    <h2 class="component-heading2">Heading Level 2</h2>
    <h3 class="component-heading3">Heading Level 3</h3>
    <h5 class="component-heading5">Heading Level 5</h5>
    <h6 class="component-heading6">Heading Level 6</h6>
    <div class="component-container1">
      <h1 class="component-heading11">Heading Level 1</h1>
      <p class="component-textblock">Paragraph</p>
    </div>
    <a href="#" target="_blank" class="component-link">Link</a>
  </div>
</template>

<script>
export default {
  name: 'AppComponent',
  props: {
    headingle: {
      type: String,
      default: 'Heading Level 4',
    },
    headingle1: {
      type: String,
      default: 'Heading Level 1',
    },
  },
}
</script>

<style scoped>
.component-container {
  width: 500px;
  height: 500px;
  display: block;
  overflow-x: visible;
  overflow-y: auto;
  font-family: Open Sans;
  background-color: #fcfcfc;
}
.component-heading1 {
  display: block;
  font-size: 2em;
  margin-top: 0.67em;
  margin-bottom: 0.67em;
}
.component-heading2 {
  margin: 0;
  font-size: 1.5em;
  margin-top: 0.67em;
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 0.67em;
}
.component-heading3 {
  font-size: 1.17em;
  margin-top: 1em;
  margin-bottom: 1em;
}
.component-heading5 {
  color: #ff0000;
  font-size: .83em;
  margin-top: 1.67em;
  font-family: 'Source Sans Pro';
  margin-bottom: 1.67em;
  text-decoration: none;
}
.component-heading6 {
  font-size: .75em;
  margin-top: 2.33em;
  font-family: 'Montserrat';
  margin-bottom: 2.33em;
}
.component-container1 {
  width: 448px;
  height: auto;
  box-sizing: border-box;
  overflow-x: auto;
  overflow-y: auto;
  border-radius: 120px;
  background-size: cover;
  background-color: rgba(189, 64, 64, 0.2);
  background-image: url('https://images.unsplash.com/photo-1573042160186-9d5eec5f4f53?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjkxMzIxfQ');
  border-top-left-radius: 20px;
  border-top-right-radius: 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 0;
}
.component-heading11 {
  font-size: 2em;
  margin-top: 0.67em;
  margin-bottom: 0.67em;
}
.component-textblock {
  margin-top: 1em;
  margin-bottom: 1em;
}
.component-link {
  color: #000;
  cursor: pointer;
  text-decoration: underline;
}
</style>
