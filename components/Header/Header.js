import UpBar from "/components/UpBar/UpBar.js";
import MobileMenu from "../MobileMenu/MobileMenu.js";
import CartPreview from "/components/CartPreview/CartPreview.js";
import GlobalSearch from "/components/GlobalSearch/GlobalSearch.js";
import CurrencyChange from "/components/CurrencyChange/CurrencyChange.js";

export default function Header() {
    var headerHTML = document.createElement("header");
    headerHTML.classList.add("G-header");
    headerHTML.innerHTML = `
    <div class="G-container">
        <div class="top-bar">
            <div class="col-left">
                <button type="button" class="btn btn-aspect-ratio btn-open-menu">
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                </button>
            </div>
            <div class="col-center">
                <a href="/">
                    <img src="/assets/img/logo.svg" alt="logo" class="logo-img">
                </a>
            </div>
            <div class="col-right">
                <div class="row-action">
                    <button type="button" class="btn btn-aspect-ratio btn-currency-change"><i class="icon globe"></i></button>
                    <button type="button" class="btn btn-aspect-ratio btn-open-search"><i class="icon search"></i></button>
                    <button type="button" class="btn btn-aspect-ratio btn-open-cart"><i class="icon cart"></i><span class="count">1</span></button>
                </div>
            </div>
        </div>
        <nav class="nav-container">
            <div class="link-wrapper">
                <a href="/" class="link-item">Главная</a>
                <a href="/catalog" class="link-item">Каталог</a>
                <a href="/delivery-and-payment" class="link-item">Доставка и оплата</a>
                <a href="/about-us" class="link-item">О нас</a>
            </div>
        </nav>
    </div>`;
    document.querySelector("#app").before(headerHTML);

    UpBar();

    // выделяем активную ссылку в навигации
    markCurrentPageLinkAsVisited();

    // смена валюты
    headerHTML.querySelector(".btn-currency-change").addEventListener("click", function () {
        CurrencyChange();
    });

    // открыть корзину
    headerHTML.querySelector(".btn-open-cart").addEventListener("click", function () {
        CartPreview();
    });

    // открыть поиск
    headerHTML.querySelector(".btn-open-search").addEventListener("click", function () {
        GlobalSearch();
    });

    // открыть моб меню
    headerHTML.querySelector(".btn-open-menu").addEventListener("click", function () {
        MobileMenu();
    });

    // при скролле добавляем класс
    window.addEventListener('scroll', function() {
        if (window.scrollY >= 10) {
            headerHTML.classList.add('is-scrolled');
        } else {
            headerHTML.classList.remove('is-scrolled');
        }
    });

    // выделяем активную ссылку в навигации
    function markCurrentPageLinkAsVisited() {
        var currentUrl = window.location.pathname; // получаем текущий URL страницы
        var links = document.querySelectorAll(".link-item"); // находим все элементы ссылок

        links.forEach(function(link) {
            if (link.getAttribute("href") === currentUrl) {
                link.classList.add("visited"); // добавляем класс "visited", если URL совпадает
            }
        });
    }
}