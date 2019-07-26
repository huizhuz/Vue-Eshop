import Login from './user/Login.vue'
import Register from './user/Register.vue'
import List from './merch/List.vue'
import Detail from './merch/Detail.vue'



export const routes = [
    {path: '/', component: List},
    {path: '/login', component: Login},
    {path: '/register', component: Register},
    {path: '/list/:category', component: List},
    {path: '/list/:category/detail/:merchName', component: Detail},
    {path: '*', component: List}
]