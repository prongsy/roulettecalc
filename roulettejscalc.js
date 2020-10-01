let val1 = function straight() {
    var num1 = parseInt(document.getElementById("num1").value);
    if (num1 >= 1) {
        return num1 + 35 * num1;
    } else {
        return 0;
    }
};
let val2 = function split() {
    var num2 = parseInt(document.getElementById("num2").value);
    if (num2 >= 1) {
        return num2 + 17 * num2;
    } else {
        return 0;
    }
};
let val3 = function corner() {
    var num3 = parseInt(document.getElementById("num3").value);
    if (num3 >= 1) {
        return num3 + 8 * num3;
    } else {
        return 0;
    }
};
let val4 = function street() {
    var num3 = parseInt(document.getElementById("num4").value);
    if (num3 >= 1) {
        return num3 + 11 * num3;
    } else {
        return 0;
    }
};
let val5 = function dstreet() {
    var num3 = parseInt(document.getElementById("num5").value);
    if (num3 >= 1) {
        return num3 + 5 * num3;
    } else {
        return 0;
    }
};
let val6 = function basket() {
    var num3 = parseInt(document.getElementById("num6").value);
    if (num3 >= 1) {
        return num3 + 6 * num3;
    } else {
        return 0;
    }
};
function calculate() {
    let value = val1() + val2() + val3() + val4() + val5() + val6();
    document.getElementById("output").innerHTML = value;
};