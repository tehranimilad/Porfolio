const pages = document.getElementByTagName('section')
const buttons = document.getElementByTagName('button')


function onClickHandle(event) {
    event.target.innerText.toLowerCase().replaceAll(' ', '.')

    for(let = 0; i< pages.length; i++) {
        if(pageId === pages[i].id) {
            pages[i].className = "current-page"
        } else {
            pages[i].className = "hidden-page"
        }
    }
    document.getElementById(`page${}`).className = "current-page"
    document.getElementById(`pages${}`).className = "hidden-page"
}

for (let i = 0, buttons.length, i++) {
    buttons[i].addEventListener('click', onClickHandle)
}