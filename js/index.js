const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

//Open the nav
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

//close the nav
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})