const nav = document.querySelector(`#nav`);
const navBtn = document.querySelector(`#nav-btn`);
const navBtnImg = document.querySelector(`#nav-btn-img`);

navBtn.onclick = () => {
    if (nav.classList.toggle(`open`)) {
        navBtnImg.src ="./img/icons/nav_close.svg";
    } else {
        navBtnImg.src ="./img/icons/nav_open.svg";
    }
}

AOS.init({
    // disable: 'mobile' // для отключения анимации на мобильных устройствах
    // once: true // для использования единственный раз при загрузке страницы
});