let taskElements = document.querySelectorAll(".task")
taskElements.forEach(createHTMLSelector)

function createHTMLSelector(_currentSelect,index) {
    for (let i = 0; i < OBJECTIVES.length; i++) {
        let option = document.createElement("option")
        option.setAttribute("value", i)
        option.appendChild(document.createTextNode(OBJECTIVES[i]))
        _currentSelect.appendChild(option)
    }
}
