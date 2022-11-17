const slideContainer = document.querySelector(".slide_content")
const body = document.querySelector("body")
const container = document.querySelector(".container")
const buttonsContainer = document.querySelector(".buttons-container")

const btnSrc = [
    'img/HTML_icon.png',
    'img/CSS_icon.png',
    'img/JS_icon.png',
]

btnSrc.forEach(element => {
    const img = document.createElement("img");
    img.className = "btn"
    img.src = element;
    buttonsContainer.append(img)
})

const footerDecoration = document.createElement("div")
footerDecoration.className = "footer_cont_decoration";
container.append(footerDecoration)

// const containerSrc = [
//     'img/iconHTML.png',
//     'img/iconCSS.png',
//     'img/iconJS.png',
// ]

// containerSrc.forEach(element => {
//     const divContainer = document.createElement("div"),
//         img = document.createElement("img");
//     img.className = "img";
//     img.src = element;
//     const longLine = document.createElement("div")
//     longLine.className = "text_decoration long-line";
//     const shortLine = document.createElement("div")
//     shortLine.className = "text_decoration short-line";
//     const longLine1 = document.createElement("div")
//     longLine1.className = "text_decoration long-line";
//     const footerContBar = document.createElement("div")
//     footerContBar.className = "footer_cont_bar"
//     divContainer.append(img, longLine, shortLine, longLine1, footerContBar)
//     slideContainer.append(divContainer)
// })

const buttons = document.querySelectorAll('.btn');
const cardsStyle = [
    {position: '600px', color: '#EFADC3FF'},
    {position: '0', color: '#9392E2FF'},
    {position: '-800px', color: '#EDE34DFF'},
];

const initialPosition = () => {
    buttons[0].classList.add('active');
    body.style.backgroundColor = cardsStyle[0].color;
    slideContainer.style.marginLeft = cardsStyle[0].position;
}

const slideshow = () => {
    initialPosition()
    buttons.forEach((btn, idx) => {
        btn.addEventListener('click', () => {
            buttons.forEach(el => el.classList.remove('active'));
            btn.classList.add('active');
            body.style.backgroundColor = cardsStyle[idx].color;
            slideContainer.style.marginLeft = cardsStyle[idx].position;
        });
    });
};

slideshow()

const containerSrc_card = [
   {title:"HTML 5", version:"V-5", info:"limbaj de ghiper text", src:"img/iconHTML.png", href:"https://www.w3schools.com/html/default.asp"},
   {title:"CSS", version:"V-3", info:"limbaj stilistic", src:"img/iconCSS.png", href:"https://www.w3schools.com/css/default.asp"},
   {title:"JavaScript", version:"V-22.11B", info:"limbaj de programare", src:"img/iconJS.png", href:"https://www.w3schools.com/js/"},
]



containerSrc_card.forEach(element => {
    containerSrc_card.forEach(item => {
        const divContainer = document.createElement("div"),
            img = document.createElement("img");
            img.className = "img";
            img.src = item.src;
            const longLine = document.createElement("div")
            longLine.className = "text_decoration long-line";
            longLine.innerHTML = item.title
            const shortLine = document.createElement("div")
            shortLine.className = "text_decoration short-line";
            shortLine.innerHTML = item.version
            const longLine1 = document.createElement("div")
            longLine1.className = "text_decoration long-line";
            longLine1.innerHTML = item.info
            const footerContBar = document.createElement("div")
            footerContBar.className = "footer_cont_bar"

            divContainer.append(img, longLine, shortLine, longLine1, footerContBar)
            slideContainer.append(divContainer)
    })
})