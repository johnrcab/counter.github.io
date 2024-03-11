let counter = 0;

function btnIncrement() {
    counter++;
    updateCounter();
}

function btnDecrement() {
    if (counter == 0) {
        counter = 0;
    }
    else {
        counter--;
    }
    updateCounter();
}

function btnReset() {
    counter = 0;
    updateCounter();
}

function updateCounter() {
    let number = document.getElementById("number");
    number.innerHTML = counter;
}