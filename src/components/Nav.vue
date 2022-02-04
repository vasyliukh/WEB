<template>
  <nav class="navbar navbar-expand navbar-light fixed-top" style="background-color: #97D700;">
    <div class="container">
      <a href="/" class="navbar-brand">ГОЛОВНА</a>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/login" class="nav-link">ВХІД</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/register" class="nav-link">РЕЄСТРАЦІЯ</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav"
}
</script>

<style>
.navbar-light{
  background-color: #ffffff;
  box-shadow: 0px 10px 55px #2c3e50;
}

.navbar-brand{

  font-size: 25px;

}
.navbar-nav{
  font-family:HeliosCondLight,sans-serif;
  letter-spacing: 4px;
  font-size: 25px;
}
</style>