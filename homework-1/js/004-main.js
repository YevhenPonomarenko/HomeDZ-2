let divP = document.querySelector("div + p");
divP.style.cssText="background-color: yellow;";

let pUL = document.querySelectorAll("p ~ ul");
pUL.forEach(elem => {
    elem.style.cssText = "background: #ff0000;";
})

