const nav = document.querySelector('#main');
const topOfNav = nav.offsetTop; // nav 最上方與頁面最上方的距離

function fixNav() {
    if (window.scrollY >= topOfNav) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
    } else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixed-nav')
    }
}

window.addEventListener('scroll', fixNav)