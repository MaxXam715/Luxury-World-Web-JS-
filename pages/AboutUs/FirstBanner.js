export default function FirstBanner() {
    var bannerHTML = document.createElement("section");
    bannerHTML.classList.add("first-banner");
    bannerHTML.innerHTML = `
    <div class="G-container">
        <div class="row-container">
            <picture>
                <source srcset="/assets/img/about-us/3-mob.jpg?v=2" media="(max-width: 767px)">
                <img src="/assets/img/about-us/3-pc.jpg?v=2" alt="Абстрактное изображение">
            </picture>
        </div>
    </div>`;
    document.querySelector("#app").append(bannerHTML);
}