function display() {
    var option = document.querySelector('#game');
    var show = option.value;
    document.querySelector('#resultplayer').textContent = show
}

function computerfunc() {
    var computerchoices = ["Rock", "Paper", "Scissors", "Spock"];
    var randomchoice = computerchoices[Math.floor(Math.random()*computerchoices.length)];
    document.getElementById("resultcomputer").innerHTML = randomchoice
}

function rock() {
    if (document.querySelector("#game").value == "Rock" && document.getElementById("resultcomputer").innerHTML == "Paper") {
        alert("You Lose")
        document.body.style.backgroundColor = "red"
    } else if (document.querySelector("#game").value == "Rock" && document.getElementById("resultcomputer").innerHTML == "Scissors") {
        alert("You Win")
        document.body.style.backgroundColor = "green"
    } else if (document.querySelector("#game").value == "Rock" && document.getElementById("resultcomputer").innerHTML == "Rock") {
        alert("Tie")
        document.body.style.backgroundColor = "blue"
    } else if (document.querySelector("#game").value == "Rock" && document.getElementById("resultcomputer").innerHTML == "Spock") {
        alert("You Lose")
        document.body.style.backgroundColor = "red"
    } else {
        return false;
    }
}

function paper() {
    if (document.querySelector("#game").value == "Paper" && document.getElementById("resultcomputer").innerHTML == "Scissors") {
        alert("You Lose")
        document.body.style.backgroundColor = "red"
    } else if (document.querySelector("#game").value == "Paper" && document.getElementById("resultcomputer").innerHTML == "Rock") {
        alert("You Win")
        document.body.style.backgroundColor = "green"
    } else if (document.querySelector("#game").value == "Paper" && document.getElementById("resultcomputer").innerHTML == "Paper") {
        alert("Tie")
        document.body.style.backgroundColor = "blue"
    } else if (document.querySelector("#game").value == "Paper" && document.getElementById("resultcomputer").innerHTML == "Spock") {
        alert("You Lose")
        document.body.style.backgroundColor = "red"
    } else {
        return false;
    }
}

function scissors() {
    if (document.querySelector("#game").value == "Scissors" && document.getElementById("resultcomputer").innerHTML == "Rock") {
        alert("You Lose")
        document.body.style.backgroundColor = "red"
    } else if (document.querySelector("#game").value == "Scissors" && document.getElementById("resultcomputer").innerHTML == "Paper") {
        alert("You Win")
        document.body.style.backgroundColor = "green"
    } else if (document.querySelector("#game").value == "Scissors" && document.getElementById("resultcomputer").innerHTML == "Scissors") {
        alert("Tie")
        document.body.style.backgroundColor = "blue"
    } else if (document.querySelector("#game").value == "Scissors" && document.getElementById("resultcomputer").innerHTML == "Spock") {
        alert("You Lose")
        document.body.style.backgroundColor = "red"
    } else {
        return false;
    }
}