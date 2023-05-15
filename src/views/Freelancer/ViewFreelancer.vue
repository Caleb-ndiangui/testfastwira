<template>

    <div class="user-details form-page">
      <h1>User Details</h1>
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

  .user-details {
    max-width: 600px;
    margin: 0 auto;
    padding: 1rem;
    background-color: #f5f5f5;
    border-radius: 4px;
    display: inline-block;
  }
  
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
  