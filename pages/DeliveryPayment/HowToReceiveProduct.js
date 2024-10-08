export default function HowToReceiveProduct() {
    var howReceiveHTML = document.createElement("section");
    howReceiveHTML.classList.add("how-to-receive-product");
    howReceiveHTML.setAttribute("anchor", "about-delivery");
    howReceiveHTML.innerHTML = `
    <div class="G-container">
        <h2 class="title-block">Как получить товар</h2>
        <div class="grid-cols">
            <div class="col-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.7413576275153!2d37.6141938772408!3d55.762995073087986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a4376f341ab%3A0x4d8879b3be8079cd!2z0J_QtdGC0YDQvtCy0LrQsCDRg9C7LiwgMTEsINCc0L7RgdC60LLQsCwgMTI3MDUx!5e0!3m2!1sru!2sru!4v1715354800130!5m2!1sru!2sru" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="col-desc">
                <div class="list-step">
                    <div class="item">
                        <div class="title">
                            <span class="number">01</span>
                            <span class="text">Наличие</span>
                        </div>
                        <p class="desc">Наши товары могут находиться как в нашем бутике, так и за рубежом, поэтому мы сразу же предоставляем вам информацию о наличии товара, чтобы корректно сориентировать вас по срокам доставки</p>
                    </div>
                    <div class="item">
                        <div class="title">
                            <span class="number">02</span>
                            <span class="text">Оплата</span>
                        </div>
                        <p class="desc">При оформлении заказа с менеджером мы пригласим вас в наш бутик в Москве, где можно оплатить товар наличными. Если личная встреча вам не подходит, то мы можем предложить криптовалютный перевод. Наш специалист подберёт для вас самый удобный вариант оплаты.</p>
                    </div>
                    <div class="item">
                        <div class="title">
                            <span class="number">03</span>
                            <span class="text">Получение</span>
                        </div>
                        <p class="desc">Получить оформленный товар можно только при личной встрече в нашем бутике по адресу: ${global_address}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    document.querySelector("#app").append(howReceiveHTML);
}