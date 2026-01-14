const menu_btn = document.querySelector('.menu-btn');;
const nav_links = document.querySelector('nav ul');
let menu_open = false;
menu_btn.addEventListener('click', () => {
    if (!menu_open) {
        menu_btn.classList.add('open');
        nav_links.classList.add('show');
        menu_open = true;
    }
    else {
        menu_btn.classList.remove('open');
        nav_links.classList.remove('show');
        menu_open = false;
    }
});