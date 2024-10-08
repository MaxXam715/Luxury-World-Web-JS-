export default function AcceptingCookies() {
    var getAcceptCookie = getCookie(global_cookieName_acceptCookie);

    if (!getAcceptCookie) {
        setCookie({
            name: global_cookieName_acceptCookie,
            data: "no",
            expires: "infinite",
            path: "/"
        });
    }

    if (getAcceptCookie === "yes") return false;

    var cookieHTML = document.createElement("div");
    cookieHTML.classList.add("G-widget-accept-cookies");
    cookieHTML.innerHTML = `
    <div class="row-container">
        <span class="title">Мы используем cookies</span>
        <span class="desc">Мы используем cookies, чтобы обеспечивать вам удобный просмотр нашего сайта, а также иметь возможность улучшать его.</span>
        <button type="button" class="btn btn-primary btn-size-sm btn-accept">Принять</button>
    </div>`;
    document.querySelector("#app").after(cookieHTML);

    setTimeout(()=> {
        cookieHTML.classList.add("show");
    }, 1000);

    cookieHTML.querySelector(".btn-accept").addEventListener("click", function () {
        cookieHTML.classList.remove("show");

        setCookie({
            name: global_cookieName_acceptCookie,
            data: "yes",
            expires: "infinite",
            path: "/"
        });

        setTimeout(()=> {
            cookieHTML.remove();
        },500);
    });
}