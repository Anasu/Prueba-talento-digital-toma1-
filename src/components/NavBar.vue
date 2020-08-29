<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" class="px-3">
      <b-navbar-brand>Company</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/ordenes">Ordenes</b-nav-item>
          <b-nav-item to="/inventario">Inventario</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/profile">Profile</b-nav-item>
          <b-nav-item to="/login">Log Out</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>


</style>