
/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('headerportifolio', require('./components/headerportifolio.vue'));
Vue.component('fivestars', require('./components/fivestars.vue'));
Vue.component('presentation', require('./components/presentation.vue'));
Vue.component('badges', require('./components/badges.vue'));
Vue.component('projects', require('./components/projects.vue'));
Vue.component('contact', require('./components/contact.vue'));

const app = new Vue({
    el: '#app'
});
