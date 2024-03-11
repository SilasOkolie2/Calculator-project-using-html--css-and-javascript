let buttons = document.querySelector(".buttons");
let btn = buttons.querySelectorAll("span");
let value = document.getElementById("value");
let calculatorOn = true; 

if (calculatorOn) {
    value.innerHTML = "0";
}

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
        if (calculatorOn) { 
            if (value.innerHTML === "0") {
                value.innerHTML = ""; 
            }
            if (this.innerHTML === "=") {
                value.innerHTML = eval(value.innerHTML);
            } else if (this.innerHTML === "Clear                                          ") {
                value.innerHTML = "0";
            } else if (this.innerHTML === "DE") {
                if (value.innerHTML.length > 1) {
                    value.innerHTML = value.innerHTML.slice(0, -1);
                } else {
                    value.innerHTML = "0"; 
                }
            } else {
                value.innerHTML += this.innerHTML;
            }
        }
    });
}

// This part is a Function to On/Off calculator on/off
function OnandOffCalculator() {
    calculatorOn = !calculatorOn; 
    if (calculatorOn) {
        value.innerHTML = "0";
    } else {
        value.innerHTML = "";
    }
}
document.getElementById("onOffButton").addEventListener("click", OnandOffCalculator);
