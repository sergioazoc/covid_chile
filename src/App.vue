<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Chile</router-link> |
      <router-link to="/regiones">Regiones</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
body{
  margin: 0;
}

#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color:royalblue;
}

.highligth{
  color: royalblue;
}

.card{
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border: 2px solid royalblue;
  border-radius: 15px;
  margin: 0 15px;
}

.card-header{
  background-color: royalblue;
  padding: 5px 15px;
  border-radius: 13px 13px 0 0;
  color: #fff;
}

.card-body{
  font-size: 18px;
}
</style>
