import CardProductPreview from "/components/CardProductPreview/CardProductPreview.js";

export default function Recommendations() {
    var recomHTML = document.createElement("div");
    recomHTML.classList.add("recommendations-block");
    recomHTML.innerHTML = `
    <div class="G-container">
        <div class="header-section">
            <h3 class="title">Наши рекомендации</h3>
        </div>
        <div class="grid-container"></div>
    </div>`;
    document.querySelector("#app").append(recomHTML);

    recomHTML.querySelector(".grid-container").append(
        CardProductPreview(),
        CardProductPreview(),
        CardProductPreview(),
        CardProductPreview()
    );
}