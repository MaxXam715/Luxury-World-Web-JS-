export default function HowToPlaceOrder() {
    const stepHowToOrder = [
        {
            number: "1",
            title: "Выбирайте всё, что нужно в каталоге",
            desc: "В каталоге вы найдете эксклюзивные премиальные украшения и швейцарские часы на любой вкус"
        },
        {
            number: "2",
            title: "Добавьте товары в корзину и нажмите “Оформить заказ”",
            desc: "Не забудьте про эксклюзивные предложения и новинки"
        },
        {
            number: "3",
            title: "Введите необходимые данные",
            desc: "Мы попросим минимальную информацию для высокого качества сервиса"
        },
        {
            number: "4",
            title: "Дождитесь сообщения от менеджера",
            desc: "Менеджер свяжется с вами после оформления заказа"
        }
    ];

    var howorderHTML = document.createElement("section");
    howorderHTML.classList.add("how-to-place-order");
    howorderHTML.setAttribute("anchor", "how-to-place-order");
    var html = `
    <div class="G-container">
        <div class="row-container">
            <h2 class="title-block">Как сделать заказ</h2>
            <div class="grid-step">`;
                for (var i in stepHowToOrder) {
                    var step = stepHowToOrder[i];
                    html += `
                    <div class="item">
                        <div class="step-count">
                            <div class="number">${step.number}</div>
                            <div class="arrow-container">
                                <span class="line"><i class="icon arrow-right-cropped"></i></span>
                            </div>
                        </div>
                        <div class="text-container">
                            <span class="title">${step.title}</span>
                            <span class="desc">${step.desc}</span>
                        </div>
                    </div>`;
                }
                html += `
            </div>
        </div>
        <div class="link-container">
            <a href="/catalog" class="btn btn-primary btn-size-2xl">Перейти к выбору товаров</a>
        </div>
    </div>`;
    howorderHTML.innerHTML = html;
    document.querySelector("#app").append(howorderHTML);
}