const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const navbarItems = $$('.navbar__item');
const navbarItemActive = $('.navbar__item--active');
const navbarLine = $('.navbar__line');

const app = {
    handleNavbarActive() {
        // Handle set style left property for navbar__line
        navbarLine.style.left = navbarItemActive.offsetLeft + 'px';

        // Handle toggle `.navbar__item--active` and set style left property when clicking
        navbarItems.forEach(navbarItem => {
            navbarItem.onclick = function() {
                $('.navbar__item--active').classList.remove('navbar__item--active');
                this.classList.add('navbar__item--active');
                navbarLine.style.left = this.offsetLeft + 'px';
            }
        });
    },
    start() {
        this.handleNavbarActive();
    }
}

app.start();