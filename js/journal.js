let url_string = window.location.href
let url = new URL(url_string)
let ghostName = url.searchParams.get("GhostName")
let task1 = url.searchParams.get("Task1")
let task2 = url.searchParams.get("Task2")
let task3 = url.searchParams.get("Task3")

let ghostNameElement = document.getElementById("GhostName")
let task1Element  = document.getElementById("Task1")
let task2Element = document.getElementById("Task2")
let task3Element = document.getElementById("Task3")

ghostNameElement.appendChild(document.createTextNode(ghostName))
if(task1>0)task1Element.appendChild(document.createTextNode(OBJECTIVES.en[task1]))
if(task2>0)task2Element.appendChild(document.createTextNode(OBJECTIVES.en[task2]))
if(task3>0)task3Element.appendChild(document.createTextNode(OBJECTIVES.en[task3]))





