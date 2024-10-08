export default function apiDoc() {
    header();
    method_product();
    method_products();

    function header() {
        var headerHTML = document.createElement("section");
        headerHTML.classList.add("header-api");
        headerHTML.innerHTML = `
        <div class="G-container">
            <h1 class="title">API Luxury World</h1>
            <span class="server">Сервер:<span class="name">https://api.luxuryworld.luxe</span></span>
        </div>`;
        document.getElementById("app").append(headerHTML);
    }

    function method_product() {
        var methodHTML = document.createElement("div");
        methodHTML.classList.add("method-item");
        methodHTML.classList.add("get");
        methodHTML.innerHTML = `
        <div class="G-container">
            <div class="method-wrapper">
                <div class="header">
                    <span class="method-type">GET</span>
                    <span class="path">/product</span>
                    <span class="desc">Получить товар по ID или артиклу</span>
                </div>
                <div class="table-params-wrapper">
                    <span class="title">Параметры</span>
                    <table>
                        <thead>
                            <tr>
                                <th width="200">Параметр</th>
                                <th width="150">Тип</th>
                                <th width="270">Пример</th>
                                <th>Описание</th>
                            </tr>
                            <tbody>
                                <tr>
                                    <td><code>id</code></td>
                                    <td><code>integer</code></td>
                                    <td><code>67</code></td>
                                    <td>ID товара</td>
                                </tr>
                                <tr>
                                    <td><code>article</code></td>
                                    <td><code>string</code></td>
                                    <td><code>441.NL.4820.RT.BUC23</code></td>
                                    <td>артикул товара</td>
                                </tr>
                            </tbody>
                        </thead>
                    </table>
                </div>
            </div>
        </div>`;
        document.getElementById("app").append(methodHTML);
    }

    function method_products() {
        var methodHTML = document.createElement("div");
        methodHTML.classList.add("method-item");
        methodHTML.classList.add("get");
        methodHTML.innerHTML = `
        <div class="G-container">
            <div class="method-wrapper">
                <div class="header">
                    <span class="method-type">GET</span>
                    <span class="path">/products</span>
                    <span class="desc">Получение списка товаров, удовлетворяющих заданному фильтру</span>
                </div>
                <div class="table-params-wrapper">
                    <span class="title">Параметры</span>
                    <table>
                        <thead>
                            <tr>
                                <th width="200">Параметр</th>
                                <th width="150">Тип</th>
                                <th width="270">Пример</th>
                                <th>Описание</th>
                            </tr>
                            <tbody>
                                <tr>
                                    <td><code>limit</code></td>
                                    <td><code>integer</code></td>
                                    <td><code>20 | 50 | 100</code></td>
                                    <td>Количество элементов в ответе</td>
                                </tr>
                                <tr>
                                    <td><code>category</code></td>
                                    <td><code>string</code></td>
                                    <td><code>watch</code><code>bracelets</code></td>
                                    <td>Товараная группа</td>
                                </tr>
                                <tr>
                                    <td><code>manufacturer</code></td>
                                    <td><code>string</code></td>
                                    <td><code>HUBOLT</code></td>
                                    <td>Производитель</td>
                                </tr>
                                <tr>
                                    <td><code>minPrice</code></td>
                                    <td><code>integer</code></td>
                                    <td><code>10500</code></td>
                                    <td>Минимальная цена</td>
                                </tr>
                                <tr>
                                    <td><code>maxPrice</code></td>
                                    <td><code>integer</code></td>
                                    <td><code>300900</code></td>
                                    <td>Максимальная цена</td>
                                </tr>
                            </tbody>
                        </thead>
                    </table>
                </div>
            </div>
        </div>`;
        document.getElementById("app").append(methodHTML);
    }
}