let val1 = function straight() {
    var num1 = parseInt(document.getElementById("num1").value);
    if (num1 >= 1) {
        return 35 * num1;
    } else {
        return 0;
    }
};
let val2 = function split() {
    var num2 = parseInt(document.getElementById("num2").value);
    if (num2 >= 1) {
        return 17 * num2;
    } else {
        return 0;
    }
};
let val3 = function corner() {
    var num3 = parseInt(document.getElementById("num3").value);
    if (num3 >= 1) {
        return 8 * num3;
    } else {
        return 0;
    }
};
let val4 = function street() {
    var num4 = parseInt(document.getElementById("num4").value);
    if (num4 >= 1) {
        return 11 * num4;
    } else {
        return 0;
    }
};
let val5 = function dstreet() {
    var num5 = parseInt(document.getElementById("num5").value);
    if (num5 >= 1) {
        return 5 * num5;
    } else {
        return 0;
    }
};
let val6 = function basket() {
    var num6 = parseInt(document.getElementById("num6").value);
    if (num6 >= 1) {
        return 6 * num6;
    } else {
        return 0;
    }
};
function calculate() {
    let value = val1() + val2() + val3() + val4() + val5() + val6();
    document.getElementById("output").innerHTML = value;
};
function includeOgBet() {
        var num1 = parseInt(document.getElementById("num1").value);
        var num2 = parseInt(document.getElementById("num2").value);
        var num3 = parseInt(document.getElementById("num3").value);
        var num4 = parseInt(document.getElementById("num4").value);
        var num5 = parseInt(document.getElementById("num5").value);
        var num6 = parseInt(document.getElementById("num6").value);
        let value1 = val1() + val2() + val3() + val4() + val5() + val6();
        let value = value1 + (num1 || 0) + (num2 || 0) + (num3 || 0) + (num4 || 0) + (num5 || 0) + (num6 || 0);
        document.getElementById("outputOG").innerHTML = value;
}

num1.oninput = function () {
    if (this.value.length > 2) {
        this.value = this.value.slice(0,2); 
    }
};
num2.oninput = function () {
    if (this.value.length > 2) {
        this.value = this.value.slice(0,2); 
    }
};
num3.oninput = function () {
    if (this.value.length > 2) {
        this.value = this.value.slice(0,2); 
    }
};
num4.oninput = function () {
    if (this.value.length > 2) {
        this.value = this.value.slice(0,2); 
    }
};
num5.oninput = function () {
    if (this.value.length > 2) {
        this.value = this.value.slice(0,2); 
    }
};
num6.oninput = function () {
    if (this.value.length > 2) {
        this.value = this.value.slice(0,2); 
    }
};
