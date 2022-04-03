<template>
  <div id="app">

    <b-navbar toggleable="lg" type="dark" variant="secondary">
      <b-navbar-brand><router-link to="/">Scores</router-link></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item><router-link to="/numbers">Numbers</router-link> </b-nav-item>
          <b-nav-item><router-link to="/pictures">Pictures</router-link></b-nav-item>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>

    <router-view/>
  </div>
</template>

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
