function phoneNumber(tel) {
    if (tel === undefined && tel === "") return "NaN";

    if (!tel.startsWith("+")) {
        tel = "+" + tel;
    }

    let cleaned = ('' + tel).replace(/\D/g, '');
    let match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/);
    if (match) {
        return '+' + match[1] + ' (' + match[2] + ') ' + match[3] + '-' + match[4] + '-' + match[5];
    }

    return tel;
}

function createScriptLink(path) {
    let script = document.createElement('script');
    script.setAttribute("src", path+"?v="+version);
    document.body.append(script);
}

function importComponent(path, data) {
    path = (path) ? path : "/nan";
    data = (data) ? data : "";

    import(`${path}?v=${version}`).then(function (obj) {
        obj.default(data);
    }).catch(function (error) {
        console.error('%c ERROR: import JS ', 'background: red; color: #fff; border-radius: 50px;', error);
    });
}

function createCSSLink(path) {
    let nameFile = path.match(/\/([^\/]+)\.css$/)[1];

    let cssNavigation = document.createElement('link');
    cssNavigation.setAttribute("rel", "stylesheet");
    cssNavigation.setAttribute("href", path+"?v="+version);
    cssNavigation.id = "css_"+nameFile;

    if (!document.getElementById(cssNavigation.id)) document.head.append(cssNavigation);
}

// Устанавливаем куки
function setCookie(name, value, expires = "infinite") {
    // проверка данных
    if (!value) {
        console.error('%c ERROR: set Cookie ', 'background: red; color: #fff; border-radius: 50px;', "Нет данных для сохранения");
        return false;
    } else if (typeof value == "object") {
        value = JSON.stringify(value);
    }

    // проверка имени
    if (!name) {
        console.error('%c ERROR: set Cookie ', 'background: red; color: #fff; border-radius: 50px;', "Отсутствует название");
        return false;
    }
    // проверка срока жизни
    if (expires) {
        if (typeof expires == "string" && expires === "infinite") {
            expires = new Date(Date.now() + 700 * 864e5).toUTCString();
        } else if (typeof expires == "number") {
            let currentDate = new Date();
            currentDate.setTime(currentDate.getTime() + (expires * 1000));
            expires = currentDate.toUTCString();
        }
    } else {
        console.error('%c ERROR: set Cookie ', 'background: red; color: #fff; border-radius: 50px;', "Отсутствует время");
        return false;
    }

    document.cookie = `${name}=${value}; expires=${expires}; path=/;`;
}

