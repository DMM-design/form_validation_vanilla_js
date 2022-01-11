import { MainPage } from './js/Pages/MainPage.js';
const $ = (elem) => document.querySelector(elem);
const $main = $('#app');

// Pages
const mainPage = new MainPage($main);

window.addEventListener('DOMContentLoaded', (e) => {
    mainPage;
});
