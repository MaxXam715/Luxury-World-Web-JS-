import CurrencyChange from "/components/CurrencyChange/CurrencyChange.js";

export default function MobileMenu() {
    var mobileMenu = document.createElement("div");
    mobileMenu.classList.add("G-mobile-menu");
    mobileMenu.innerHTML = `
    <div class="row-container">
        <div class="header-nav">
            <img src="/assets/img/logo.svg" alt="logo" class="logo">
            <button type="button" class="btn btn-aspect-ratio btn-close-menu">
                <i class="icon close"></i>
            </button>
        </div>
        <div class="G-container">
            <nav class="nav-container">
                <a href="/" class="link-item">Главная</a>
                <a href="/catalog" class="link-item">Каталог</a>
                <a href="/delivery-and-payment" class="link-item">Доставка и оплата</a>
                <a href="/about-us" class="link-item">О нас</a>
            </nav>
             <div class="our-contacts">
                <button type="button" class="btn item btn-currency-change"><i class="icon globe"></i>Изменить валюту</button>
                <a href="tel: ${global_phoneNumber}" class="item"><i class="icon phone"></i>${phoneNumber(global_phoneNumber)}</a>
            </div>
        </div>
    </div>`;
    document.querySelector(".G-header").after(mobileMenu);

    requestAnimationFrame( () => {
        mobileMenu.classList.add('open');
        document.body.classList.add("no-scroll")
    });

    mobileMenu.querySelector(".btn-close-menu").addEventListener("click", function () {
        mobileMenu.classList.remove('open')
        mobileMenu.addEventListener('transitionend', function(e) {
            mobileMenu.remove();
            document.body.classList.remove('no-scroll');
        });
    });

    // смена валюты
    mobileMenu.querySelector(".btn-currency-change").addEventListener("click", function () {
        CurrencyChange();
    });
}