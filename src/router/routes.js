import {createRouter} from 'vue-router'
import Fontpage from '../views/fontpage/fontpage.vue';
import Homepage from '../views/homepage/home.vue';
import Videogame from '../views/videogame/videogame.vue';
import PlaceIntro from '../views/place/place.vue';
import Register from '../views/register/regiest.vue';
import Login from '../views/login/login.vue';
import Member from '../views/member/member.vue';

const routes = [
  {
    path: '/',
    component: Fontpage
  },

  {
    path: '/home',
    component: Homepage
  },
  {
    path: '/videogame/',
    component:Videogame
  },

  {
    path: '/place-intro/',
    component: PlaceIntro
  },

  {
    path: '/register/',
    component: Register
  },

  {
    path: '/login/',
    component: Login
  },

  {
    path: '/member',
    component: Member
  },

]

export default function (history) {
  return createRouter({
    history,
    routes
  })
}