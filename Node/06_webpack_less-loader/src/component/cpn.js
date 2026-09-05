import "../css/div_style.css"
import "../css/title_style.less"

// 创建div
const divE1 = document.createElement("div")
divE1.textContent = "Hello World"
divE1.classList.add("content")
document.body.append(divE1)


// 创建h2文件
const titleE1 = document.createElement("h2")
titleE1.textContent = "哈哈哈哈"
titleE1.classList.add("title")
document.body.append(titleE1)