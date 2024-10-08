import ModalFullPhoto from "./ModalFullPhoto.js";

export default function InfoProduct(product) {
    const getCurrencyCookie = getCookie(global_cookieName_Location);
    const getAllСurrency = getCookie(global_cookieName_CurrencyConversion);

    console.log("product", product);
    var $URLControl = new URLControl();
    const article = $URLControl.getParam("product");
    const params = product.offers.find(obj => obj.article == article);
    console.log("params", params);
    const quantity = params.quantity;
    const quantityText = (quantity > 0) ? `В наличии: ${quantity}` : `Под заказ`;
    const quantityLabel = (quantity > 0) ? `in-stock` : `under-order`;
    const description = product.description || "NaN";
    var price = "";

    if (getCurrencyCookie.currency === "EUR") {
        price = (params.price) ? params.price.toLocaleString("de-DE", { style: "currency", currency: "EUR", minimumFractionDigits: 0, maximumFractionDigits: 0}) : "NaN";
    } else if (getCurrencyCookie.currency === "USD") {
        var getСurrencyUSD = getAllСurrency['USD'].value;
        var calc = params.price * getСurrencyUSD;
        price = (params.price) ? calc.toLocaleString("de-DE", { style: "currency", currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 2}) : "NaN";
    } else if (getCurrencyCookie.currency === "RUB") {
        var getСurrencyRUB = getAllСurrency['RUB'].value;
        var calc = params.price * getСurrencyRUB;
        price = (params.price) ? calc.toLocaleString("ru-RU", { style: "currency", currency: "RUB", minimumFractionDigits: 0, maximumFractionDigits: 2}) : "NaN";
    }

    var infoHTML = document.createElement("div");
    infoHTML.classList.add("info-product");
    var html = `
    <div class="G-container">
        <div class="grid-container">
            <div class="col-photo">
                <div class="row-container"></div>
            </div>
            <div class="col-info">
                <div class="info-product-header">
                    <span class="title-brand">${product.name}</span>
                    <span class="title-model">${article}</span>
                    <span class="quantity-goods ${quantityLabel}">${quantityText}</span>
                    <span class="price">${price}</span>
                </div>
                <button type="button" class="btn btn-primary btn-size-2xl btn-add-cart">Добавить в корзину</button>`;
                if (quantity === 0) {
                    html += `
                    <div class="products-on-order">
                        <span class="title">Товары «${quantityText}»</span>
                        <span class="desc">Категория данных товаров доступна только по предзаказу. После оформления заказа менеджер свяжется с вами и предоставит всю необходимую информацию для их приобретения.</span>
                    </div>`;
                }
                html += `
                <div class="desc-product">
                    <span class="title">Описание</span>
                    <span class="desc">${description}</span>
                </div>
            </div>
        </div>
    </div>`;
    infoHTML.innerHTML = html;
    document.querySelector("#app").append(infoHTML);

    gallery();          // галерея
    otherVariants();    // выводим вариации товаров
    paramsProduct();    // свойства товара

    // выводим вариации товаров
    function otherVariants() {
        if (product.offers.length <= 1) return false;

        var variantsHTML = document.createElement("div");
        variantsHTML.classList.add("other-variants");
        var html = `
        <span class="title">Другие варианты этого товара</span>
        <div class="grid-variants">`;
            for (var i in product.offers) {
                var productOffer = product.offers[i];
                var offerPhoto = productOffer.images[0];
                var offerArticle = productOffer.article;
                var isActiveClass = (offerArticle === article) ? "active" : "";

                html += `
                <a href="/catalog/?product=${offerArticle}" class="item ${isActiveClass}" alt="${offerArticle}">
                    <img src="${offerPhoto}">
                </a>`;
            }
            html += `
        </div>`;
        variantsHTML.innerHTML = html;
        infoHTML.querySelector(".desc-product").before(variantsHTML);
    }

    // галерея
    function gallery() {
        // создаем разметку для preview фотографий (слайдер)
        var previewHTML = document.createElement("div");
        previewHTML.classList.add("preview-photo-container");
        previewHTML.innerHTML = `
        <div class="swiper thumbs-slider" thumbsSlider>
            <div class="swiper-wrapper"></div>
        </div>`;
        infoHTML.querySelector(".col-photo .row-container").append(previewHTML);


        // создаем разметку для главной фотографии (слайдер)
        var indexSliderHTML = document.createElement("div");
        indexSliderHTML.classList.add("index-photo");
        indexSliderHTML.innerHTML = `
        <div class="swiper slider-index-photo">
            <div class="swiper-wrapper"></div>
        </div>
        <div class="swiper-pagination"></div>`;
        infoHTML.querySelector(".col-photo .row-container").append(indexSliderHTML);

        // выводим фотографии в слайдер
        for (var i in params.images) {
            photoItem(params.images[i]);
        }

        // выводим фотографии в слайдер
        function photoItem(photo) {
            var slideHTML = document.createElement("div");
            slideHTML.classList.add("swiper-slide");
            slideHTML.innerHTML = `<div class="photo-container"><img src="${photo}" class="photo" /></div>`;

            var slideIndex = slideHTML.cloneNode(true); // Клонируем элемент для второго контейнера

            previewHTML.querySelector(".swiper > .swiper-wrapper").append(slideIndex);
            indexSliderHTML.querySelector(".swiper > .swiper-wrapper").append(slideHTML);


            slideHTML.querySelector('.photo-container').addEventListener("click", ModalFullPhoto);

            // zoom фото по hover
            if (window.innerWidth > 767) {
                zoomImage();
            }

            // zoom фото по hover
            function zoomImage() {
                const container = slideHTML.querySelector('.photo-container');
                const img = slideHTML.querySelector('img');

                container.addEventListener("mousemove", onZoom);
                container.addEventListener("mouseover", onZoom);
                container.addEventListener("mouseleave", offZoom);

                function onZoom() {
                    const rect = container.getBoundingClientRect();
                    const x = event.clientX - rect.left;
                    const y = event.clientY - rect.top;

                    img.style.transformOrigin = `${x}px ${y}px`;
                    img.style.transform = "scale(2.5)";
                }

                function offZoom() {
                    img.style.transformOrigin = `center center`;
                    img.style.transform = "scale(1)";
                }
            }

        }

        var thumbsSlider = new Swiper(previewHTML.querySelector(".swiper"), {
            loop: false,
            direction: "vertical",
            spaceBetween: 16,
            slidesPerView: 4,
            freeMode: true,
            watchSlidesProgress: true,
        });

        var sliderIndex = new Swiper(indexSliderHTML.querySelector(".swiper"), {
            loop: false,
            spaceBetween: 10,
            pagination: {},
            thumbs: {
                swiper: thumbsSlider,
            },
            breakpoints: {
                0: {
                    allowTouchMove: true,
                    pagination: {
                        el: indexSliderHTML.querySelector(".swiper-pagination"),
                    }
                },
                767: {
                    allowTouchMove: false,
                },
            }
        });
    }

    // свойства товара
    function paramsProduct() {
        const properties = params.properties;
        var paramsHTML = document.createElement("div");
        paramsHTML.classList.add("params-product");
        var html = `
        <span class="title">О товаре</span>
        <div class="list-params">`;
            for (var i in properties) {
                const prop = properties[i];

                html += `
                <div class="item">
                    <span class="title">${renamePropsProduct(i)}</span>
                    <span class="value">${prop}</span>
                </div>`;
            }
            html += `
        </div>`;
        paramsHTML.innerHTML = html;
        infoHTML.querySelector(".desc-product").after(paramsHTML);
    }
}