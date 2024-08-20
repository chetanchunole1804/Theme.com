const btn = document.getElementById("btn");
const btn1 = document.getElementById("btn1");
var text = document.getElementById("text");
const bg1 = document.getElementById("bg1");
const bg2 = document.getElementById("bg2");
// const bg3 = document.getElementById("bg3");
// var main = document.getElementById("main");
var nav = document.getElementsByClassName("nav")
var t_clr = document.getElementsByClassName("clr")
var main = document.getElementsByClassName("main")
var floor = 0;
function changeTheme() {
    if (floor == 0) {
        btn1.style.left = "52%";
        btn.style.backgroundColor ="transparent"
        btn1.style.backgroundColor ="aqua"
        btn.style.border ="2px solid aqua"
        btn1.style.border ="2px solid aqua"
        // btn1.style.transition = "2s"
        text.innerHTML = "This is Night Theme"
        bg1.style.opacity = "1"
        bg2.style.opacity = "0"
        // bg3.style.opacity = "0"
        bg3.style.opacity = "0"
        obj1.style.display = "none"
        obj2.style.display = "none"
        // nav.style.color = "#fff"
        floor = 1;
    }
    else {
        btn1.style.left = ""
        text.innerHTML = "This is Day Theme"
        // btn.style.backgroundColor ="aqua"
        // btn1.style.backgroundColor ="grey"
        bg1.style.opacity = "0"
        bg2.style.opacity = "1"
        // bg3.style.opacity = "0"
        // nav.style.color = "green"
        floor = 0;
    }

}

const data = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum culpa dolor fuga beatae perspiciatis ipsa distinctio nesciunt, dignissimos explicabo blanditiis.Voluptate fuga culpa amet delectus sit vitae "
const data2 = document.getElementById("data2");
let index = 0;
function nextletter() {
    if (index < data.length) {
        data2.innerHTML += data[index];
        index++;
        setTimeout(nextletter, 50)
        // data.style.opacity ="0"
    }
    // else{
    //     data.style.opacity = "0"
    // }
}
nextletter()

const obj1 = document.getElementById("obj1");
const obj2 = document.getElementById("obj2");

obj1.addEventListener("mouseover", () =>{
    obj1.style.animation = "none"
})
obj1.addEventListener("mouseleave", () =>{
    obj1.style.animation = ""
})

obj2.addEventListener("mouseover", () =>{
    obj2.style.animation = "none"
})
obj2.addEventListener("mouseleave", () =>{
    obj2.style.animation = ""
})
