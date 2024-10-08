import FormFields from "/plugins/form-fields/form-fields.js";

export default function Footer() {
    const formFields = new FormFields();

    var footerHTML = document.createElement("footer");
    footerHTML.classList.add("G-footer");
    footerHTML.innerHTML = `
    <div class="G-container">
        <div class="row-container">
            <div class="nav-wrapper">
                <div class="col-nav">
                    <span class="title">Бренды-партнёры</span>
                    <div class="list-link">
                        <a href="/catalog?manufacturer=Omega">Omega</a>
                        <a href="/catalog?manufacturer=Rolex">Rolex</a>
                        <a href="/catalog?manufacturer=Breguet">Breguet</a>
                        <a href="/catalog?manufacturer=Hubolt">Hubolt</a>
                        <a href="/catalog?manufacturer=Patek">Patek Philip</a>
                        <a href="/catalog?manufacturer=Messika">Messika</a>
                        <a href="/catalog?manufacturer=Graph">Graph</a>
                    </div>
                </div>
                <div class="col-nav">
                    <span class="title">Доставка и оплата</span>
                    <div class="list-link">
                        <a href="/delivery-and-payment?block=faq">Ответы на вопросы</a>
                        <a href="/delivery-and-payment?block=how-to-place-order">Как заказать</a>
                        <a href="/delivery-and-payment?block=how-to-pay">Как оплатить</a>
                        <a href="/delivery-and-payment?block=about-delivery">О доставке</a>
                    </div>
                </div>
                <div class="col-nav">
                    <span class="title">О нас</span>
                    <div class="list-link">
                        <a href="/about-us?block=our-location">Местоположение</a>
                        <a href="/about-us?block=our-partners">Бренды-партнёры</a>
                        <a href="/about-us?block=our-advantages">Принципы бренда</a>
                    </div>
                </div>
                <div class="col-nav">
                    <span class="title">Контакты</span>
                    <div class="list-network">
                        <a href="https://wa.me/${global_whatsApp}" target="_blank"><i class="icon whatsapp"></i></a>
                        <a href="https://t.me/${global_telegram}" target="_blank"><i class="icon telegram"></i></a>
<!--                        <a ><i class="icon instagram"></i></a>-->
<!--                        <a ><i class="icon mail"></i></a>-->
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    document.querySelector("#app").after(footerHTML);
}