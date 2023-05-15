import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/main.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { faPhone ,faDownload, faPenToSquare,faEye,faAngleDoubleRight, faHome, faUsers, faQuestion, faMoneyBillTransfer, faTasks, faComment, faFile} from "@fortawesome/free-solid-svg-icons";


library.add(faPhone,faDownload,faPenToSquare,faEye,faAngleDoubleRight,faHome,faUsers,faQuestion,faMoneyBillTransfer,faTasks,faComment,faFile);

Vue.config.productionTip = false
Vue.component("font-awesome-icon", FontAwesomeIcon)

new Vue({
    router,
    BootstrapVue,
    render: h => h(App)
  }).$mount('#app')
