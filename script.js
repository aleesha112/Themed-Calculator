document.querySelectorAll('input[name="theme"]').forEach((themeButton) => {
    themeButton.addEventListener('change', () => {
        document.body.setAttribute('data-theme', themeButton.id);
    });
});


function insert(value) {
    let display = document.getElementById("display");
    if (display.value == "0") display.value = value;
    else display.value += value;
}

function deleteDigit() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
    if (display.value == "") display.value = "0";
}

function clearDisplay() {
    document.getElementById("display").value = "0";
}

function calculate() {
    let display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Error";
    }
}
