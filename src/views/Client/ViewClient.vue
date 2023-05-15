<template>
         
  <div class="container-fluid h-80 bg-light text-dark div-to-align">
  <div class="row justify-content-center ">
    <h1 class="text-center">User Details</h1>    
  </div>
  <hr/>
  <div class="row justify-content-center align-items-center h-80">
    <div class="col-md-5 avatar">
        <img src="../../assets/images/avatar.jpg" class="circular--square"/>
  </div>
    <div class="col-md-6">
    <div class="user-details form-page">
      <div class="user-info">
        <div class="form-group">
          <label for="name">Name</label>
          <p id="name">{{ userDetails.name }}</p>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <p id="email">{{ userDetails.email }}</p>
        </div>
        <div class="form-group">
          <label for="phone">Phone</label>
          <p id="phone">{{ userDetails.phone }}</p>
        </div>
        <!-- Add more user details as needed -->
      </div>
    </div> 
  
  </div>
  <div class="col-md-1 icons" >
    <!-- <font-awesome-icon :icon="['fas', 'pen-to-square']" /> -->
    <router-link to="/client/edit" class="button">
    <span><font-awesome-icon  icon="pen-to-square" style="color: black;"/></span>
    </router-link>
  

  </div>
    
</div></div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        userDetails: {
          name: 'John Doe',
          email: 'john.doe@example.com',
          phone: '123-456-7890'
          // Add more user details here as needed
        }
      };
    }
  };
  </script>
  
  <style scoped>
  /* .user-details {
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
    border-radius: 4px;
  } */
  
  .user-info {
    margin-top: 1rem;
  }
  
  label {
    font-weight: bold;
  }
  
  p {
    margin: 0;
  }
  </style>
  