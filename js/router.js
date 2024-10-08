var pathname = document.location.pathname,
    paths = pathname.split('/'),
    page = "";

getPage();
initCarcass();

function initCarcass() {
    if (page !== "404" && page !== "api") {
        importComponent(`/components/Header/Header.js`);
        createCSSLink(`/pages/${page}/css/${page}.css`);
        importComponent(`/pages/${page}/${page}.js`);
        importComponent(`/components/Footer/Footer.js`);
        importComponent(`/components/FloatingWidgets/FloatingWidgets.js`);
    }
}

// ---------- определяем страницу ----------
function getPage() {
    if (pathname === "/") { // Главная
        page = "Home";
    } else if (paths.length === 2 && paths[1] === "about-us") { // О нас
        page = "AboutUs";
    } else if (paths.length === 2 && paths[1] === "catalog") { // Каталог
        page = "Catalog";
    } else if (paths.length === 3 && paths[1] === "catalog") { // Карточка товара
        page = "Product";
    } else if (paths.length === 2 && paths[1] === "delivery-and-payment") { // Доставка и оплата
        page = "DeliveryPayment";
    } else if (paths.length === 2 && paths[1] === "order") { // Корзина
        page = "Order";
    } else if (paths.length === 2 && paths[1] === "transportation-watches") { // Информация о транспортировке часов
        page = "TransportationWatches";
    } else if (paths.length === 2 && paths[1] === "api") { // Описание API
        page = "api";
        createCSSLink(`/pages/apiDoc/css/apiDoc.css`);
        importComponent(`/pages/apiDoc/apiDoc.js`);
    } else { // 404
        page = "404";
        createCSSLink(`/pages/404/404.css`);
        importComponent(`/pages/404/404.js`);
    }
}