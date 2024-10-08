import MainSlider from "./MainSlider.js";
import CollectionWatchs from "./CollectionWatchs.js";
import PromoWatchBanner from "./PromoWatchBanner.js";

export default function HomePage() {
    MainSlider();
    CollectionWatchs({
        title: "Новинки",
        link: "/catalog",
        products: {
            category: "",
            manufacturer: "",
            groupId: "",
        }
    });
    PromoWatchBanner({
        title: "Новинки BREITLING",
        mode: "banner-watch",
        link: "/catalog?category=watch&manufacturer=BREITLING",
        bannerImg: "https://s3-s1.retailcrm.tech/ru-central1/retailcrm/luxuryworldluxe-ac61e3e4a7b16834ae90039c2404b46b/product/666060c4f3089-1370-992-3_mp_3.webp",
        productId: "RB0145371G1P1",
    });
    CollectionWatchs({
        title: "Коллекция Hubolt",
        link: "/catalog?category=watch&manufacturer=HUBOLT",
        products: {
            category: "watch",
            manufacturer: "HUBOLT",
            groupId: "",
        }
    });
    PromoWatchBanner({
        title: "Новинки BLANCPAIN",
        mode: "banner-watch",
        link: "/catalog?category=watch&manufacturer=BLANCPAIN",
        bannerImg: "https://s3-s1.retailcrm.tech/ru-central1/retailcrm/luxuryworldluxe-ac61e3e4a7b16834ae90039c2404b46b/product/6659c91f72019-1687643544_799_praktika-chasy-bl.webp",
        productId: "3661-2954-55A",
    });
}