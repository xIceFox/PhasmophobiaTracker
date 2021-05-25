let langSelector = document.querySelector("#langSwitch")
langSelector.addEventListener("click", toggleLanguage)

let taskElements = document.querySelectorAll(".task")
taskElements.forEach(createHTMLSelector)

function createHTMLSelector(_currentSelect,index) {
    _currentSelect.innerHTML = ""
    let tasks = chooseTasks();
    for (let i = 0; i < tasks.length; i++) {
        let option = document.createElement("option")
        option.setAttribute("value", i)
        option.innerHTML = tasks[i]
        _currentSelect.appendChild(option)
    }
}

function chooseTasks() {
    let activeLang = langSelector.dataset.lang;
    if (activeLang === "de") return OBJECTIVES.de
    else return OBJECTIVES.en
}

function toggleLanguage() {
    let activeLang = langSelector.dataset.lang;
    if (activeLang === "de") {
        langSelector.innerHTML = "DE"
        langSelector.dataset.lang = "en"
        taskElements.forEach(createHTMLSelector)
    }
    else if (activeLang === "en") {
        langSelector.innerHTML = "EN"
        langSelector.dataset.lang = "de"
        taskElements.forEach(createHTMLSelector)
    }
}


