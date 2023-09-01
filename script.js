const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// remove menu mobile
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

//blur to header
const blurHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header')
        : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

//E-mail
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    //serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_q1luu2m', 'template_jgi4vrd', '#contact-form', "ufanPLkyvLnjhgVME")
        .then(() => {
            //If successfull
            contactMessage.textContent = 'Message Sent Successfully ✅'
        }, () => {
            //if unsuccessful
            contactMessage.textContent = 'Message not Sent (Service Error) ❌'
        })
}

contactForm.addEventListener('submit', sendEmail)

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 500 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2000,
    delay:200
})

sr.reveal(`.home__data,.home__social,.contact__container`)
sr.reveal(`.home__image`,{origin:'bottom'})
sr.reveal(`.about__data,.section__subtitle`,{origin:'left'})
sr.reveal(`.about__image`,{origin:'right'})
sr.reveal(`.services__card`,{interval:100})
