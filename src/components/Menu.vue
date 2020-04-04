<template>
    <div id="menu" class="menu">
        <div class="logo">
            <router-link class="logo__link" to="/">
                <img src="../assets/img/image.png" alt="logo" class="logo__img">
            </router-link>

        </div>
        <ul class="menu__list">
            <li class="menu__item">
                <router-link class="menu__link" to="/">Главная</router-link>
            </li>
            <li class="menu__item">
                <router-link class="menu__link" to="/">О нас</router-link>
            </li>
            <li class="menu__item">
                <router-link class="menu__link" to="/">Контакты</router-link>
            </li>
        </ul>
    </div>
</template>

<style>

    html {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    *, *:before, *:after {
        -webkit-box-sizing: inherit;
        box-sizing: inherit;
    }

    html,
    body {
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
    }

    .menu {
        width: 225px;
        padding: 50px 25px;
        background-image: linear-gradient(300.16deg, #048CE6 34.98%, rgba(255, 255, 255, 0) 105.27%), linear-gradient(329.99deg, rgba(236, 239, 242, 0.5) 0%, rgba(255, 255, 255, 0) 100%);
        background-color: #048CE6;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        overflow: hidden;
    }

    .menu__list {
        padding: 0;
        width: 100%;
        margin: 50px 0 0;
        list-style-type: none;
        height: 100%;
        overflow-y: auto;
    }

    .menu__item {
        margin-bottom: 25px;
    }

    .menu__item:last-child {
        margin-bottom: 0;
    }

    .menu__link {
        display: block;
        text-decoration: none;
        color: #ffffff;
        font-size: 18px;
        font-weight: 500;
        padding: 5px 0;
        -webkit-transition: .3s;
        transition: .3s;
    }

    .menu__link:hover {
        color: rgba(255, 255, 255, 0.7);
    }


    ::-webkit-scrollbar {
        width: 4px;
    }

    ::-webkit-scrollbar-track {
        background: #f1f1f105;
    }

    ::-webkit-scrollbar-thumb {
        background: #ffffff;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }

</style>
