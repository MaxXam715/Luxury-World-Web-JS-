export default function AnchorScrollUp() {
    var anchorHTML = document.createElement("div");
    anchorHTML.classList.add("G-anchor-scrollUp");
    anchorHTML.innerHTML = `<i class="icon arrow-top"></i>`;
    document.querySelector("#app").after(anchorHTML);

    anchorHTML.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Добавляем плавную анимацию скролла
        });
    });

    window.addEventListener('scroll', function() {
        if (window.scrollY >= 750) {
            anchorHTML.classList.add('show');
        } else {
            anchorHTML.classList.remove('show');
        }
    });
}