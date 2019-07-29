import Welcome from './merch/Welcome.vue'
import List from './merch/List.vue'
import Detail from './merch/Detail.vue'
import Dashboard from './user/Dashboard.vue'
import Login from './user/Login.vue'
import Register from './user/Register.vue'


export const routes = [
    {path: '/Vue-Eshop', component: Welcome},
    {path: '/user/:username', component: Dashboard},
    {path: '/login', component: Login},
    {path: '/register', component: Register},
    {path: '/list/:category', component: List},
    {path: '/list/:category/detail/:merchName', component: Detail},
    {path: '*', component: Welcome}
]