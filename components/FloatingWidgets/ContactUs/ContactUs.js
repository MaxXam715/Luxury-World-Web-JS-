export default function ContactUs() {
    var widgetHTML = document.createElement("div");
    widgetHTML.classList.add("G-widget-ContactUs");
    widgetHTML.innerHTML = `
    <div class="list-networks">
        <a href="https://wa.me/${global_whatsApp}" target="_blank" class="btn btn-item"><i class="icon whatsapp"></i></a>
        <a href="https://t.me/${global_telegram}" target="_blank" class="btn btn-item"><i class="icon telegram"></i></a>
    </div>
    <button type="button" class="btn btn-toggle">
        <i class="icon message"></i>
        <i class="icon close"></i>
    </button>`;
    document.querySelector("#app").after(widgetHTML);

    widgetHTML.querySelector(".btn-toggle").addEventListener("click", function () {
        widgetHTML.classList.toggle("open");

        var panel = widgetHTML.querySelector(".list-networks");

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}