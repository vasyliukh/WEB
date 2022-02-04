import Vue from 'vue'
import Router from "vue-router";
import home from "@/components/Home";
import login from "@/components/login";

import Register from "@/components/register";


Vue.use(Router)

export default new Router({
    routes:[
        {path:'/', component:home},
        {path: '/login', component: login},
        {path: '/register', component: Register}

    ]
})