<template>
  <div class="check-phone main">
        <div class="main__head">

            <a href="#" class="main__head-link">Панель управления </a>
            <a href="#" class="main__head-link"> Поиск устройства </a>
        </div>
        <div class="main__search">
            <form action="" class="main__search-form">
                <label class="main__search-label">
                <span class="main__search-icon">
                    <svg class="main__search-svg" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.6159 10.9301L8.75985 7.95969C9.49419 7.08675 9.89653 5.98841 9.89653 4.845C9.89653 2.17351 7.72303 0 5.05154 0C2.38005 0 0.206543 2.17351 0.206543 4.845C0.206543 7.51648 2.38005 9.68999 5.05154 9.68999C6.05445 9.68999 7.01018 9.38749 7.8273 8.81326L10.705 11.8062C10.8253 11.9311 10.9871 12 11.1604 12C11.3245 12 11.4802 11.9374 11.5984 11.8237C11.8495 11.5821 11.8575 11.1814 11.6159 10.9301ZM5.05154 1.26391C7.02619 1.26391 8.63262 2.87034 8.63262 4.845C8.63262 6.81965 7.02619 8.42608 5.05154 8.42608C3.07689 8.42608 1.47045 6.81965 1.47045 4.845C1.47045 2.87034 3.07689 1.26391 5.05154 1.26391Z"
      fill="#0089D7"/>
</svg>
                </span>
                    <input type="text" class="main__search-input" placeholder="Определить устройства по IMEI/SN">

                </label>
                <input type="submit" value="Найти устройств" class="main__search-submit">
            </form>


        </div>
        <div class="product">
            <div class="product__head">
                <span class="product__name">УСТРОЙСТВО</span>
                <button class="product__change">Изменить</button>
            </div>

            <div class="product__middle">
                <div class="product__info">
                    <ul class="product__info-list">
                        <li class="product__info-item">
                            <div class="product__info-name">SN/IMEI</div>
                            <div class="product__info-value">1355352088049323</div>
                        </li>
                        <li class="product__info-item">
                            <div class="product__info-name">ТИП</div>
                            <div class="product__info-value">Apple (Mobile)</div>
                        </li>
                        <li class="product__info-item">
                            <div class="product__info-name">НАЗВАНИЕ</div>
                            <div class="product__info-value">Apple iPhone 5s 16GB 2 строка при необход.</div>
                        </li>
                        <li class="product__info-item">
                            <div class="product__info-name">ЦВЕТ</div>
                            <div class="product__info-value">Silver</div>
                        </li>
                        <li class="product__info-item">
                            <div class="product__info-name">ОБЪЕМ</div>
                            <div class="product__info-value">16 Gb</div>
                        </li>
                    </ul>
                </div>
                <div class="product__bar-code">
                    <div class="bar-code">
                        <img src="../assets/img/bar-code.png" alt="bar-code" class="bar-code__img">
                    </div>
                    <input type="submit" class="bar-code__submit" value="Печать штрихкода">
                </div>
            </div>

        </div>
        <div class="screen">
            <ul class="screen__list">
                <li class="screen__item">
                    <div class="screen__item-title">ЭКРАН</div>
                    <div class="screen__item-text">Мелкие царапины
                        в две строки
                    </div>
                </li>

                <li class="screen__item">
                    <div class="screen__item-title">ЭКРАН</div>
                    <div class="screen__item-text">Мелкие царапины
                        в две строки
                    </div>
                </li>
                <li class="screen__item">
                    <div class="screen__item-title">ЭКРАН</div>
                    <div class="screen__item-text">Мелкие царапины
                        в две строки
                    </div>
                </li>
                <li class="screen__item">
                    <div class="screen__item-title">ЭКРАН</div>
                    <div class="screen__item-text">Мелкие царапины
                        в две строки
                    </div>
                </li>
            </ul>
        </div>

        <div class="history">
            <h2 class="history__title">ИСТОРИЯ</h2>
            <ul class="history__list">
                <li class="history__item">
                    <div class="history__date">14/09/2019</div>
                    <div class="history__slogan">Создан договор</div>
                    <div class="history__after">Рязанов Виктор Степанович</div>

                </li>
                <li class="history__item">
                    <div class="history__date">14/09/2019</div>
                    <div class="history__slogan">Создан договор</div>
                    <div class="history__after">Рязанов Виктор Степанович</div>

                </li>
                <li class="history__item">
                    <div class="history__date">14/09/2019</div>
                    <div class="history__slogan">Создан договор</div>
                    <div class="history__after">Рязанов Виктор Степанович</div>

                </li>
                <li class="history__item">
                    <div class="history__date">14/09/2019</div>
                    <div class="history__slogan">Создан договор</div>
                    <div class="history__after">Рязанов Виктор Степанович</div>

                </li>
                <li class="history__item">
                    <div class="history__date">14/09/2019</div>
                    <div class="history__slogan">Создан договор</div>
                    <div class="history__after">Рязанов Виктор Степанович</div>

                </li>
            </ul>
        </div>
  </div>
</template>

<script>
export default {
  name: 'CheckPhone',
}
</script>

