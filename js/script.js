let header__enl = document.getElementById("header__enl")
let section__log = document.getElementById("section__log")
let login__close = document.getElementById("login__close")
let login__link = document.getElementById("login__link")

const toggleLog = () => {
    section__log.classList.toggle("ocultar");
}

header__enl.addEventListener("click", toggleLog);
login__close.addEventListener("click", toggleLog);
login__link.addEventListener("click", toggleLog);

