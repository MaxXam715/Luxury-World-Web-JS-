export default function BreadCrumbs(links) {
    var breadCrumbsHTML = document.createElement("div");
    breadCrumbsHTML.classList.add("P-breadCrumbs");
    var html = `
    <div class="G-container">
        <div class="list-breadCrumbs">`;
            for (var i in links) {
                var link = links[i];
                html += `<a ${(link.link) ? `href="${link.link}"` : ""} class="item">${link.title}</a>`;
            }
            html += `
        </div>
    </div>`;
    breadCrumbsHTML.innerHTML = html;
    document.querySelector("#app").append(breadCrumbsHTML);
}