<style>

    .main {
        width: calc(100% - 225px);
        margin-left: auto;
        padding: 42px 40px 63px;
        background: #e5e5e5;
        overflow: hidden;
    }

    .main__field {
        width: 100%;
        height: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
    }

    .main__head {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        color: rgba(0, 0, 0, 0.75);
        font-weight: 500;
        font-size: 14px;
    }

    .main__head:before {
        content: "";
        display: block;
        width: 15px ;
        height: 17px;
        margin-right: 6px;
        background-image: url("../assets/img/Vector (1).svg");
        background-repeat: no-repeat;
    }


    .main__head-link {
        color: rgba(0, 0, 0, 0.75);
        margin-right: 6px;
        padding: 4px 0;
        text-decoration: none;
    }

    .main__head-link:after {
        content: '>';
        margin-left: 4px;
    }

    .main__head-link:last-child {
        padding-right: 0;
    }

    .main__head-link:last-child:after {
        display: none;
    }

    .main__search {
        margin-top: 60px;
    }

    .main__search-form {
        width: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
    }

    .main__search-label {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-flex: 1;
        -ms-flex: 1 1 0px;
        flex: 1 1 0;
        padding: 10px 14px;
        border-radius: 5px;
        background-color: #ffffff;
        border: 0.5px solid #D4D4D4;
        -webkit-box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12);
        box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12);
        margin-right: 35px;
        margin-left: 7px;
    }

    .main__search-input {
        width: 100%;
        border: 0;
        background-color: transparent;
        outline: none;
        padding-left: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .main__search-input::-webkit-input-placeholder {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.33);
    }

    .main__search-input::-moz-placeholder {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.33);
    }

    .main__search-input:-ms-input-placeholder {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.33);
    }

    .main__search-input::-ms-input-placeholder {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.33);
    }

    .main__search-input::placeholder {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.33);
    }

    .main__search-icon {
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        width: 14px;
    }

    .main__search-svg {
        width: 100%;
        height: auto;
    }

    .main__search-submit {
        height: 100%;
        color: #ffffff;
        font-size: 14px;
        font-weight: 500;
        background: #0089D7;
        -webkit-box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.54);
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.54);
        border-radius: 5px;
        border: none;
        padding: 10px 21px;
        text-align: center;
        cursor: pointer;
        -webkit-transition: .2s;
        transition: .2s;
    }

    .main__search-submit:hover {
        -webkit-box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.24);
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.24);

    }





    .product {
        width: 65%;
        padding: 0 5px;
        margin: 77px 0 0 45px;
    }

    .product__middle {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
    }

    .product__head {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }

    .product__name {
        color: rgba(0, 0, 0, 0.45);
        font-weight: 700;
        font-size: 16px;
        padding-right: 15px;
        text-transform: uppercase;
    }

    .product__change {
        cursor: pointer;
        border: 0;
        background-color: transparent;
        outline: none;
        font-size: 14px;
        color: rgba(23, 121, 192, 0.87);
        text-transform: capitalize;
    }

    .product__info {
        min-width: 100px;
    }

    .product__info-list {
        margin: 20px 0 0;
        padding: 0;
        list-style-type: none;
    }

    .product__info-item {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        margin-bottom: 15px;
        overflow: hidden;
    }

    .product__info-item:last-child {
        margin-bottom: 0;
    }

    .product__info-name {
        width: 80px;
        margin-right: 10px;
        font-size: 13px;
        font-weight: 700;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #9EA1A4;
        text-transform: uppercase;
        white-space: nowrap;
    }

    .product__info-value {
        font-size: 17px;
        font-weight: 500;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .product__bar-code {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }

    .bar-code__submit {
        font-weight: 500;
        font-size: 14px;
        color: rgba(90, 101, 109, 0.87);
        padding: 10px 16px;
        background-color: #ffffff;
        -webkit-box-shadow: 0px 14px 21px rgba(95, 104, 111, 0.06);
        box-shadow: 0px 14px 21px rgba(95, 104, 111, 0.06);
        border-radius: 2px;
        border: 0;
        outline: none;
        cursor: pointer;
        -webkit-transition: .2s;
        transition: .2s;
    }

    .bar-code__submit:hover {
        -webkit-box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.24);
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.24);
    }

    .screen {
        margin-top: 80px;
    }

    .screen__list {
        padding: 0;
        margin: 0;
        list-style-type: none;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: start;
        -ms-flex-pack: start;
        justify-content: flex-start;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }

    .screen__item {
        width: calc(100% / 4 - 34px);
        padding: 20px 25px;
        background: #ffffff;
        border-radius: 2px;
        margin: 17px;
    }

    .screen__item-title {
        color: rgba(111, 114, 118, 0.66);
        margin-bottom: 10px;
    }

    .screen__item-text {
        max-width: 150px;
        font-size: 17px;
        color: rgba(0, 0, 0, 0.66);
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .history {
        background-color: #ffffff;
        border-radius: 2px;
        padding: 38px 30px;
        margin: 80px 17px 0;
    }

    .history__title {
        text-transform: uppercase;
        margin: 0;
        color: rgba(0, 0, 0, 0.45);
        font-weight: 700;
        font-size: 16px;
    }

    .history__list {
        padding: 0;
        margin: 30px 0 0;
        list-style-type: none;
    }

    .history__item {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        color: rgba(0, 0, 0, 0.77);
        font-size: 14px;
        padding: 10px 0;
        margin-bottom: 10px;
        border-bottom: 1px solid #00000015;
    }

    .history__item:last-child {
        margin-bottom: 0;
    }

    .history__date {
        width: 80px;
        margin-right: 40px;
    }

    .history__slogan {
        width: 30%;
        margin-right: 40px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .history__after {
        -webkit-box-flex: 1;
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }


</style>
