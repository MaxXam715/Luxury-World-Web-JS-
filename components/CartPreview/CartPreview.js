import Modal from "/plugins/modal/modal.js";

export default function CartPreview() {
    var modalHTML = document.createElement("div");
    modalHTML.classList.add("cart-content");
    modalHTML.innerHTML = `
    <div class="list-products">
        <div class="product-item">
            <div class="row-container">
                <div class="photo-container">
                    <img src="/assets/img/layout/watch/watch-1.webp" alt="img" class="photo-watch">
                </div>
                <div class="info-product">
                    <div class="header">
                        <span class="title">Claude Bernard</span>
                        <button type="button" class="btn btn-remove-product"><i class="icon close"></i></button>
                    </div>
                    <span class="model-product">Claude Bernard 10222 3m vin1</span>
                    <div class="quantity-in-stock">В наличии: 4</div>
                    
                    <div class="footer-cart">
                        <div class="quantity-purchase">
                            <button type="button" class="btn btn-quantity btn-aspect-ratio btn-minus"><i class="icon minus"></i></button>
                            <span class="count">1</span>
                            <button type="button" class="btn btn-quantity btn-aspect-ratio btn-plus"><i class="icon plus"></i></button>
                        </div>
                        <div class="price-product">57 400 ₽</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="footer-cart">
        <div class="price-row">
            <div class="title">Итого:</div>
            <div class="price">57 400 ₽</div>
        </div>
        <a href="/order" class="btn btn-primary btn-size-2xl btn-place-order">Оформить заказ</a>
    </div>`;

    const modalCart = new Modal({
        title: "Корзина",
        classModal: "modal-cart-preview",
        content: modalHTML,
        mode: "right",
        width: "500px",
        footerEvents:{
            cancel: {
                active: false
            },
            submit: {
                active: false,
            },
        }
    });

    numberProducts();

    function numberProducts() {
        var numberProductsHTML = document.createElement("div");
        numberProductsHTML.classList.add("number-products");
        numberProductsHTML.innerHTML = `1 товар`;
        document.querySelector(".modal-cart-preview .modal-header .header-info").append(numberProductsHTML);
    }
}