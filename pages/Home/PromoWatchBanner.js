import CardProductPreview from "/components/CardProductPreview/CardProductPreview.js";

export default function PromoWatchBanner(data) {
    var promoHTML = document.createElement("section");
    promoHTML.classList.add("promo-watch-banner");
    var html = `
    <div class="G-container">
        <div class="header-section">
            <h3 class="title">${data.title}</h3>
            <a href="${data.link}" class="link-btn">Все<i class="icon row-right"></i></a>
        </div>
        <div class="grid-container" data-mode="${data.mode}">
            <div class="col-banner">
                <img src="${data.bannerImg}" alt="banner" class="banner">
            </div>
            <div class="col-watch"></div>
        </div>
    </div>`;
    promoHTML.innerHTML = html;
    document.querySelector("#app").append(promoHTML);


    // получаем товар по артиклу
    const getProduct = XMLHttpRequestAJAX({
        url: "https://api.luxuryworld.luxe/product",
        method: "GET",
        body: {
            article: data.productId
        }
    });
    const product = getProduct.data;
    console.log(product.name, product);

    promoHTML.querySelector(".col-watch").append(CardProductPreview(product));
}