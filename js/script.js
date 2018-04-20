const del = document.getElementById("del");
const parL = document.getElementById("parL");
const parR = document.getElementById("parR");
const plus = document.getElementById("plus");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const minus = document.getElementById("minus");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const mul = document.getElementById("mul");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const divide = document.getElementById("divide");
const zero = document.getElementById("zero");
const coln = document.getElementById("coln");
const eql = document.getElementById("eql");
const clear = document.getElementById("clr")
let process = document.getElementById("process");
let result = document.getElementById("result");
let processArr = [];


displayClear();

eql.addEventListener('click', function () {
	let str = eval(processArr.join(""));
	result.textContent = str;
});

del.addEventListener('click', function () {
	processArr.pop();
	process.textContent = processArr.join("");
});

clear.addEventListener('click', function () {
	displayClear();
});

parR.addEventListener('click', function () {
	if (processArr.length !== 0) {
		setElement(")")
	}
});

parL.addEventListener('click', function () {
	setElement("(")
});

plus.addEventListener('click', function () {
	startingOperator("+");
});

divide.addEventListener('click', function () {
	startingOperator("/");
});

multiply.addEventListener('click', function () {
	startingOperator("*");
});

minus.addEventListener('click', function () {
	startingOperator("-");
});

dot.addEventListener('click', function () {
startingOperator(".");
});

zero.addEventListener('click', function () {
	if (processArr.length !== 0) {
		setElement("0")
	}
});

one.addEventListener('click', function () {
	setElement("1")
});

two.addEventListener('click', function () {
	setElement("2")
});

three.addEventListener('click', function () {
	setElement("3")
});

four.addEventListener('click', function () {
	setElement("4")
});

five.addEventListener('click', function () {
	setElement("5")
});

six.addEventListener('click', function () {
	setElement("6")
});

seven.addEventListener('click', function () {
	setElement("7")
});

eight.addEventListener('click', function () {
	setElement("8")
});

nine.addEventListener('click', function () {
	setElement("9")
});



function displayClear () {
	processArr = [];
	process.textContent = "0";
	result.textContent = "0";
}

function startingOperator (operatorType) {
	if (processArr.length === 0) {
		processArr.push("0")
		processArr.push(operatorType)
		process.textContent = processArr.join("");
	} else {
		setElement(operatorType)
	}
}

function setElement (num) {
	processArr.push(num);
	process.textContent = processArr.join("");
}










