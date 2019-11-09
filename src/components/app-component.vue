<template>
  <div class="app-component-container">
    <img
      src="https://images.unsplash.com/photo-1572945688831-4f9f148906e6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjkxMzIxfQ"
      class="app-component-image"
    />
    <img
      src="https://images.unsplash.com/photo-1572904445274-6ddee9318dc9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjkxMzIxfQ"
      class="app-component-image1"
    />
    <a href="#" target="_blank" class="app-component-link">Link</a>
    <p class="app-component-textblock">Here's a very very long paragraph</p>
    <router-link to="/" class="app-component-navlink">Page</router-link>
  </div>
</template>

<script>
export default {
  name: 'AppComponent',
  props: {},
}
</script>

<style scoped>
.app-component-container {
  width: 500px;
  height: 500px;
  display: block;
  font-size: 16px;
  font-family: 'Open Sans';
  background-color: #fcfcfc;
}
.app-component-image {
  width: 200px;
}
.app-component-image1 {
  width: 200px;
}
.app-component-link {
  color: #000;
  cursor: pointer;
  text-decoration: underline;
}
.app-component-textblock {
  margin-top: 1em;
  margin-bottom: 1em;
}
.app-component-navlink {
  color: #000;
  cursor: pointer;
  text-decoration: underline;
}
</style>
