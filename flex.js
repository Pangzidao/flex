console.log("hello");

/* DOM elements*/

const title = document.getElementsByTagName("h1");
const container = document.getElementsByTagName("section");
const box = document.getElementsByTagName("div");
const btn = document.querySelectorAll("button");

console.log(btn[3]);

btn.forEach((item)=>{
    item.addEventListener("click",function(e){
        let btnId = e.target.id;
        let btnClass = e.target.className;
        container[0].style[btnClass] = btnId;
    });
});



