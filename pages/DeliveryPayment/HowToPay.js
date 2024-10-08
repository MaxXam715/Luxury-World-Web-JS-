export default function HowToPay() {
    var howToPayHTML = document.createElement("section");
    howToPayHTML.classList.add("how-to-pay");
    howToPayHTML.setAttribute("anchor", "how-to-pay");
    howToPayHTML.innerHTML = `
    <div class="G-container">
        <h2 class="title-block">Как оплатить</h2>
        <div class="grid-payment-methods">
            <div class="item">
                <i class="icon cryptocurrency"></i>
                <div class="text-desc">
                    <span class="title">Криптовалютой</span>
                    <span class="desc">Криптовалютный перевод позволяет нам обеспечить высокую степень конфиденциальности и быстроту транзакций.</span>
                </div>
            </div>
            <div class="item">
                <i class="icon money"></i>
                <div class="text-desc">
                    <span class="title">Наличными</span>
                    <span class="desc">Заказ можно оплатить наличными при личной встрече. Это позволяет сохранить простоту и безопасность в процессе покупки.</span>
                </div>
            </div>
        </div>
    </div>`;
    document.querySelector("#app").append(howToPayHTML);
}