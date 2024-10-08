import Modal from "/plugins/modal/modal.js";
import FormFields from "/plugins/form-fields/form-fields.js";

export default function ModalAllFilters() {
    const formFields = new FormFields();

    const getFilters = XMLHttpRequestAJAX({
        url: "/js/filters.json",
        method: "GET"
    });

    let modalHTML = document.createElement("div");
    modalHTML.classList.add("content");
    modalHTML.innerHTML = `
    <div class="selected-filters"></div>
    <div class="list-filters"></div>
    <div class="footer-filter">
        <button type="button" class="btn btn-primary btn-size-2xl btn-close-filter">Применить</button>
    </div>`;

    const modalFilter = new Modal({
        title: "Фильтры",
        classModal: "modal-all-filters",
        content: modalHTML,
        mode: "left",
        width: "500px",
        footerEvents:{
            cancel: {
                active: false
            },
            submit: {
                active: false,
            },
        }
    });


    selectedFilters();

    itemGroup_brand();
    itemGroup_color();
    itemGroup_price();
    itemGroup_availability();

    modalHTML.querySelector(".btn-close-filter").addEventListener("click", function () {
        modalFilter.closeModal();
    });


    var allGroupFilter = modalHTML.querySelectorAll(".list-filters > .item-group");
    allGroupFilter.forEach(function (question) {
        question.querySelector(".title").addEventListener("click", function () {

            // Удаляем активный класс у всех элементов, кроме текущего
            allGroupFilter.forEach(function (item) {
                if (item !== question) {
                    item.classList.remove("active");
                    var panel = item.querySelector(".content-wrapper");
                    if (panel.style.maxHeight) {
                        panel.style.maxHeight = null;
                    }
                }
            });

            this.closest(".item-group").classList.toggle("active");
            var panel = this.nextElementSibling;

            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    });

    function itemGroup_brand() {
        const getBrands = getFilters.data.watch.brands;
        const groupedBrands = {};

        var filterHTML = document.createElement("div");
        filterHTML.classList.add("item-group");
        filterHTML.setAttribute("filter", "brand");
        filterHTML.innerHTML = `
        <span class="title">Бренды<i class="icon arrow-bottom"></i></span>
        <div class="content-wrapper hide-scroll">
            <div class="search-container">
                <form></form>
            </div>
            <form class="list-container hide-scroll list-brands"></form>
        </div>`;
        modalHTML.querySelector(".list-filters").append(filterHTML);

        const search = modalHTML.querySelector(".search-container form");
        search.append(formFields.inputText({name: "brand", placeholder: "Hubolt, Omega, Cartier...", icon: "search"}));

        // сортируем бренды по первой букве
        getBrands.forEach(brand => {
            const firstLetter = brand.title.charAt(0).toUpperCase();
            if (!groupedBrands[firstLetter]) {
                groupedBrands[firstLetter] = [];
            }
            groupedBrands[firstLetter].push(brand);
        });

        // выводим группы брендов
        for (var letter in groupedBrands) {
            const listBrands = groupedBrands[letter];

            var groupHTML = document.createElement("div");
            groupHTML.classList.add("item-group");
            groupHTML.setAttribute("letter", letter);
            var html = `
            <span class="letter">${letter}</span>
            <div class="list-brand-letter"></div>`;
            groupHTML.innerHTML = html;
            modalHTML.querySelector(".list-brands").append(groupHTML);

            // выводим каждую группу в список
            for (var i in listBrands) {
                const brand = listBrands[i];
                let brandObj = {};
                brandObj[brand.value] = brand.title;

                groupHTML.querySelector(".list-brand-letter").append(
                    formFields.checkbox({name: "brand", value: brandObj})
                );
            }
        }

        // поиск по бренду
        search.querySelector('input').addEventListener('input', function() {
            var searchText = this.value.toLowerCase();
            var items = filterHTML.querySelectorAll('.list-brands .item-group');

            items.forEach(function(item) {
                var itemText = item.textContent.toLowerCase();
                if (itemText.includes(searchText)) {
                    item.style.display = 'block'; // показываем элемент, если есть совпадение
                } else {
                    item.style.display = 'none'; // скрываем элемент, если нет совпадения
                }
            });
        });
    }

    function itemGroup_color() {
        const getColors = getFilters.data.watch.color;

        console.log("getColors", getColors)

        var filterHTML = document.createElement("div");
        filterHTML.classList.add("item-group");
        filterHTML.setAttribute("filter", "color");
        filterHTML.innerHTML = `
        <span class="title">Цвет<i class="icon arrow-bottom"></i></span>
        <div class="content-wrapper hide-scroll">
            <form class="list-container hide-scroll list-colors"></form>
        </div>`;
        modalHTML.querySelector(".list-filters").append(filterHTML);

        // выводим группы цветов
        for (var i in getColors) {
            const color = getColors[i];
            let colorObj = {};
            colorObj[color.value] = color.title;

            filterHTML.querySelector(".list-colors").append(
                formFields.checkbox({name: "color", field_class: color.value, value: colorObj})
            );

            var circleColor = document.createElement("div");
            circleColor.classList.add("circle-color");
            circleColor.style.backgroundColor = color.color;

            filterHTML.querySelector(".list-colors .field-container."+color.value+" .title").before(circleColor);
        }
    }

    function itemGroup_price() {
        var filterHTML = document.createElement("div");
        filterHTML.classList.add("item-group");
        filterHTML.setAttribute("filter", "price");
        filterHTML.innerHTML = `
        <span class="title">Цена<i class="icon arrow-bottom"></i></span>
        <div class="content-wrapper hide-scroll">
            <form class="price-fields"></form>
        </div>`;
        modalHTML.querySelector(".list-filters").append(filterHTML);

        const form = filterHTML.querySelector(".price-fields");
        form.append(formFields.inputText({name: "price-from", placeholder: "От 63 000 ₽", mask: "number"}));
        form.append(formFields.inputText({name: "price-to", placeholder: "До 1 650 000 ₽", mask: "number"}));

    }

    function itemGroup_availability() {
        const getAvailability = getFilters.data.watch.availability;
        console.log("availability", getAvailability);

        var filterHTML = document.createElement("div");
        filterHTML.classList.add("item-group");
        filterHTML.setAttribute("filter", "availability");
        filterHTML.innerHTML = `
        <span class="title">Наличие<i class="icon arrow-bottom"></i></span>
        <div class="content-wrapper hide-scroll">
            <form class="list-container hide-scroll list-availability"></form>
        </div>`;
        modalHTML.querySelector(".list-filters").append(filterHTML);

        // выводим группы цветов
        for (var i in getAvailability) {
            const availability = getAvailability[i];
            let availabilityObj = {};
            availabilityObj[availability.value] = availability.title;

            filterHTML.querySelector(".list-availability").append(
                formFields.checkbox({name: "availability", value: availabilityObj})
            );
        }
    }

    function selectedFilters() {
        const tagHTML = modalHTML.querySelector(".selected-filters");

        let labelHTML = document.createElement("div");
        labelHTML.classList.add("item-label");
        labelHTML.innerHTML = `
        <span class="title">Hubolt</span>
        <button type="button" class="btn btn-remove-filter"><i class="icon close"></i></button>`;

        tagHTML.append(labelHTML);
    }
}