// Получаем куки
function getCookie(cookieName) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${cookieName}=`);

    if (parts.length === 2) {
        let res = parts.pop().split(';').shift();

        // Попробуем распарсить как JSON
        try {
            return JSON.parse(res);
        } catch (error) {
            console.error(`Ошибка парсинга куки "${cookieName}":`, error);
            // Вернем не парсированный результат (строку)
            return res;
        }
    }

    // Если кука не найдена, вернем null
    return null;
}

// Удаляем куки
function deleteCookie(nameCookie) {
    // Получите все cookie текущего документа
    var cookies = document.cookie.split(";");

    // Переберите все cookie и найдите нужное
    for (var i = 0; i < cookies.length; i++) {
        var cookieParts = cookies[i].split("="),
            cookieName = cookieParts[0].trim();

        if (cookieName === nameCookie) {
            document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

            if (document.querySelector('.Pl-plugin-errors-widget')) {
                document.querySelector('.Pl-plugin-errors-widget').remove();
            }

            break;
        }
    }
}

function isMobile() {
    const userAgent = navigator.userAgent;
    var answer;

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
        answer = true;
    } else {
        answer = false;
    }

    return answer;
}

function XMLHttpRequestAJAX(data) {
    var getData = {};
    var sendData = {
        url: data.url || "",
        method: data.method || "POST",
        body: data.body || ""
    }

    var xhr = new XMLHttpRequest();

    if (sendData.method === "POST") {
        sendData.body = JSON.stringify(sendData.body);
        xhr.open("POST", sendData.url, (data.async) ? data.async : false);
    } else {
        xhr.open(sendData.method, sendData.url + "?" + new URLSearchParams(sendData.body).toString(), (data.async) ? data.async : false);
    }

    xhr.setRequestHeader('APPTOKEN', 'e66a54282eb3dfcb12383577c08fe6c4');
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.send(sendData.body);

    if (data.async && data.callback) {
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                data.callback(xhr.responseText)
            }
        };
    } else {
        try {
            getData.data = JSON.parse(xhr.responseText);
        } catch (error) {
            getData.data = xhr.responseText;
        }
    }

    return getData;
}

// Функция для определения местоположения
function getLocationInfo() {
    var getLocationCookie = getCookie(global_cookieName_Location);
    if (getLocationCookie) return false;

    var getLocation = XMLHttpRequestAJAX({
        url: "https://ipapi.co/json/",
        method: "GET",
    });

    const objLocation = {};
    objLocation["country"] = getLocation.data.country_name;
    objLocation["code"] = getLocation.data.country_code;
    objLocation["currency"] = getLocation.data.currency;

    setCookie({
        name: global_cookieName_Location,
        data: objLocation,
        expires: "infinite",
        path: "/"
    });

    // если полученное валюты нет в нашем списке "arrayCurrency", то по дефолту подставляем EUR
    var isCurrency = arrayCurrency.filter(obj => {
        return obj.currency == objLocation.currency;
    });

    if (isCurrency.length === 0) {
        getLocationCookie = getCookie(global_cookieName_Location);
        getLocationCookie["currency"] = "EUR";

        setCookie({
            name: global_cookieName_Location,
            data: getLocationCookie,
            expires: "infinite",
            path: "/"
        });
    }
}

// взаимодействие с get-параметрами в URL
class URLControl {
    constructor() {}

    getAllParams() {
        const currentURL = window.location.href;
        const params = {};
        const urlParts = currentURL.split("?");

        if (urlParts.length <= 1) return params;

        const urlParams = urlParts[1].split("&");

        urlParams.forEach(param => {
            const paramParts = param.split("=");
            params[paramParts[0]] = paramParts[1];
        });

        return params;
    }

    getParam(key) {
        const currentURL = window.location.href;

        key = key.replace(/[\[\]]/g, "\\$&");
        const regex = new RegExp("[?&]" + key + "(=([^&#]*)|&|#|$)");
        const results = regex.exec(currentURL);
        if (!results) return null;
        if (!results[2]) return '';

        // Получаем значение параметра
        const paramValue = decodeURIComponent(results[2].replace(/\+/g, " "));

        // Проверяем, содержится ли в значении запятая
        if (paramValue.includes(',')) {
            // Если да, разбиваем значение на массив
            return paramValue.split(',').map(value => value.trim());
        }

        // Если запятых нет, возвращаем строку
        return paramValue;
    }



    // проверяем, есть ли уже такой GET параметр
    // проверяем, в сущ. параметре кол-во значений



    setParam(key, value) {
        if (typeof value === "number") {
            value = value.toString();
        }

        var arrayParams = [];
        // Получаем текущий URL
        const url = new URL(window.location);

        // проверяем, есть ли уже такой GET параметр
        var existingValues = this.getParam(key);
        console.log("existingValues", existingValues)
        if (existingValues !== null) {
            // проверяем, в сущ. параметре есть несколько значений или нет
            if (typeof existingValues === "object") {
                existingValues.forEach(value => {
                    // если есть несколько значений, тогда каждое значение кидаем в массив "arrayParams"
                    if (!arrayParams.includes(value)) {
                        arrayParams.push(value);
                    }
                });
            } else {
                // если суще. значение не равно новому полученному, тогда записываем его в массив "arrayParams"
                if (existingValues !== value) {
                    arrayParams.push(existingValues);
                }
            }

            if (typeof value === 'object') {
                existingValues.forEach(valueItem => {
                    if (!arrayParams.includes(valueItem)) {
                        arrayParams.push(valueItem);
                    }
                });
            } else {
                if (!arrayParams.includes(value)) {
                    arrayParams.push(value);
                }
            }
        } else {
            arrayParams.push(value);
        }

        console.log("arrayParams", arrayParams)

        value = arrayParams.join(',');

        // Устанавливаем (или обновляем) параметр
        url.searchParams.set(key, value);

        // Обновляем URL в адресной строке без перезагрузки страницы
        window.history.pushState({}, '', url.toString());
    }


    removeParam(name) {
        const currentURL = window.location.href;
        const urlParts = currentURL.split('?');

        if (urlParts.length >= 2) {
            const baseUrl = urlParts[0];
            const params = new URLSearchParams(urlParts[1]);

            if (params.has(name)) {
                params.delete(name);
                const newURL = baseUrl + '?' + params.toString();

                window.history.replaceState(null, '', newURL);

                // Визуальное изменение URL без перезагрузки страницы
                window.history.pushState(null, '', newURL);
            }
        }
    }

    editParam(name, value) {
        const currentURL = window.location.href;
        const urlParts = currentURL.split('?');

        if (urlParts.length >= 2) {
            const baseUrl = urlParts[0];
            const params = new URLSearchParams(urlParts[1]);

            if (params.has(name)) {
                params.set(name, value);
                const newURL = baseUrl + '?' + params.toString();

                window.history.replaceState(null, '', newURL);

                // Визуальное изменение URL без перезагрузки страницы
                window.history.pushState(null, '', newURL);
            }
        }
    }
}