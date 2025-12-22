const display = document.getElementById("display");

function press(value) {
    if(value === 'C') {
        display.value = "";
    } else {
        display.value += value;
    }
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}
