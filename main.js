
var output = 0;

function calculate() {
    
    var input1 = parseFloat(document.getElementById("userInput1").value);
    var input2 = parseFloat(document.getElementById("userInput2").value);
    var operator = document.getElementById("operator").value;

    switch(operator) {
        case "*":
            output = multiplication(input1, input2);
            break;
        case "/":
            output = division(input1, input2);
            break;
        case "+":
            output = addition(input1, input2);
            break;
        case "-":
            output = subtraction(input1, input2);
            break; 
        default:
            window.alert("Something went wrong you're not supposed to get this message");
            break;
    }

    document.getElementById("output").value = output;
}

function multiplication(input1, input2) {
    var output = input1 * input2;
    return output;
}

function division(input1, input2) {
    var output = input1 / input2;
    return output;
}

function addition(input1, input2) {
    var output = input1 + input2;
    return output;
}

function subtraction(input1, input2) {
    var output = input1 - input2;
    return output;
}