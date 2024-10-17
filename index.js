// Title: Build a Counter App
var num = 0
var number = document.getElementById("count-el")
// button2.innerHTML = num
var button = document.getElementById("save-btn")

function increment() {
    num ++
    number.innerHTML = num
    console.log(num)
}

function save() {
    document.getElementById("entries").innerHTML += num + " - "
}

function reset() {
    document.getElementById("entries").innerHTML = "Previous entries: "
    num = 0
    number.innerHTML = 0
}