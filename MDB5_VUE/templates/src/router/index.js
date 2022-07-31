import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import SeoDashboard from '../views/SeoDashboard.vue'
import ECommerce1 from '../views/ECommerce1.vue'
import ECommerce2 from '../views/ECommerce2.vue'
import Ads from '../views/Ads.vue'
import Order from '../views/Order.vue'
import Traffic from '../views/Traffic.vue'
import ChatApp from '../views/ChatApp.vue'
import MailboxApp from '../views/MailboxApp.vue'
import Invoice from '../views/Invoice.vue'
import UserProfile from '../views/UserProfile.vue'
import UserManagement from '../views/UserManagement.vue'
import LoginRegister from '../views/LoginRegister.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import ChangePassword from '../views/ChangePassword.vue'
import NotFound from '../views/NotFound.vue'

const routes = [{
    path: '/',
    name: 'SeoDashboard',
    component: SeoDashboard
  },
  {
    path: '/e-commerce-1',
    name: 'ECommerce1',
    component: ECommerce1
  },
  {
    path: '/e-commerce-2',
    name: 'ECommerce2',
    component: ECommerce2
  },
  {
    path: '/ads',
    name: 'Ads',
    component: Ads
  },
  {
    path: '/order',
    name: 'Order',
    component: Order
  },
  {
    path: '/traffic',
    name: 'Traffic',
    component: Traffic
  },
  {
    path: '/invoice',
    name: 'Invoice',
    component: Invoice
  },
  {
    path: '/chat-app',
    name: 'ChatApp',
    component: ChatApp
  },
  {
    path: '/mailbox-app',
    name: 'MailboxApp',
    component: MailboxApp
  },
  {
    path: '/user-profile',
    name: 'UserProfile',
    component: UserProfile
  },
  {
    path: '/user-management',
    name: 'UserManagement',
    component: UserManagement
  },
  {
    path: '/login-register',
    name: 'LoginRegister',
    component: LoginRegister
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword
  },
  {
    path: '/change-password',
    name: 'ChangePassword',
    component: ChangePassword
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router