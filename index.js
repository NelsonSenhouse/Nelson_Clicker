// Title: Build a Counter App
var num = 0
var button1 = document.getElementById("count-el")
button2.innerHTML = num
var button2 = document.getElementById("save-btn")

function increment() {
    num ++
    button1.innerHTML = num
    console.log(num)
}

function save() {
    document.getElementById("entries").innerHTML += num + " - "
}