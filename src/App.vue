<template>
  <div class="h-screen m-auto">
    <router-view></router-view>
  </div>
</template>


<script>
  export default{

  }
</script>


<style>
@tailwind base;
@tailwind components;
@tailwind utilities;


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color:white;
  opacity: 1;
}
</style>
