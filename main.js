const h1 = document.querySelector(".agatha")
const h2 = document.querySelector(".wanda")
const h3 = document.querySelector("doubleslap")
const btn1 = document.querySelector(".btn-wanda")
const btn2 = document.querySelector(".btn-agatha")
const btn3 = document.querySelector(".btn-doubleslap")

let num1 = 0
let num2 = 0
let num3 = 0

btn1.addEventListener("click",() => {
    num1 = num1 +1
    h2.textContent = num1
    

})
btn2.addEventListener("click",() => {
    num2 = num2 +1
    h1.textContent = num2
    

})
btn3.addEventListener("click",() => {
    num3 = num3 +5
    h3.textContent = num3
    

})