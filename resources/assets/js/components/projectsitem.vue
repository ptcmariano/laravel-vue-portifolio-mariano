<template>
    <div class="col-sm-4 col-lg-5 col-lg-offset-1 projects-item">
        <div class="imgcontainer">
            <img class="img-responsive" src="img/portifolio-laravel-vue.png" alt="img de projeto guia"></img>
        </div>
        <div class="informacoes">
            <p><span class="titles">Titulo:</span> {{title}}</p>
            <p><span class="titles">Link:</span> <a style="color: white;" href="http://www.testworks.com.br/portifolio">http://www.testworks.com.br/portifolio</a></p>
            <p><span class="titles">Descrição:</span> Projeto para estudos de ambiente laravel e divulgação dos projetos que participei</p>
            <p><span class="titles">Tags:</span> PHP7, MySql, Bootstrap (Sass), Cloud9, Vuejs, Laravel</p>
            <p>Data: {{quando}}</p>
        </div>
    </div>
</template>
