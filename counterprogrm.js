const decrease = document.getElementById("decreasebtn");
const reset = document.getElementById("resetbtn");
const increase= document.getElementById("increasebtn");
const counter_lable = document.getElementById("my-lable");
let count = 0;
decrease.onclick=function(){
    count--;
    counter_lable.textContent = count;
}
increase.onclick=function(){
    count++;
    counter_lable.textContent = count;
}
reset.onclick=function(){
    count = 0;
    counter_lable.textContent = count;
}