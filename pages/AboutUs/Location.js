export default function Location() {
    var locationHTML = document.createElement("section");
    locationHTML.classList.add("our-location");
    locationHTML.setAttribute("anchor", "our-location");
    locationHTML.innerHTML = `
    <div class="G-container">
        <h2 class="title-block">Наше местоположение</h2>
        <span class="desc-block">${global_address}</span>
        <div class="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.7413576275153!2d37.6141938772408!3d55.762995073087986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a4376f341ab%3A0x4d8879b3be8079cd!2z0J_QtdGC0YDQvtCy0LrQsCDRg9C7LiwgMTEsINCc0L7RgdC60LLQsCwgMTI3MDUx!5e0!3m2!1sru!2sru!4v1715354800130!5m2!1sru!2sru" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>`;
    document.querySelector("#app").append(locationHTML);
}