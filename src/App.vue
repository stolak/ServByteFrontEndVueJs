<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">Online Service</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/transactions" class="nav-link">Recenct Transactions</router-link>
        </li>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
//import DataService from "./services/DataService";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: null,
      cities: null,
      providers: null,
      categories: null,
    };
  },
  created() {
       
    },
  
  methods: {
    
    

  }
,
  name: "app",
};
</script>
