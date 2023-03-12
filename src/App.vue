<template>
  <div class="h-screen">
    <Navbar />
    <router-view></router-view>
  </div>
</template>


<script>
  import Navbar from './components/Navbar'
  export default{
    components : { Navbar},
    setup(){

    }
  }
</script>


<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

*{
  font-family: 'Poppins', sans-serif;
}
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
