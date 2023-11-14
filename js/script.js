let header__enl = document.getElementById("header__enl")
let section__log = document.getElementById("section__log")
let login__close = document.getElementById("login__close")
let login__link = document.getElementById("login__link")
let header__search = document.getElementById("header__search")
let section__buscar = document.getElementById("section__buscar")

const toggleLog = () => {
    section__log.classList.toggle("ocultar");
    section__buscar.classList.add("ocultar")
}

header__enl.addEventListener("click", toggleLog);
login__close.addEventListener("click", toggleLog);
login__link.addEventListener("click", toggleLog);

header__search.addEventListener("click", () =>{
    section__buscar.classList.toggle("ocultar")
    section__log.classList.add("ocultar")
})