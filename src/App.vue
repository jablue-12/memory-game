<template>
  <div id="app">

    <b-navbar toggleable="lg" type="dark" v-if="this.$route.name !== 'LoginPage'">
      <b-navbar-brand><router-link to="/" class="navbar-link">Scores</router-link></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item><router-link to="/numbers" class="navbar-link">Numbers</router-link> </b-nav-item>
          <b-nav-item><router-link to="/pictures" class="navbar-link">Pictures</router-link></b-nav-item>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>

    <router-view/>
  </div>
</template>

<style lang="scss">
.navbar{
  color: white;
  border: 1px solid #333;
}

.navbar-link{
  color: #333;
}


</style>
