import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from './views/HomePage.vue';
import PlantCatalog from './components/PlantCatalog.vue';
import UserProfile from './views/UserProfile.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home-page',
      component: HomePage
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: PlantCatalog
    },
    {
      path: '/profile',
      name: 'user-profile',
      component: UserProfile
    }
    // Добавьте другие маршруты здесь
  ]
});
