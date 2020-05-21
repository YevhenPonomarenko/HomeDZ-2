let h1 = document.getElementById("id1");
h1.style.cssText="margin-top:10px;background:red;";

let divClass = document.querySelector(".class1");
let div = divClass.classList.add("newclass");
let divStyle = document.querySelector(".newclass");
divStyle.style.cssText="color:blue;font-size:14px;text-decoration:underline;";
console.log(divStyle.style);


