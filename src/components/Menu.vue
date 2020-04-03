<template>
  <div id="menu" class="menu">
        <div class="logo">
          <a href="#" class="logo__link">
            <img src="../assets/img/image.png" alt="logo" class="logo__img">
          </a>
        </div>
        <ul class="menu__list">
          <li class="menu__item">
            <a href="#" class="menu__link">Главная</a>
          </li>
          <li class="menu__item">
            <a href="#" class="menu__link">О нас</a>
          </li>
          <li class="menu__item">
            <a href="#" class="menu__link">Контакты</a>
          </li>
        </ul>
  </div>
</template>

<script>
export default {
  name: 'Menu',

  methods: {
    luhnAlgorithm: function(digits){
        let sum = 0;
        for (let i = 0; i < digits.length; i++) {
            let cardNum = parseInt(digits[i]);
            console.log(cardNum);
            if ((digits.length - i) % 2 === 0) {
                console.log(cardNum);
                cardNum = cardNum * 2;

                if (cardNum > 9) {
                    cardNum = cardNum - 9;
                }
            }
            sum += cardNum;
        }
        console.log(sum, 'sum');
        return sum % 10 === 0;
    }
  }

}

</script>

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
    margin: 0;
    width: 100%;
    padding: 50px 0 0;
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
</style>
