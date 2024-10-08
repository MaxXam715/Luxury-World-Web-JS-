import FormFields from "/plugins/form-fields/form-fields.js";
import ModalAllFilters from "./ModalAllFilters.js";

export default function HeaderCatalog() {
    const formFields = new FormFields();

    var headerHTML = document.createElement("section");
    headerHTML.classList.add("header-catalog");
    headerHTML.innerHTML = `
    <div class="G-container">        
        <h3 class="title-block">Каталог товаров</h3>
<!--        <div class="row-filter">-->
<!--            <button type="button" class="btn btn-open-filter">Все фильтры<span class="count">(1)</span><i class="icon filter"></i></button>-->
<!--            <button type="button" class="btn btn-sort">Сортировка</button>-->
<!--        </div>-->
    </div>`;
    document.getElementById("app").append(headerHTML);

    // fastFilterBrands();

    // открываем все фильтры
    // headerHTML.querySelector(".btn-open-filter").addEventListener("click", ModalAllFilters);

    function fastFilterBrands() {
        const getFilters = XMLHttpRequestAJAX({
            url: "/js/filters.json",
            method: "GET"
        });
        const getBrands = getFilters.data.watch.brands;

        var filterHTML = document.createElement("form");
        filterHTML.innerHTML = `
        <div class="swiper slider-brand" id="brand-slider">
            <div class="swiper-wrapper"></div>
        </div>`;
        headerHTML.querySelector(".btn-open-filter").after(filterHTML);

        for (var i in getBrands) {
            const brand = getBrands[i];
            let brandObj = {};
            brandObj["value"] = brand.title;

            var checkboxHTML = document.createElement("div");
            checkboxHTML.classList.add("swiper-slide");
            checkboxHTML.append(formFields.checkbox({name: "brand", value: brandObj}));
            filterHTML.querySelector(".swiper-wrapper").append(checkboxHTML);
        }

        new Swiper("#brand-slider", {
            slidesPerView: "auto",
            draggable: false,
            spaceBetween: 16
        });
    }
}