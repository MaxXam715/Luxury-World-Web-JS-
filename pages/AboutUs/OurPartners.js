export default function OurPartners() {
    var partnersHTML = document.createElement("section");
    partnersHTML.classList.add("our-partners");
    partnersHTML.setAttribute("anchor", "our-partners");
    partnersHTML.innerHTML = `
    <div class="G-container">
        <h2 class="title-block">Наши партнёры</h2>
        <div class="group-company">
            <span class="title">Премиальные часы</span>
            <div class="list-company">
                <div class="item"><img src="/assets/img/about-us/brands/rolex.svg" alt=""></div>
                <div class="item"><img src="/assets/img/about-us/brands/omega.svg" alt=""></div>
                <div class="item"><img src="/assets/img/about-us/brands/breguet.svg" alt=""></div>
                <div class="item"><img src="/assets/img/about-us/brands/hublot.svg" alt=""></div>
                <div class="item"><img src="/assets/img/about-us/brands/patek-philippe.svg" alt=""></div>
            </div>
        </div>
        <div class="group-company">
            <span class="title">Ювелирные изделия</span>
            <div class="list-company">
                <div class="item"><img src="/assets/img/about-us/brands/messika-paris.svg" alt=""></div>
                <div class="item"><img src="/assets/img/about-us/brands/graff.svg" alt=""></div>
            </div>
        </div>
    </div>`;
    document.querySelector("#app").append(partnersHTML);
}