const pages = document.getElementsByTagName("section")
const buttons = document.getElementsByTagName("button")

function buttonClick(event) {
    const pageId = event.target.innerText


    for (i=0; i < buttons.length; i++) {
        if (pageId === pages[i].id) {
            pages[i].className = "current-page"
        } else {
            pages[i].className = "hidden-page"
        }
    }
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', buttonClick)
}
