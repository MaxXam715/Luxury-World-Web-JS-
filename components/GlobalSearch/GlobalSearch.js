import FormFields from "/plugins/form-fields/form-fields.js";
import Modal from "/plugins/modal/modal.js";
import CardProductPreview from "/components/CardProductPreview/CardProductPreview.js";

export default function GlobalSearch() {
    const formFields = new FormFields();

    var modalHTML = document.createElement("div");
    modalHTML.classList.add("row-container");
    modalHTML.innerHTML = `
    <div class="G-container">
        <div class="header">
            <form></form>
            <button type="button" class="btn btn-primary btn-size-lg btn-find-products">Найти</button>
            <button type="button" class="btn btn-tertiary btn-size-lg btn-close-search"><i class="icon close"></i><span>Закрыть</span></button>
        </div>
        <div class="hint-container">
            <div class="popular-queries">
                <span class="title-block">Популярные запросы</span>
                <div class="list-queries">
                    <div class="item">Omega</div>
                    <div class="item">Rolex</div>
                    <div class="item">Breguet</div>
                    <div class="item">Hubolt</div>
                    <div class="item">Patek Philip</div>
                    <div class="item">Messika</div>
                    <div class="item">Graph</div>
                </div>
            </div>
            <div class="our-recommendations">
                <span class="title-block">Наши рекомендации</span>
                <div class="grid-container"></div>
            </div>
        </div>
    </div>`;

    const modalSearch = new Modal({
        title: "",
        classModal: "modal-global-search",
        content: modalHTML,
        mode: "top",
        footerEvents:{
            cancel: {
                active: false
            },
            submit: {
                active: false,
            },
        }
    });

    // вставляем инпут (поле поиска)
    const form = modalHTML.querySelector(".header form");
    form.append(formFields.inputText({name: "product", placeholder: "Hubolt, Omega, Cartier...", icon: "search"}));

    form.querySelector("input").focus();

    // закрываем поиск по клику на кнопку "Закрыть"
    modalHTML.querySelector(".btn-close-search").addEventListener("click", function () {
        modalSearch.closeModal();
    });

    modalHTML.querySelector(".our-recommendations .grid-container").append(
        CardProductPreview(),
        CardProductPreview(),
        CardProductPreview(),
        CardProductPreview()
    );
}