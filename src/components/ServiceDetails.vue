<template>
<h2 style="text-align:center">Product Card</h2>
<div class="card">
  <img v-bind:src="serviceitem.picture" alt="Denim Jeans" style="width:100%">
  <h1>{{serviceitem.description}}</h1>
  <p class="price">N{{serviceitem.price}}</p>
  <p>It take {{serviceitem.preparationTime}} to prepare</p>
  <input
          class="form-control"
          id="email"
          placeholder="Enter e-mail for notification"
          v-model="email"
          name="email"
        />
  <p><button @click="payWithPaystack">Order now</button></p>
</div>
</template>

<script>
import DataService from "../services/DataService";
export default {
  name: "add-tutorial",
  data() {
    return {
        id: null,
        serviceitem: null, 
        email: null,
    };
  },
  mounted() {
      let paystackjs = document.createElement('script')
      paystackjs.setAttribute('src', 'https://js.paystack.co/v1/inline.js')
      document.head.appendChild(paystackjs)
    },
  created() {
       this.retrieveServiceItem();
    },
  methods: {
    retrieveServiceItem() {
      DataService.getServiceItem(`${this.$route.params.id}`)
        .then(response => {
          this.serviceitem = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);  
        });
    },
    payWithPaystack(e) {
      
       console.log(e)
       // eslint-disable-next-line
    let handler = PaystackPop.setup({
    key: 'pk_test_3e3454e5e74080dc46572be6bf9c42096a3f0082', // Replace with your public key
    email: this.email?this.email:'stolaksoftech@yahoo.com',//document.getElementById("email-address").value,
    amount: this.serviceitem.price*100,//document.getElementById("amount").value * 100,
    ref: ''+Math.floor((Math.random() * 1000000000) + 3), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
     label: this.serviceitem.description,
    onClose: function(){
      //alert('Window closed.');
      //VerifyTansaction()
    },
    callback: function(response){
      let message = 'Payment complete! Reference: ' + response.reference + 'Message  sent to you email';
      alert(message);
       window.location.href = "/"
      //VerifyTansaction()
    }
  });
  handler.openIframe();
    },
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
