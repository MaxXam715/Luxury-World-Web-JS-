import CardProductPreview from "/components/CardProductPreview/CardProductPreview.js";

export default function CollectionWatch(data) {
    var products = XMLHttpRequestAJAX({
        url: "https://api.luxuryworld.luxe/products",
        method: "GET",
        body: {
            category: data.products.category || "",
            manufacturer: data.products.manufacturer || "",
            groupId: data.products.groupId || "",
        }
    });
    products = products.data.products;

    var sliderHTML = document.createElement("section");
    sliderHTML.classList.add("collection-watchs");
    var html = `
    <div class="G-container">
        <div class="header-section">
            <h3 class="title">${data.title}</h3>
            <a href="${data.link}" class="link-btn">Все<i class="icon row-right"></i></a>
        </div>
        <div class="grid-container"></div>
    </div>`;
    sliderHTML.innerHTML = html;
    document.querySelector("#app").append(sliderHTML);

    const startIndex = Math.max(products.length - 5, 0);
    for (let i = startIndex; i < products.length; i++) {
        sliderHTML.querySelector(".grid-container").append(CardProductPreview(products[i]));
    }
}