let h1 = document.getElementById("id1");
h1.style.cssText="margin-Top:10px;background:red;";

let h1class = document.querySelector(".class1");
let h1Text = h1class.classList.add("newclass");
let h1style = document.querySelector(".newclass");
console.log(h1style.style);

let p = document.getElementsByTagName("p");
p[0].style.color="brown";

let div = document.querySelector("div > span");
div.style.color="red";
