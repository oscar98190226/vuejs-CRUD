import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/views/Login'
import SignupPage from '@/views/Signup'
import HomePage from '@/views/Home'
import UserPage from '@/views/User'
import RecordPage from '@/views/Record'
import ReportPage from '@/views/Report'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: LoginPage, name: 'login' },
    { path: '/signup', component: SignupPage, name: 'signup' },
    { path: '/home', component: HomePage, name: 'home' },
    { path: '/user', component: UserPage, name: 'user' },
    { path: '/record', component: RecordPage, name: 'record' },
    { path: '/report', component: ReportPage, name: 'report' }
  ]
})
