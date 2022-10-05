
const navItems = [
    "topNav",
    "weightNav",
    "bodyNav",
    "largeNav",
    "experimentsNav",
    "getNav",
]

window.onload = () => {
    console.log("loaded")

    let charsRef = document.getElementById("characters")
    let numsRef = document.getElementById("numbers")
    let symbolsRef = document.getElementById("symbols")


    for (let i = 65; i <= 90; i++) {
        charsRef.innerHTML += "<div class=\"letterBox\">\n" +
                        `        <p class=\"regular\">&#${i}&#${97 + (i - 65)}</p>\n` +
                        "     </div>"
    }

    for (let i = 48; i <= 57; i++) {
        numsRef.innerHTML += "<div class=\"letterBox\">\n" +
            `        <p class=\"regular\">&#${i}</p>\n` +
            "     </div>"
    }

    for (let i = 33; i <= 39; i++) {
        if (i === 39) {
            i = 63;
        }
        symbolsRef.innerHTML += "<div class=\"letterBox\">\n" +
            `        <p class=\"regular\">&#${i}</p>\n` +
            "     </div>"
    }

    symbolsRef.innerHTML += "<div class=\"letterBox\">\n" +
        `        <p class=\"regular\">&#${46}</p>\n` +
        "     </div>"

    symbolsRef.innerHTML += "<div class=\"letterBox\">\n" +
        `        <p class=\"regular\">&#${123}</p>\n` +
        "     </div>"

    symbolsRef.innerHTML += "<div class=\"letterBox\">\n" +
        `        <p class=\"regular\">&#${125}</p>\n` +
        "     </div>"

    document.addEventListener("scroll", scrollFunc);
}

const selectNav = (locator) => {
    document.getElementById(locator).classList.add("selected");
    for (let navItem of navItems) {
        if (navItem !== locator) document.getElementById(navItem).classList.remove("selected");
    }
}

const scrollFunc = () => {
    console.log(scrollY)
}
