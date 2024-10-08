export default function OurAdvantages() {
    var advantagesHTML = document.createElement("section");
    advantagesHTML.classList.add("our-advantages");
    advantagesHTML.setAttribute("anchor", "our-advantages");
    advantagesHTML.innerHTML = `
    <div class="G-container">
        <h2 class="title-block">В чём заключается наш секрет успеха</h2>
        <div class="grid-container">
            <div class="item">
                <span class="count">01</span>
                <div class="text-desc">
                    <span class="title">Тесное сотрудничество с крупными брендами</span>
                    <span class="desc">Rolex, Omega, Hubolt, Breguet, Messika, Graff, Patek Philippe, и многие другие – наши партнёры</span>
                </div>
            </div>
            <div class="item">
                <span class="count">02</span>
                <div class="text-desc">
                    <span class="title">Надёжные каналы поставок</span>
                    <span class="desc">Мы сотрудничаем напрямую с производителями, что обеспечивает подлинность и качество наших товаров</span>
                </div>
            </div>
            <div class="item">
                <span class="count">03</span>
                <div class="text-desc">
                    <span class="title">Высочайший уровень обслуживания</span>
                    <span class="desc">Мы готовы предложить индивидуальную консультацию, помочь в выборе и ответить на любые вопросы</span>
                </div>
            </div>
            <div class="item">
                <span class="count">04</span>
                <div class="text-desc">
                    <span class="title">Исключительное знание бизнеса</span>
                    <span class="desc">Наша компания, с 25-летней экспертизой, обеспечивает клиентов высококачественными товарами</span>
                </div>
            </div>
            <div class="item">
                <span class="count">05</span>
                <div class="text-desc">
                    <span class="title">Стабильность вне зависимости от мировых событий</span>
                    <span class="desc">Мы всегда готовы предложить нашим клиентам эксклюзивные услуги и ассортимент, вне зависимости от того, какие события происходят  в мире</span>
                </div>
            </div>
        </div>
    </div>`;
    document.querySelector("#app").append(advantagesHTML);
}