<template>
    <div class="container-fluid h-80 bg-light text-dark div-to-align">
  <div class="row justify-content-center ">
    <h1 class="text-center">Edit Admin</h1>    
  </div>
  <hr/>
  <div class="row justify-content-center align-items-center h-80">
    <div class="form-page edit-form">
      <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="formData.name" :class="{ 'is-invalid': formErrors.name }">
        <div class="invalid-feedback" v-if="formErrors.name">{{ formErrors.name }}</div>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="formData.email" :class="{ 'is-invalid': formErrors.email }">
        <div class="invalid-feedback" v-if="formErrors.email">{{ formErrors.email }}</div>
      </div>
      <div class="form-group">
        <label for="phone">Phone</label>
        <input type="text" id="phone" v-model="formData.phone" :class="{ 'is-invalid': formErrors.phone }">
        <div class="invalid-feedback" v-if="formErrors.phone">{{ formErrors.phone }}</div>
      </div>
      <div class="col-md-12 text-center">
      <button type="submit" :disabled="!isFormValid" class="btn btn-primary btn-lg ">Edit Admin</button>
    </div>
    </form>
    </div>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          name: '',
          email: '',
          phone: ''
        },
        formErrors: {
          name: '',
          email: '',
          phone: ''
        }
      };
    },
    methods: {
      submitForm() {
        // Perform form validation
        if (!this.formData.name) {
          this.formErrors.name = 'Name is required.';
        } else {
          this.formErrors.name = '';
        }
        if (!this.formData.email) {
          this.formErrors.email = 'Email is required.';
        } else if (!this.validateEmail(this.formData.email)) {
          this.formErrors.email = 'Invalid email format.';
        } else {
          this.formErrors.email = '';
        }
        if (!this.formData.phone) {
          this.formErrors.phone = 'Phone is required.';
        } else {
          this.formErrors.phone = '';
        }
  
        // If form is valid, submit data
        if (this.isFormValid) {
          // Perform submit action, e.g. API call
          console.log('Form data:', this.formData);
        }
      },
      validateEmail(email) {
        // Simple email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      }
    },
    computed: {
      isFormValid() {
        // Check if all form errors are empty
        return !Object.values(this.formErrors).some(error => error !== '');
      }
    }
  };
  </script>
  
  <style scoped>
  .form-group {
    margin-bottom: 1rem;
  }
  
  .invalid-feedback {
    color: red;
  }
  .edit-form {
  max-width: 600px;
  /* max-width: 80%; */
  margin: 0 auto;
  padding: 2rem;
  /* background-color: #f5f5f5; */
  border-radius: 4px;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.invalid-feedback {
  color: red;
  margin-top: 0.25rem; /* Adjust this value as needed */
}

.btn {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
  </style>
  