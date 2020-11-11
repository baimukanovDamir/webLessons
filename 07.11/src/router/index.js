import VueRouter from 'vue-router'

import Home from '../pages/Home'
import RU from '../pages/ru'
import UK from '../pages/uk'
import EN from '../pages/en'

export default new VueRouter({
    mode: 'history',
    routes: [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/ru',
        name: 'ru',
        component: RU
    },
    {
        path: '/uk',
        name: 'uk',
        component: UK
    },
    {
        path: '/en',
        name: 'en',
        component: EN
    }
    ]
})