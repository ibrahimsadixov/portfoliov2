const mode = document.querySelectorAll(".mode")
const body = document.getElementById("body")
const toggleMenuu = document.querySelector(".toggleMenu")
const nav = document.getElementById("nav")
const skill = document.querySelectorAll(".skill")
const a = document.querySelectorAll(".a")
const moon = document.querySelectorAll(".fa-moon")
const section = document.querySelectorAll(".section")
const codeText = document.querySelectorAll(".code-text")
const storedMode = localStorage.getItem("mode");
const btn = document.getElementById("btn")
const footer = document.getElementById("footer")
const home = document.getElementById("home")
const link = document.querySelectorAll(".link")
const header = document.querySelectorAll(".header")
const hide = document.querySelector("#hide")
const musicPlay = document.querySelector(".music")
const musicText = document.querySelector(".music-text")

mode.forEach(element => {
    element.addEventListener("click", () => {
        home.classList.toggle("home-dark")
        musicText.classList.toggle("music-text-dark")
        musicPlay.classList.toggle("music-dark")
        footer.classList.toggle("footer-dark")
        body.classList.toggle("body-dark")
        nav.classList.toggle("nav-dark")
        btn.classList.toggle("button-dark")
        btn.classList.toggle("button")
        hide.classList.toggle("hide-dark")
        toggleMenuu.classList.toggle("toggleMenu-dark")
        moon.forEach(element => {

            element.classList.toggle("fa-moon");
            element.classList.toggle("fa-sun");
            body.classList.toggle("body-dark")
            nav.classList.toggle("nav-dark")

        });
        a.forEach(element => {
            element.classList.toggle("nav-a-dark")
        });
        header.forEach(element => {
            element.classList.toggle("header-dark")
        });
        link.forEach(element => {
            element.classList.toggle("link-dark")

        });
        skill.forEach(e => {
            e.classList.toggle("skill-dark")
        });
        section.forEach(e => {
            e.classList.toggle("section-dark")
        });
        codeText.forEach(e => {
            e.classList.toggle("code-dark")
        });

        if (body.classList.contains("body-dark")) {
            localStorage.setItem("mode", "dark");
        } else {
            localStorage.setItem("mode", "light");
        }
    })
});

if (localStorage.getItem("mode") === "dark") {
    musicText.classList.add("music-text-dark")
    musicPlay.classList.add("music-dark")
    home.classList.add("home-dark")
    footer.classList.add("footer-dark")
    body.classList.add("body-dark");
    nav.classList.add("nav-dark");
    hide.classList.add("hide-dark")
    toggleMenuu.classList.add("toggleMenu-dark")
    btn.classList.remove("button")
    btn.classList.add("button-dark")
    moon.forEach(element => {

        element.classList.add("fa-sun");
        element.classList.remove("fa-moon");
        body.classList.toggle("body-dark")
        nav.classList.toggle("nav-dark")

        element.classList.toggle("fa-moon");
        element.classList.toggle("fa-sun");


    });
    a.forEach(element => {
        element.classList.add("nav-a-dark")
    });
    header.forEach(element => {
        element.classList.add("header-dark")
    });
    link.forEach(element => {
        element.classList.add("link-dark")

    });
    skill.forEach(e => {
        e.classList.add("skill-dark")
    });
    section.forEach(e => {
        e.classList.add("section-dark")
    });
    codeText.forEach(e => {
        e.classList.add("code-dark")
    });
} else {
    hide.classList.remove("hide-dark")
    toggleMenuu.classList.remove("toggleMenu-dark")
    footer.classList.remove("footer-dark")
    home.classList.remove("home-dark")
    body.classList.remove("body-dark");
    nav.classList.remove("nav-dark");
    musicText.classList.remove("music-text-dark")
    musicPlay.classList.remove("music-dark")
    btn.classList.add("button")
    btn.classList.remove("button-dark")
    moon.forEach(element => {
        element.classList.add("fa-moon");
        element.classList.remove("fa-sun");
        body.classList.toggle("body-dark")
        nav.classList.toggle("nav-dark")

        element.classList.toggle("fa-moon");
        element.classList.toggle("fa-sun");


    });
    a.forEach(element => {
        element.classList.remove("nav-a-dark")
    });
    header.forEach(element => {
        element.classList.remove("header-dark")
    });
    skill.forEach(e => {
        e.classList.remove("skill-dark")
    });
    link.forEach(element => {
        element.classList.remove("link-dark")

    });
    section.forEach(e => {
        e.classList.remove("section-dark")
    });
    codeText.forEach(e => {
        e.classList.remove("code-dark")
    });
}

