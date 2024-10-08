import FormFields from "/plugins/form-fields/form-fields.js";
import Modal from "/plugins/modal/modal.js";

export default function Order() {
    const formFields = new FormFields();

    var orderHTML = document.createElement("div");
    orderHTML.classList.add("order-block");
    orderHTML.innerHTML = `
    <div class="G-container">
        <div class="header">
            <h2 class="title">Ваш заказ</h2>
            <span class="number-products">1 товар</span>
        </div>
        <div class="grid-container">
            <div class="col-form"></div>
            <div class="col-payment-receipt"></div>
        </div>
    </div>`;
    document.querySelector("#app").append(orderHTML);

    ListProducts(); // Список товаров, добавленных в корзину
    ContactInfo(); // Контактная информация
    DeliveryMethod(); // Способ доставки
    PaymentMethod(); // Способ оплаты
    PaymentReceipt(); // Чек на оплату

    // Список товаров, добавленных в корзину
    function ListProducts() {
        var listHTML = document.createElement("div");
        listHTML.classList.add("list-products");
        orderHTML.querySelector(".col-form").append(listHTML);

        ProductItem(); // товар
        ProductItem(); // товар

        function ProductItem() {
            var productHTML = document.createElement("div");
            productHTML.classList.add("product-item");
            productHTML.innerHTML = `
            <div class="row-container">
                <div class="photo-container">
                    <img src="/assets/img/layout/watch/watch-1.webp" alt="img" class="photo-watch">
                </div>
                <div class="info-product">
                    <div class="header">
                        <span class="title">Claude Bernard</span>
                        <button type="button" class="btn btn-remove-product"><i class="icon close"></i></button>
                    </div>
                    <span class="model-product">Claude Bernard 10222 3m vin1</span>
                    <div class="quantity-in-stock">В наличии: 4</div>
                    
                    <div class="footer-cart">
                        <div class="quantity-purchase">
                            <button type="button" class="btn btn-quantity btn-aspect-ratio btn-minus"><i class="icon minus"></i></button>
                            <span class="count">1</span>
                            <button type="button" class="btn btn-quantity btn-aspect-ratio btn-plus"><i class="icon plus"></i></button>
                        </div>
                        <div class="price-product">57 400 ₽</div>
                    </div>
                </div>
            </div>`;
            listHTML.append(productHTML);
        }
    }

    // Контактная информация
    function ContactInfo() {
        var formHTML = document.createElement("div");
        formHTML.classList.add("contact-info");
        formHTML.innerHTML = `
        <div class="header">
            <span class="title">Контактная информация</span>
        </div>
        <form></form>`;
        orderHTML.querySelector(".col-form").append(formHTML);

        const form = formHTML.querySelector("form");

        form.append(
            formFields.inputText({label: "Имя", name: "name", placeholder: "Александр", mask: "", validate: "true"}),
            formFields.inputText({label: "Фамилия", name: "surname", placeholder: "Иванов", mask: "", validate: "true"}),
            formFields.inputText({label: "Телефон", name: "phone", placeholder: "+_ ___ ______", mask: "phone", validate: "true"}),
            formFields.inputText({label: "E-mail", name: "email", placeholder: "yourmail@example.com", mask: "email", validate: "true"})
        );
    }

    // Способ доставки
    function DeliveryMethod() {
        var deliveryHTML = document.createElement("div");
        deliveryHTML.classList.add("delivery-method");
        deliveryHTML.innerHTML = `
        <div class="header">
            <span class="title">Способ доставки</span>
        </div>
        <div class="row-container">
            <div class="list-method">
                <div class="item">
                    <div class="checkbox"></div>
                    <span class="title">Самовывоз из бутика</span>
                </div>
            </div>
            <p class="hint">На данный момент доступен только самовывоз из бутика – нам важно,  чтобы ваш заказ был передан лично вам в руки</p>
            <div class="map-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.7413576275153!2d37.6141938772408!3d55.762995073087986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a4376f341ab%3A0x4d8879b3be8079cd!2z0J_QtdGC0YDQvtCy0LrQsCDRg9C7LiwgMTEsINCc0L7RgdC60LLQsCwgMTI3MDUx!5e0!3m2!1sru!2sru!4v1715354800130!5m2!1sru!2sru" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>`;
        orderHTML.querySelector(".col-form").append(deliveryHTML);
    }

    // Способ оплаты
    function PaymentMethod() {
        var paymentHTML = document.createElement("div");
        paymentHTML.classList.add("payment-method");
        paymentHTML.innerHTML = `
        <div class="header">
            <span class="title">Способ оплаты</span>
        </div>
        <div class="row-container">
            <span class="title">Способ оплаты подбирается индивидуально</span>
            <span class="desc">После оформления заказа с вами свяжется менеджер, который предложит все возможные способы оплаты и подберёт для вас самый удобный. </span>
        </div>`;
        orderHTML.querySelector(".col-form").append(paymentHTML);
    }

    // Чек на оплату
    function PaymentReceipt() {
        var receiptHTML = document.createElement("div");
        receiptHTML.classList.add("payment-receipt");
        receiptHTML.innerHTML = `
        <div class="row-container">
            <div class="item order-amount">
                <span class="title">Сумма заказа</span>
                <span class="value">57 400 ₽</span>
            </div>
            <div class="item delivery">
                <span class="title">Доставка</span>
                <span class="value">Бесплатно</span>
            </div>
            <div class="item total">
                <span class="title">Итого</span>
                <span class="value">57 400 ₽</span>
            </div>
            <button type="button" class="btn btn-primary btn-size-xl btn-place-order">Оформить заказ</button>
        </div>
        <p class="personal-data">Нажимая на кнопку «Оформить заказ», Вы даете согласие на обработку своих персональных данных в соответствии с условиями политики конфиденциальности и соглашаетесь с условиями договора-оферты.</p>`;
        orderHTML.querySelector(".col-payment-receipt").append(receiptHTML);

        receiptHTML.querySelector(".btn-place-order").addEventListener("click", function () {
            var modalHTML = document.createElement("div");
            modalHTML.classList.add("cart-content");
            modalHTML.innerHTML = `
            <span class="title">Мы приняли ваш заказ!</span>
            <span class="desc">Номер вашего заказа: <span>1-123456R</span>.<br>В ближайшее время ваш персональный менеджер свяжется с вами, чтобы подтвердить заказ и подобрать для вас лучшие условия оплаты</span>
            <a href="/" class="btn btn-primary btn-size-2xl">Хорошо</a>`;

            new Modal({
                title: "",
                classModal: "modal-cart-successfully",
                content: modalHTML,
                mode: "center",
                width: "733px",
                esc: false,
                closeBackground: false,
                footerEvents:{
                    cancel: {
                        active: false
                    },
                    submit: {
                        active: false,
                    },
                }
            });
        });
    }
}