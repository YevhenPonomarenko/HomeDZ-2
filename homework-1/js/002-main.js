let ollfile = document.querySelector("*");
ollfile.style.cssText="color:red;text-decoration:none;";

let p = document.getElementsByTagName("p");
p[0].style.color="brown";

let Pclass = document.querySelector(".class");
let pText = Pclass.classList.add("newclass");
let Pstyle = document.querySelector(".newclass");
Pstyle.style.color="green";
console.log(Pstyle.style);


let a = document.getElementsByTagName("a");
a[0].style.cssText="font-weight:bold;font-style:italic;text-decoration:underline;";


p[0].style.textTransform="uppercase";
a[0].style.textTransform="uppercase";

let h1 = document.getElementById("id1");
h1.style.cssText="margin-Top:10px;background:red;"

