<template>

  <table class="table table-hover">
            <thead>
            <tr>
                <th>ID</th>
                <th>description</th>
                <th>price</th>
                <th>preparationTime</th>
                <th>picture</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="(post, i) in serviceslist" :key="post.id">
                    <td>{{ i+1 }}</td>
                    <td>{{ post.description }}</td>
                    <td>{{ post.price }}</td>
                    <td>{{ post.preparationTime }}</td>
                    <td></td>
                    <td><router-link :to="{name: 'details', params: { id: post.id }}" class="btn btn-primary">Edit</router-link></td>
                    
                  
                </tr>
            </tbody>
        </table>
</template>

<script>
import DataService from "../services/DataService";

export default {
  name: "add-tutorial",
  data() {
    return {
      id: null,
      serviceslist: null, 
      cities: null,
      providers: null,
      categories: null,
    };
  },
  created() {
       this.retrieveItems();
       this.retrieveCity();
       this.retrieveProvider();
       this.retrieveCategory();
    },
  methods: {
    retrieveItems() {
      DataService.getAllService()
        .then(response => {
          this.serviceslist = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e); 
        });
    },
    retrieveCity() {
      DataService.getCity()
        .then(response => {
          this.cities = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e); 
        });
    },
    retrieveProvider() {
      DataService.getProvider()
        .then(response => {
          this.providers = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e); 
        });
    },
    retrieveCategory() {
      DataService.getCategory()
        .then(response => {
          this.categories = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e); 
        });
    },
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;
}

.price {
  color: grey;
  font-size: 22px;
}

.card button {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

.card button:hover {
  opacity: 0.7;
}
</style>
