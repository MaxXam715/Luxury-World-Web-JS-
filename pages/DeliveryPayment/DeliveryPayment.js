import HowToPlaceOrder from "./HowToPlaceOrder.js";
import HowToPay from "./HowToPay.js";
import HowToReceiveProduct from "./HowToReceiveProduct.js";
import FAQ from "./FAQ.js";

export default function DeliveryPayment() {
    HowToPlaceOrder();
    HowToPay();
    HowToReceiveProduct();
    FAQ();
    setTimeout(function () {
        scrollToBlock();
    }, 500)

    function scrollToBlock() {
        var $URLControl = new URLControl();
        var getParam = $URLControl.getParam("block");

        if (getParam !== null) {
            const target = document.querySelector(`[anchor="${getParam}"]`);
            const rect = target.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            var offsetTop = (window.innerWidth < 767) ? 100 : 200; // Отступ сверху
            var scrollPosition = rect.top + scrollTop - offsetTop;

            window.scrollTo({top: scrollPosition, behavior: 'smooth'});
        }
    }
}