
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
Vue.component('projectsitem', {
    template: '<div class="col-sm-4 col-lg-5 col-lg-offset-1 projects-item"><div class="imgcontainer"><img class="img-responsive" src="img/portifolio-laravel-vue.png" alt="img de projeto guia"></img></div><div class="informacoes"><p><span class="titles">Titulo:</span> {{title}}</p><p><span class="titles">Link:</span> <a style="color: white;" href="http://www.testworks.com.br/portifolio">http://www.testworks.com.br/portifolio</a></p><p><span class="titles">Descrição:</span> Projeto para estudos de ambiente laravel e divulgação dos projetos que participei</p><p><span class="titles">Tags:</span> PHP7, MySql, Bootstrap (Sass), Cloud9, Vuejs, Laravel</p><p>Data: {{quando}}</p></div></div>',
    data: function () {
      return {
        title: 'Portifolio em laravel + vue',
        quando: '02/2017'
      }
    }
});
Vue.component('projects', require('./components/projects.vue'));
Vue.component('contact', require('./components/contact.vue'));

const app = new Vue({
    el: '#app'
});
