import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../components/HelloWorld.vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Registration from '../views/Registration.vue'
// import ForgetPassword from '../views/ForgetPassword.vue'
import Freelancers from '../views/Freelancer/AllFreelancers.vue'
import FreelancerEdit from '../views/Freelancer/EditFreelancer.vue'
import FreelancerView from '../views/Freelancer/ViewFreelancer.vue'
import Clients from '../views/Client/Clients.vue'
// import ClientEdit from '../views/ClientManagement/Clients.vue'
import ClientEdit from '../views/Client/EditClient.vue'
import ClientView from '../views/Client/ViewClient.vue'
import Transaction from '../views/Transaction/Transactions.vue'

import Admin from '../views/admin/Admin.vue'
import AdminEdit from '../views/admin/EditAdmin.vue'
import AdminCreate from '../views/admin/CreateAdmin.vue'
import AdminView from '../views/admin/ViewAdmin.vue'

import Articles from '../views/articles/Articles.vue'

import Reports from '../views/reports/Reports.vue'
Vue.use(Router)

const routes=[
    {
        path: '/registration',
        component: Registration,
        meta: {
            hideNavbar: true,
           }
    },
    {
        path: '/',
        component: Login,
        meta: {
            hideNavbar: true,
           }
    },
    {
        path: '/freelancers',
        component: Freelancers
    },
    {
        path: '/freelancer/edit',
        component: FreelancerEdit
    },
    {
        path: '/freelancer/view',
        component: FreelancerView
    },
    {
        path: '/clients',
        component: Clients
    },
    {
        path: '/client/edit',
        component: ClientEdit
    },
    {
        path: '/client/view',
        component: ClientView
    },
    {
        path: '/transaction',
        component: Transaction
    },
    {
        path: '/admin',
        component: Admin
    },
    {
        path: '/admin/view',
        component: AdminView
    },
    {
        path: '/admin/edit',
        component: AdminEdit
    },
    {
        path: '/admin/create',
        component: AdminCreate
    },

    {
        path: '/articles',
        component: Articles
    },
    {
        path: '/reports',
        component: Reports
    },

    

]

const router = new VueRouter({
    mode:'history',
    base: process.env.BASE_URL,
    routes
})

export default router
