export default class FormFields {

    inputText(data) {
        var label = (data.label) ? `<span class="title-field">${data.label}</span>` : "",
            name = (data.name) ? data.name : "",
            placeholder = (data.placeholder) ? `placeholder="${data.placeholder}"` : "",
            autocomplete = (data.autocomplete) ? `autocomplete="${data.autocomplete}"` : "",
            icon = (data.icon) ? `<i class="icon ${data.icon}"></i>` : "",
            validate = (data.validate !== undefined && data.validate == "true") ? `validate="true"` : "";

        var fieldTAG = document.createElement("div");
        fieldTAG.classList.add("field-container");
        fieldTAG.setAttribute("type", "input-text");
        if (data.field_class) fieldTAG.classList.add(data.field_class);

        var fieldHTML = `
        ${label}
        <div class="input-wrapper ${(data.icon) ? "is-icon" : ""}">
            ${icon}
            <input type="text" name="${name}" value="" ${placeholder} ${autocomplete} class="field-input" ${validate}>
        </div>`;
        fieldTAG.innerHTML = fieldHTML;

        if (data.name && data.name === "password") {
            fieldTAG.querySelector("input").setAttribute("type", "password")
        }

        if (data.mask) {
            var input = fieldTAG.querySelector("input");
            if (data.mask === "phone") {
                IMask(input, {mask: '+0 (000) 000-00-00', min: 16, lazy: true});
                input.onblur = function() {
                    if (input.value.length !== 18) input.value = "";
                };
            }
            if (data.mask === "number") {
                IMask(input, {mask: Number, radix: '.', thousandsSeparator: ' ', lazy: false});
            }
            if (data.mask === "date") {
                IMask(input, {mask: Date, lazy: false});
            }
            if (data.mask === "email") {
                var pattern = /^([a-z0-9_\.-])+[@][a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;

                input.onblur = function() {
                    if (!pattern.test(input.value)) {
                        input.value = "";
                    }
                };
            }
            if (data.mask === "domain") {
                var pattern = /^https:\/\/([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;

                input.onblur = function() {
                    if (!pattern.test(input.value)) {
                        input.value = "";
                    }
                };
            }
        }

        return fieldTAG;
    }

    inputHidden(data) {
        var label = (data.label) ? `<span class="title-field">${data.label}</span>` : "",
            name = (data.name) ? data.name : "",
            value = (data.value) ? data.value : "";

        var fieldTAG = document.createElement("div");
        fieldTAG.classList.add("field-container");
        fieldTAG.setAttribute("type", "input-hidden");
        var fieldHTML = `
        ${label}
        <input type="text" name="${name}" value="${value}" class="field-input">`;
        fieldTAG.innerHTML = fieldHTML;

        return fieldTAG;
    }


    textarea(data) {
        var label = (data.label) ? `<span class="title-field">${data.label}</span>` : "",
            name = (data.name) ? data.name : "",
            placeholder = (data.placeholder) ? `placeholder="${data.placeholder}"` : "",
            validate = (data.validate != undefined && data.validate == "true") ? `validate="true"` : "";

        var fieldTAG = document.createElement("div");
        fieldTAG.classList.add("field-container");
        fieldTAG.setAttribute("type", "textarea");
        if (data.field_class) fieldTAG.classList.add(data.field_class);
        var fieldHTML = `
        ${label}
        <textarea name="${name}" ${placeholder} ${validate}></textarea>`;
        fieldTAG.innerHTML = fieldHTML;

        return fieldTAG;
    }

    radio(data) {
        var label = (data.label) ? `<span class="title-field">${data.label}</span>` : "",
            name = (data.name) ? data.name : "",
            validate = (data.validate != undefined && data.validate == "true") ? `validate="true"` : "";

        var fieldTAG = document.createElement("div");
        fieldTAG.classList.add("field-container");
        fieldTAG.setAttribute("type", "input-radio");
        if (data.field_class) fieldTAG.classList.add(data.field_class);
        var fieldHTML = ``;
        fieldHTML = `${label}
        <div class="grid-fields-array">`;

        if (data.value && Object.keys(data.value).length !== 0) {
            for (var val in data.value) {
                var radioItem = data.value[val];

                fieldHTML += `
                <label>
                    <input type="radio" name="${name}" value="${val}" ${validate}>
                    <span class="title">${radioItem}</span>
                </label>`;
            }
        }
        fieldHTML += `</div>`;
        fieldTAG.innerHTML = fieldHTML;

        return fieldTAG;
    }

    checkbox(data) {
        var label = (data.label) ? `<span class="title-field">${data.label}</span>` : "",
            name = (data.name) ? data.name : "",
            validate = (data.validate != undefined && data.validate == "true") ? `validate="true"` : "";

        var fieldTAG = document.createElement("div");
        fieldTAG.classList.add("field-container");
        fieldTAG.setAttribute("type", "input-checkbox");
        if (data.field_class) fieldTAG.classList.add(data.field_class);

        var fieldHTML = ``;
        fieldHTML = `${label}<div class="grid-fields-array">`;

        if (data.value && Object.keys(data.value).length !== 0) {
            for (var val in data.value) {
                var radioItem = data.value[val];

                fieldHTML += `
                <label>
                    <input type="checkbox" name="${name}" value="${val}" ${validate}>
                    <span class="title">${radioItem}</span>
                </label>`;
            }
        }
        fieldHTML += `</div>`;
        fieldTAG.innerHTML = fieldHTML;

        return fieldTAG;
    }


    switchRadio(data) {
        var id_checkbox = Math.floor(Math.random() * (1000000 - 100000 + 1)) + 100000;
        var switchTAG = document.createElement("div");
        switchTAG.classList.add("G-switch-radio");
        switchTAG.innerHTML = `
        <div class="row-container">
            <input type="checkbox" name="${data.name}" id="${id_checkbox}">
            <label for="${id_checkbox}"></label>
        </div>`;

        var label = switchTAG.querySelector("label"),
            input = switchTAG.querySelector("input");

        if (data.checked == "on") {
            input.checked = true;
        } else {
            input.checked = false;
        }

        label.addEventListener("click", function (e) {
            if (data.callback) {
                var changeActivity = (input.checked == true) ? false : true;
                data.callback(changeActivity);
            }
        });

        return switchTAG;
    }


    // -------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------

    // заполнение полей
    setValuesForm(form, values) {
        // Получение всех тегов "field-container"
        var fieldContainers = form.querySelectorAll(".field-container");

        fieldContainers.forEach((field) => {
            var typeField = field.getAttribute("type");

            if (typeField === "input-text" || typeField === "input-hidden") {
                var input = field.querySelector("input"),
                    name = input.getAttribute("name");

                input.value = values[name];
            }

            if (typeField === "input-radio") {
                var radio = field.querySelector("input"),
                    name = radio.getAttribute("name"),
                    radioArray = field.querySelectorAll(".grid-fields-array input[type='radio']");

                radioArray.forEach(function(radioItem) {
                    var value = radioItem.getAttribute("value");
                    if (value == values[name]) radioItem.checked = true;
                });
            }

            if (typeField === "textarea") {
                var textarea = field.querySelector("textarea"),
                    name = textarea.getAttribute("name");

                textarea.innerHTML = values[name];
            }

        });
    }


    // получаем значение полей
    getValuesForm(form) {
        var formData = {},
            fieldsValid = [],
            arrayCheckbox = [];

        // Получение всех тегов "field-container"
        var fieldContainers = form.querySelectorAll(".field-container");

        // Перебор всех найденных элементов
        fieldContainers.forEach(function(container) {
            var typeField = container.getAttribute("type");

            if (typeField === "input-text" || typeField === "input-hidden") {
                var field = container.querySelector("input"),
                    name = field.getAttribute("name"),
                    value = field.value,
                    validate = field.getAttribute("validate");

                if (validate != null && validate === "true") fieldsValid.push(name);

                formData[name] = value;
            }

            if (typeField === "input-radio") {
                var field = container.querySelector("input"),
                    name = field.getAttribute("name"),
                    validate = field.getAttribute("validate"),
                    radioArray = container.querySelectorAll(".grid-fields-array input[type='radio']");

                if (validate != null && validate === "true") fieldsValid.push(name);

                formData[name] = "";

                radioArray.forEach(function(radio) {
                    if (radio.checked) {
                        formData[name] = radio.value;
                    }
                });
            }

            if (typeField === "input-checkbox") {
                var field = container.querySelector("input"),
                    name = field.getAttribute("name"),
                    validate = field.getAttribute("validate"),
                    checkboxArray = container.querySelectorAll(".grid-fields-array input[type='checkbox']");

                if (validate != null && validate === "true") fieldsValid.push(name);

                checkboxArray.forEach(function(checkbox) {
                    if (checkbox.checked) {
                        arrayCheckbox.push(checkbox.value);
                    }
                });

                formData[name] = arrayCheckbox;
            }

            if (typeField === "textarea") {
                var textarea = container.querySelector("textarea"),
                    name = textarea.getAttribute("name"),
                    value = textarea.value,
                    validate = textarea.getAttribute("validate");

                if (validate != null && validate === "true") fieldsValid.push(name);

                formData[name] = value;
            }

        });

        var isValid = this.validate(form, fieldsValid, formData);

        if (isValid == true) {
            return formData;
        } else {
            return {error: isValid};
        }
    }

    validate(form, fieldsValid, formData) {
        var isValid = 0;

        fieldsValid.forEach(function (field) {
            if (formData[field] == "" || formData[field].length == 0) {
                isValid = 1;
                form.querySelector("*[name='"+field+"']").closest(".field-container").classList.add("error");
            }
        });

        var fieldsForm = form.querySelectorAll(".field-container.error");
        fieldsForm.forEach(function (field) {
            field.addEventListener("click", function () {
                if (field.classList.contains("error")) {
                    this.classList.remove("error");
                }
            })
        });

        if (isValid == 0) {
            return true;
        } else {
            return "Есть не заполненные поля";
        }
    }

}