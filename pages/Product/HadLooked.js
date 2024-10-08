import CardProductPreview from "/components/CardProductPreview/CardProductPreview.js";

export default function HadLooked(article) {
    // получаем артикулы недавно просмотренных товаров
    var arrayHadLooked = getCookie(global_cookieName_HadLookedProducts);

    // проверяем, если уже данный артикул в недавно просмотренных
    // если есть - то добавляем его в массив и обновляем cookie
    if (arrayHadLooked.includes(article) === false) {
        arrayHadLooked.push(article);

        setCookie({
            name: global_cookieName_HadLookedProducts,
            data: arrayHadLooked,
            expires: "infinite",
            path: "/"
        });
    }

    // если ранее ничего не смотрели или есть только один товар, на котором мы сейчас и находимся - не выводим блок
    if (arrayHadLooked.length === 0 || (arrayHadLooked.length === 1 && arrayHadLooked[0] === article)) return false;

    var hadLookedHTML = document.createElement("div");
    hadLookedHTML.classList.add("hadLooked-block");
    hadLookedHTML.innerHTML = `
    <div class="G-container">
        <div class="header-section">
            <h3 class="title">Вы недавно смотрели </h3>
        </div>
        <div class="grid-container"></div>
    </div>`;
    document.querySelector("#app").append(hadLookedHTML);



    const startIndex = Math.max(arrayHadLooked.length - 5, 0);

    for (let i = startIndex; i < arrayHadLooked.length; i++) {
        if (arrayHadLooked[i] === article) continue;

        // получаем товар по артиклу
        const getProduct = XMLHttpRequestAJAX({
            url: "https://api.luxuryworld.luxe/product",
            method: "GET",
            body: {
                article: arrayHadLooked[i]
            }
        });

        hadLookedHTML.querySelector(".grid-container").prepend(
            CardProductPreview(getProduct.data)
        );
    }
}