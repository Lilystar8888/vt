import 'mdb-vue-file-upload/css/mdb-vue-file-upload.min.css'
import 'mdb-vue-ui-kit/css/mdb.min.css'
import 'mdb-vue-table-editor/css/mdb-vue-table-editor.min.css'


import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')