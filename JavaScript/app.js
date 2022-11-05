// About Me Page 
// Creating variables for buttons displayed on about me page
const pages = document.getElementsByTagName("section")
const buttons = document.getElementsByClassName("buttonNav")

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

// Grabbing the About Me Section in Order to Create a Link that will open up my resume
const aboutMeResume = document.getElementById('aboutMeSec')
const viewResume = document.createElement('a')
viewResume.innerText = 'View Resume'
viewResume.setAttribute('href', 'https://drive.google.com/file/d/1X9zyneOCBbtiCC30dXeORUYDqGslzxeE/view?usp=share_link')
viewResume.setAttribute("target", "_blank")
viewResume.setAttribute('class', 'aboutMeResumeLink')
aboutMeResume.append(viewResume)

// Creating a link users to contact me 
const contactMe = document.createElement('a')
contactMe.innerText = 'Email Me'
contactMe.setAttribute('href', 'mailto:tehranimilad92@gmail.com')
contactMe.setAttribute("target", "_blank")
contactMe.setAttribute('class', 'aboutMeResumeLink')
aboutMeResume.append(contactMe)



