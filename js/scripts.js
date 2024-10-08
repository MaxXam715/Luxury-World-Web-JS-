const version = document.querySelector("head meta[name='version']").getAttribute("content");
const global_phoneNumber = "+79009990000";
const global_whatsApp = "+79009990000";
const global_telegram = "+79009990000";
const global_address = "г. Москва, ул. Петровка, д 11";

const global_cookieName_Location = "LocationInfo";
const global_cookieName_acceptCookie = "acceptCookie";
const global_cookieName_HadLookedProducts = "HadLookedProducts";
const global_cookieName_CurrencyConversion = "CurrencyConversion";

const arrayCurrency = [
    { currency: "RUB", sign: "₽", desc: "Российский рубль"},
    { currency: "USD", sign: "$", desc: "Американский доллар США"},
    { currency: "EUR", sign: "€", desc: "Евро"},
];

document.addEventListener('DOMContentLoaded', function() {
    requestAnimationFrame(() => {
        document.getElementById("app").style.opacity = "1";
    })
});

// Вызов функции для получения информации о местоположении
getLocationInfo();

if (getCookie(global_cookieName_HadLookedProducts) === null) {
    setCookie({
        name: global_cookieName_HadLookedProducts,
        data: "[]",
        expires: "infinite",
        path: "/"
    });
} else {
    var getValue = getCookie(global_cookieName_HadLookedProducts);

    if (getValue.length > 10) {
        const newArray = getValue.slice(1); // Создает новый массив без первых 5 элементов

        setCookie({
            name: global_cookieName_HadLookedProducts,
            data: newArray,
            expires: "infinite",
            path: "/"
        });
    }
}


if (getCookie(global_cookieName_CurrencyConversion) === null) {
    var getAllCurrency = products = XMLHttpRequestAJAX({
        url: `https://www.cbr-xml-daily.ru/daily_json.js`,
        method: "GET",
        body: {}
    });
    getAllCurrency = getAllCurrency.data.Valute;

    const val_eur_rub = getAllCurrency['EUR'].Value;
    const val_dolr_rub = getAllCurrency['USD'].Value;

    const listCurrency = {
        "USD": {value: (val_eur_rub / val_dolr_rub)},
        "RUB": {value: val_eur_rub},
    };

    setCookie({
        name: global_cookieName_CurrencyConversion,
        data: listCurrency,
        expires: 3600,
        path: "/"
    });
}