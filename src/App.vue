<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="#" class="navbar-brand">Online Service</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
           <a @click="newlink('/')" class="nav-link">Dashboard</a>
        </li>
        <li class="nav-item">
          <a @click="newlink('/transactions')" class="nav-link">Recenct Transactions</a>
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
    
  newlink(link) {
        window.location.href = link
    },  
    

  }
,
  name: "app",
};
</script>
