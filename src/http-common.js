import axios from "axios";
//import VueAxios from 'vue-axios';
// import axios from 'axios';

export default axios.create({
  baseURL: "http://localhost:8089/api",
  headers: {
    "Content-type": "application/json",
    "header":"Access-Control-Allow-Origin"
  }
});
