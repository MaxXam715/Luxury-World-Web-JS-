import CardProductPreview from "/components/CardProductPreview/CardProductPreview.js";

export default function ListProducts() {
    var products;
    var paramsRequest;
    var $URLControl = new URLControl();
    var getPage = $URLControl.getParam("page");

    if (!getPage) $URLControl.setParam("page", 1);

    var catalogHTML = document.createElement("section");
    catalogHTML.classList.add("P-list-catalog");
    catalogHTML.innerHTML = `
    <div class="G-container">
        <div class="list-products"></div>
    </div>`;
    document.getElementById("app").append(catalogHTML);

    getProduct();

    // получаем товары по фильтру
    function getProduct() {
        const getAllGetParams = $URLControl.getAllParams();
        var category = "";
        var manufacturer = "";

        if ($URLControl.getParam("category")) {
            category = $URLControl.getParam("category");
        }

        if ($URLControl.getParam("manufacturer")) {
            manufacturer = $URLControl.getParam("manufacturer");
        }

        paramsRequest = {
            page: $URLControl.getParam("page"),
            limit: 20,
            category: category, // watch, bracelets, rings, suspensions, earrings
            manufacturer: manufacturer,
            minPrice: "",
            maxPrice: "",
        };

        products = XMLHttpRequestAJAX({
            url: "https://api.luxuryworld.luxe/products",
            method: "GET",
            body: paramsRequest
        });
        products = products.data;
        console.log("getProducts", products);

        // выводим карточки товаров
        for (var i in products.products) {
            catalogHTML.querySelector(".list-products").append(
                CardProductPreview(products.products[i])
            );
        }

        paginationPage();
    }

    // пагинация
    function paginationPage() {
        if (products.pagination === 1) return false;
        var paginationHTML = document.createElement("div");
        paginationHTML.classList.add("pagination-page");
        catalogHTML.querySelector(".G-container").append(paginationHTML);

        for (var i = 1; i <= products.pagination.totalPageCount; i++) {
            btnItem(i);
        }

        function btnItem(page) {
            var btnHTML = document.createElement("button");
            btnHTML.setAttribute("type", "button");
            btnHTML.setAttribute("number-page", page);
            btnHTML.classList.add("btn");
            btnHTML.classList.add("btn-page");
            if (products.pagination.currentPage === page) btnHTML.classList.add("active");
            btnHTML.innerHTML = page;
            paginationHTML.append(btnHTML);

            btnHTML.addEventListener("click", function () {
                $URLControl.editParam("page", page);
                window.scrollTo({top: 0, behavior: 'smooth'});
                catalogHTML.querySelector(".list-products").innerHTML = ``;
                getProduct();
                paginationHTML.remove();
            });
        }
    }
}