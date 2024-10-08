import BreadCrumbs from "/components/BreadCrumbs/BreadCrumbs.js";
import InfoProduct from "./InfoProduct.js";
import Recommendations from "./Recommendations.js";
import HadLooked from "./HadLooked.js";

export default function Product() {
    // Пример использования
    var $URLControl = new URLControl();
    const getArticle = $URLControl.getParam("product");

    // получаем товар по артиклу
    const getProduct = XMLHttpRequestAJAX({
        url: "https://api.luxuryworld.luxe/product",
        method: "GET",
        body: {
            article: getArticle
        }
    });
    const product = getProduct.data;

    BreadCrumbs([
        {title: "Главная", link: "/"},
        {title: "Каталог", link: "/catalog"},
        {title: "Часы", link: "/catalog?category=watch"},
        {title: product.name, link: ""}
    ]);
    InfoProduct(product);
    // Recommendations();
    HadLooked(getArticle);
}