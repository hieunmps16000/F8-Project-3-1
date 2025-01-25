const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const navbarItemActive = $('.navbar__item--active');
const navbarLine = $('.navbar__line');
const menuPC = $('#menu-pc');
const menuMobile = $('#menu-mobile');
const menuToggle = $('.menu-toggle');
const tabletMobileMenu = $('.tablet-mobile-header');
const menuOverlay = $('.menu-overlay');
const closeMenuDrawerBtn = $('.close-menu__btn');

const app = {
    handleCopyHTML(value1, value2) {
        value1.innerHTML = value2.innerHTML;
    },
    handleNavbarActive() {
        const navbarItems = $$('.navbar__item');
        // Handle set style left property for navbar__line
        navbarLine.style.left = navbarItemActive.offsetLeft + 'px';

        // Handle toggle `.navbar__item--active` and set style left property when clicking
        navbarItems.forEach(navbarItem => {
            navbarItem.onclick = function() {
                $$('.navbar__item--active').forEach(navbarItemActive => {
                    navbarItemActive.classList.remove('navbar__item--active');
                });
                this.classList.add('navbar__item--active');
                navbarLine.style.left = this.offsetLeft + 'px';
            }
        });
    },
    handleEvents() {
        // Handle show menu drawer
        menuToggle.onclick = () => {
            tabletMobileMenu.classList.add('tablet-mobile-header--active');
        }

        // Handle close menu drawer
        menuOverlay.onclick = () => {
            tabletMobileMenu.classList.remove('tablet-mobile-header--active');
        }

        closeMenuDrawerBtn.onclick = () => {
            tabletMobileMenu.classList.remove('tablet-mobile-header--active');
        }
    },
    start() {
        this.handleCopyHTML(menuMobile, menuPC);
        this.handleEvents();
        this.handleNavbarActive();
    }
}

app.start();