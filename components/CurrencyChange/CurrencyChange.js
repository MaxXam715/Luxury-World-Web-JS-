import Modal from "/plugins/modal/modal.js";

export default function CurrencyChange() {
    const getCurrencyCookie = getCookie(global_cookieName_Location);
    var selectCurrency = "";

    var modalHTML = document.createElement("div");
    modalHTML.classList.add("list-currency");

    new Modal({
        title: "Выбор валюты",
        classModal: "modal-currency-change",
        content: modalHTML,
        mode: "right",
        width: "500px",
        footerEvents:{
            cancel: {
                active: false
            },
            submit: {
                active: true,
                title: "Применить",
                nameClass: "btn-size-2xl",
                callback: () => applyCurrency()
            },
        }
    });

    for (var i in arrayCurrency) {
        currencyItem(arrayCurrency[i]);
    }

    function currencyItem(currency) {
        var currencyHTML = document.createElement("div");
        currencyHTML.classList.add("item");
        currencyHTML.setAttribute("currency", currency.currency);
        currencyHTML.innerHTML = `
        <span class="currency">${currency.currency} ${currency.sign}</span>
        <span class="title">${currency.desc}</span>`;
        modalHTML.append(currencyHTML);

        if (currency.currency === getCurrencyCookie.currency) {
            currencyHTML.classList.add("active");
        }
    }

    const currencys = modalHTML.querySelectorAll(".item");

    currencys.forEach(function (currency) {
        currency.addEventListener('click', function() {
            currencys.forEach(function(el) {
                el.classList.remove('active');
            });
            currency.classList.add('active');
            selectCurrency = currency.getAttribute("currency");
        });
    });


    function applyCurrency() {
        var getLocationCookie = getCookie(global_cookieName_Location);
        getLocationCookie.currency = selectCurrency;

        setCookie({
            name: global_cookieName_Location,
            data: getLocationCookie,
            expires: "infinite",
            path: "/"
        });

        location.reload();
    }
}