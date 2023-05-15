
<template>
    <div class="container-fluid h-80 bg-light text-dark div-to-align-table ">
  
  <div class="row justify-content-center align-items-center h-80">
    <div class="container mt-5  table-page">
      <h1>Articles</h1>
      <div class="row mt-4">
        <div class="col-md-12">
          <div class="form-group">
            <input type="text" class="form-control w-50" v-model="searchInput" placeholder="Search">
          </div>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th @click="sortTable('id')">ID<span v-if="sortField === 'id' && sortDirection === 'asc'"> &#x25B2;</span><span v-if="sortField === 'id' && sortDirection === 'desc'"> &#x25BC;</span></th>
                <th @click="sortTable('name')">Title<span v-if="sortField === 'name' && sortDirection === 'asc'"> &#x25B2;</span><span v-if="sortField === 'name' && sortDirection === 'desc'"> &#x25BC;</span></th>
                <th @click="sortTable('email')">Date Published<span v-if="sortField === 'email' && sortDirection === 'asc'"> &#x25B2;</span><span v-if="sortField === 'email' && sortDirection === 'desc'"> &#x25BC;</span></th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, index) in displayedRows" :key="index">
                <td>{{ row.id }}</td>
                <td>{{ row.name }}</td>
                <td>{{ row.email }}</td>
                <td>
                  <!-- <button type="button" class="btn btn-primary btn-sm" @click="editRow(row)">Edit</button>&nbsp; -->
              
                <router-link to="/client/edit" class="button"  @click="editRow(row)"> <span><font-awesome-icon  icon="download" style="color: black; height: 20px; width: 20px; padding-right: 15px;"/></span> </router-link>
                 <!-- <router-link to="/client/view" class="button" @click="editRow(row)"><span><font-awesome-icon  icon="eye" style="color: black; height: 20px; width: 20px;"/></span></router-link> -->
  
                  <!-- <button type="button" class="btn btn-info btn-sm" @click="deleteRow(row)">Delete</button> -->
                </td>
              </tr>
            </tbody>
          </table>
          <nav aria-label="Pagination">
            <ul class="pagination justify-content-center">
              <li class="page-item" :class="{ disabled: currentPage === 1 }">
                <button class="page-link" @click="changePage(currentPage - 1)">Previous</button>
              </li>
              <li class="page-item" v-for="page in totalPages" :key="page" :class="{ active: currentPage === page }">
                <button class="page-link" @click="changePage(page)">{{ page }}</button>
              </li>
              <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                <button class="page-link" @click="changePage(currentPage + 1)">Next</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    </div>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        // rows: [], // Array of rows to display in the table
        rows: [],  // Array of rows to display in the table
        searchInput: '', // Input for search filter
        sortField: '', // Field to sort by
        sortDirection: 'asc', // Sort direction (asc or desc)
        currentPage: 1, // Current page number
        pageSize: 10, // Number of rows to show per page
      };
    },
  
    computed: {
      displayedRows() {
        // Apply search filter
        const filteredRows = this.rows.filter(row =>
          row.name.toLowerCase().includes(this.searchInput.toLowerCase()) ||
          row.email.toLowerCase().includes(this.searchInput.toLowerCase())
        );
  
        // Sort rows
        if (this.sortField) {
          filteredRows.sort((a, b) => {
            const fieldA = a[this.sortField].toLowerCase();
            const fieldB = b[this.sortField].toLowerCase();
            if (fieldA < fieldB) {
              return this.sortDirection === 'asc' ? -1 : 1;
            }
            if (fieldA > fieldB) {
              return this.sortDirection === 'asc' ? 1 : -1;
            }
            return 0;
          });
        }
  
        // Paginate rows
        const startIndex = (this.currentPage - 1) * this.pageSize;
        return filteredRows.slice(startIndex, startIndex + this.pageSize);
      },
      totalPages() {
        return Math.ceil(this.rows.length / this.pageSize);
      },
    },
    created() {
    // Fetch data from API on component creation
    this.fetchData();
  },
    methods: {
        fetchData() {
      // Call API to fetch data
      // Replace this with your actual API call
    //   axios.get('https://api.example.com/data')
    //   .then(response => {
    //     this.rows = response.data;
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
  
      // Dummy data for demonstration purposes
      this.rows = [
      { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
        { id: 3, name: 'Michael Brown', email: 'michael.brown@example.com' },
        { id: 4, name: 'Sarah Johnson', email: 'sarah.johnson@example.com' },
        { id: 5, name: 'David Lee', email: 'david.lee@example.com' },
        { id: 6, name: 'Olivia Taylor', email: 'olivia.taylor@example.com' },
        { id: 7, name: 'Christopher Davis', email: 'christopher.davis@example.com' },
        { id: 8, name: 'Sophia Anderson', email: 'sophia.anderson@example.com' },
        { id: 9, name: 'Daniel Wilson', email: 'daniel.wilson@example.com' },
        { id: 10, name: 'Grace Brown', email: 'grace.brown@example.com' },
      ];
    },
      sortTable(field) {
        if (this.sortField === field) {
          this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
        } else {
          this.sortField = field;
          this.sortDirection = 'asc';
        }
      },
      changePage(page) {
        if (page >= 1 && page <= this.totalPages) {
          this.currentPage = page;
        }
      },
      editRow(row) {
        // Logic for editing a row
        console.log('Editing row:', row);
      },
      deleteRow(row) {
        // Logic for deleting a row
        console.log('Deleting row:', row);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add any custom styles for your table here */
  </style>