export default function CardProductPreview(product) {
    if (!product) return false;
    const params = product.offers.find(obj => obj.article == product.article);
    if (!params) return "";
    // console.log("params_had", params)
    const previewPhoto = product.imageUrl || "/assets/img/product-photo-nan.png";
    const article = params.article || "NaN";

    const getCurrencyCookie = getCookie(global_cookieName_Location);
    const getAllCurrency = getCookie(global_cookieName_CurrencyConversion);

    var price = "";

    if (getCurrencyCookie.currency === "EUR") {
        price = (params.price) ? params.price.toLocaleString("de-DE", { style: "currency", currency: "EUR", minimumFractionDigits: 0, maximumFractionDigits: 0}) : "NaN";
    } else if (getCurrencyCookie.currency === "USD") {
        var getCurrencyUSD = getAllCurrency['USD'].value;
        var calc = params.price * getCurrencyUSD;
        price = (params.price) ? calc.toLocaleString("de-DE", { style: "currency", currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 2}) : "NaN";
    } else if (getCurrencyCookie.currency === "RUB") {
        var getCurrencyRUB = getAllCurrency['RUB'].value;
        var calc = params.price * getCurrencyRUB;
        price = (params.price) ? calc.toLocaleString("ru-RU", { style: "currency", currency: "RUB", minimumFractionDigits: 0, maximumFractionDigits: 2}) : "NaN";
    }

    var sliderHTML = document.createElement("a");
    sliderHTML.setAttribute("href", "/catalog/?product="+article)
    sliderHTML.classList.add("G-card-watch-preview");
    sliderHTML.setAttribute("article", article)
    sliderHTML.setAttribute("id-product", product.id)
    var html = `
    <div class="row-container">
        <div class="photo-container">
            <img src="${previewPhoto}" alt="img" class="photo-watch">
        </div>
        <div class="desc-container">
            <span class="title">${product.name}</span>
            <span class="price">${price}</span>
        </div>
    </div>`;
    sliderHTML.innerHTML = html;

    return sliderHTML;
}