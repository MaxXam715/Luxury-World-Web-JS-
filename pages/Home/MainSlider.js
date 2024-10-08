export default function MainSlider() {
    const arraySlides = [
        {
            link: "/",
            img: {
                "pc": "/assets/img/home-banner/1-pc.jpg",
                "mob": "/assets/img/home-banner/1-mob.jpg"
            }
        },
        {
            link: "/",
            img: {
                "pc": "/assets/img/home-banner/2-pc.jpg",
                "mob": "/assets/img/home-banner/2-mob.jpg"
            }
        },
        // {
        //     link: "/",
        //     img: {
        //         "pc": "/assets/img/home-banner/3-pc.jpg",
        //         "mob": "/assets/img/home-banner/3-mob.jpg"
        //     }
        // },
        {
            link: "/",
            img: {
                "pc": "/assets/img/home-banner/4-pc.jpg",
                "mob": "/assets/img/home-banner/4-mob.jpg"
            }
        }
    ];

    var sliderHTML = document.createElement("section");
    sliderHTML.classList.add("main-slider");
    sliderHTML.innerHTML = `
    <div class="G-container">
        <div class="slider-container">
            <div class="swiper slider-wrapper" id="mainSlider">
                <div class="swiper-wrapper"></div>
<!--                <div class="slide-button btn-prev"><i class="icon row-right"></i></div>-->
<!--                <div class="slide-button btn-next"><i class="icon row-left"></i></div>-->
                <div class="swiper-pagination"></div>
            </div>
        </div>
    </div>`;
    document.querySelector("#app").append(sliderHTML);

    for (var i in arraySlides) {
        outputPhoto(arraySlides[i]);
    }

    function outputPhoto(slide) {
        var link = slide.link ? `href="${slide.link}"` : "",
            img_pc = slide.img.pc || "/assets/img/MainSlider/empty.svg",
            img_mob = slide.img.mob || "/assets/img/MainSlider/empty.svg";

        var slideHTML = document.createElement("section");
        slideHTML.classList.add("swiper-slide");
        slideHTML.innerHTML = `
        <a ${link}>
            <picture>
                <source srcset="${img_mob}?v=2" media="(max-width: 767px)">
                <img src="${img_pc}?v=2" alt="Абстрактное изображение">
            </picture>
        </a>`;
        sliderHTML.querySelector(".swiper .swiper-wrapper").append(slideHTML);
    }

    const autoplayDelay = 6000;
    var swiper = new Swiper(sliderHTML.querySelector("#mainSlider"), {
        loop: true,
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: {
            delay: autoplayDelay,
            disableOnInteraction: false
        },
        pagination: {
            el: sliderHTML.querySelector(".swiper-pagination"),
            clickable: true
        },
        // navigation: {
        //     nextEl: sliderHTML.querySelector(".btn-prev"),
        //     prevEl: sliderHTML.querySelector(".btn-next")
        // },
        on: {
            autoplayTimeLeft(el, timeLeft, percentage) {
                let currentTime = timeLeft; // Текущее время в мс
                let calcPercent = ((autoplayDelay - currentTime) / autoplayDelay) * 100; // Вычисляем процент завершения
                sliderHTML.querySelector(".swiper-pagination-bullet-active").style.setProperty("--progress", calcPercent + "%");
            }
        }
    });
}