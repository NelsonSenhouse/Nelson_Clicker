// Title: Build a Counter App
var num = 0
var button = document.getElementById("count-el")
button.innerHTML = num

function increment() {
    num ++
    button.innerHTML = num
    console.log(num)
}