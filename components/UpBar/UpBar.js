export default function UpBar() {
    var headerHTML = document.createElement("div");
    headerHTML.classList.add("G-up-bar");
    headerHTML.innerHTML = `
    <div class="G-container">
        <div class="grid-container">
            <div class="col col-left"></div>
            <div class="col col-center">
                <a href="/transportation-watches" class="link-necessary-info">Необходимая информация о транспортировке часов</a>
            </div>
            <div class="col col-right">
                <a href="tel: ${global_phoneNumber}" class="link-call">${phoneNumber(global_phoneNumber)}</a>
            </div>
        </div>       
    </div>`;
    document.querySelector(".G-header").prepend(headerHTML);
}