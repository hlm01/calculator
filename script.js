const display = document.querySelector("#display");

let state = "first";
let previous = 0;
let current = 0;
let operator = "";
display.textContent = current;

const nums = document.querySelectorAll(".num");
for (const n of nums) {
    n.addEventListener("click", () => enterNum(n.textContent));
}

const ops = document.querySelectorAll(".operation");

for (const op of ops) {
    op.addEventListener("click", () => enterOp(op.textContent));
}

function enterNum(n) {

    if (state === "first" || state === "second") {
        current = current * 10 + Number(n);
    } else {
        current = Number(n);
        state = "second";
    }
    display.textContent = current;
    console.log("previous: "+previous+" current: "+current+" state: "+state)
}

function enterOp(sym) {
    if (sym === "C") {
        previous = 0;
        state = "first"
        current = 0;
        operator = "";
        display.textContent = current;
    } else if (sym === "=" ){
        if(state === "second") {
            current = operate(operator, previous, current);
            state = "first";
            display.textContent = current;
        }
    } else {
        if (state === "second"){
            current = operate(operator,previous,current);
        }
        previous = current;
        state = "operate";
        operator = sym;
        display.textContent = current;
    }
}

function operate(sym, first, second) {
    switch (sym) {
        case "+":
            console.log("result: "+ typeof first+ typeof second)
            return first + second;
        case "-":
            return first - second;
        case "⨯":
            return first * second;
        case "÷":
            return first / second;
    }
}

