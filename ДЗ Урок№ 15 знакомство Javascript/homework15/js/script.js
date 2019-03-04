
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var main = document.getElementById("main");
var list = document.getElementById("list")
var ul = document.getElementById("ul");
var item = document.getElementsByClassName("item");
var popup = document.getElementsByClassName("popup");
var close = document.querySelector(".close");

main.style.background = "grey";


console.log(btn1);
console.log(btn2);
console.log(main);
console.log(list);
console.log(ul);
console.log(item);
console.log(popup);
console.log(close);

function addItem(){
    var newLi = document.createElement("li");
    newLi.innerHTML = "Новая задача";
    newLi.className = "Item";
    list.appendChild(newLi);
    popup.style.display = "none"; 
}

function delItem(){
    list.removeChild(story[0]);
    if(story.length == 0){
        popup.style.display = "block";
    }
    
}



function closePopup(){
    popup.style.display = "none";
}

btn1.addEventListener("click", addItem);
btn2.addEventListener("click", delItem);
close.addEventListener("click", closePopup);




