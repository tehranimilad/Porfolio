// About Me Page 
// Creating variables for buttons displayed on about me page
const pages = document.getElementsByTagName("section")
const buttons = document.getElementsByTagName("button")

// Creating the function that will show/hide specific content
function buttonClick(event) {
    const pageId = event.target.innerText

// Creating loop that selects page to display based on which button is clicked.
    for (i=0; i < buttons.length; i++) {
        if (pageId === pages[i].id) {
            pages[i].className = "current-page"
        } else {
            pages[i].className = "hidden-page"
        }
    }
}

// Creating event listener that will wait for the button to be clicked
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', buttonClick)
}
