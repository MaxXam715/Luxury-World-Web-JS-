export default function page404() {
    var pageHTML = document.createElement("div");
    pageHTML.classList.add("page-404");
    pageHTML.innerHTML = `
    <div class="G-container">
        <div class="row-container">
            <img src="/assets/img/404.svg" alt="" class="img-404">
            <div class="text-block">
                <span class="title">Страница не найдена</span>
                <span class="desc">Скорее всего адрес страницы введён неверно. Попробуйте его изменить или вернитесь на главный экран.</span>
                <a href="/" class="btn btn-primary btn-size-2xl">Вернуться на главную</a>
            </div>
        </div>
    </div>`;
    document.querySelector("#app").append(pageHTML);
}